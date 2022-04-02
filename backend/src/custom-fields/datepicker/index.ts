import {
  BaseListTypeInfo,
  FieldTypeFunc,
  CommonFieldConfig,
  fieldType,
  orderDirectionEnum,
  filters,
} from "@keystone-6/core/types";
import { graphql } from "@keystone-6/core";
import { DatepickerFieldMeta } from "./views";
import path from "path";

function padTo2Digits(num: number): string {
  return num.toString().padStart(2, "0");
}

function formatDate(date: Date): string {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");
}

export type DatepickerFieldConfig<ListTypeInfo extends BaseListTypeInfo> =
  CommonFieldConfig<ListTypeInfo> & {
    isIndexed?: boolean | "unique";
    validation?: {
      isRequired?: boolean;
    };
    defaultValue?: string | { kind: "now" };
    graphql?: {
      create?: { isNonNull?: boolean };
      read?: { isNonNull?: boolean };
    };
    db?: {
      updatedAt?: boolean;
      isNullable?: boolean;
      map?: string;
    };
  };

export const datepicker =
  <ListTypeInfo extends BaseListTypeInfo>({
    isIndexed,
    validation,
    defaultValue,
    ...config
  }: DatepickerFieldConfig<ListTypeInfo> = {}): FieldTypeFunc<ListTypeInfo> =>
  (meta) => {
    if (typeof defaultValue === "string") {
      try {
        graphql.DateTime.graphQLType.parseValue(
          new Date(defaultValue).toISOString()
        );
      } catch (err) {
        throw new Error(
          `The datepicker field at ${meta.listKey}.${
            meta.fieldKey
          } specifies defaultValue: ${defaultValue} but values must be provided as a ISO8601 date string such as ${formatDate(
            new Date()
          )}`
        );
      }
    }
    const parsedDefaultValue =
      typeof defaultValue === "string"
        ? (graphql.DateTime.graphQLType.parseValue(
            new Date(defaultValue).toISOString()
          ) as Date)
        : defaultValue;

    const mode =
      validation?.isRequired === undefined
        ? "optional"
        : validation.isRequired
        ? "required"
        : "optional";

    return fieldType({
      kind: "scalar",
      mode,
      scalar: "DateTime",
      index: isIndexed === true ? "index" : isIndexed || undefined,
      default:
        typeof defaultValue === "string"
          ? {
              kind: "literal",
              value: defaultValue,
            }
          : defaultValue === undefined
          ? undefined
          : { kind: "now" },
      updatedAt: config.db?.updatedAt,
      map: config.db?.map,
    })({
      ...config,
      input: {
        uniqueWhere:
          isIndexed === "unique"
            ? { arg: graphql.arg({ type: graphql.DateTime }) }
            : undefined,
        where: {
          arg: graphql.arg({ type: filters[meta.provider].DateTime[mode] }),
          resolve: mode === "optional" ? filters.resolveCommon : undefined,
        },
        create: {
          arg: graphql.arg({
            type: config.graphql?.create?.isNonNull
              ? graphql.nonNull(graphql.DateTime)
              : graphql.DateTime,
            defaultValue:
              config.graphql?.create?.isNonNull &&
              parsedDefaultValue instanceof Date
                ? parsedDefaultValue
                : undefined,
          }),
          resolve(val) {
            if (val === undefined) {
              if (parsedDefaultValue === undefined && config.db?.updatedAt) {
                return undefined;
              }
              if (
                parsedDefaultValue instanceof Date ||
                parsedDefaultValue === undefined
              ) {
                val = (parsedDefaultValue as Date) ?? null;
              } else {
                val = new Date();
              }
            }
            return val;
          },
        },
        update: { arg: graphql.arg({ type: graphql.DateTime }) },
        orderBy: { arg: graphql.arg({ type: orderDirectionEnum }) },
      },
      output: graphql.field({
        type: config.graphql?.read?.isNonNull
          ? graphql.nonNull(graphql.DateTime)
          : graphql.DateTime,
      }),
      views: path.join(__dirname, "views"),
      getAdminMeta(): DatepickerFieldMeta {
        return {
          defaultValue: defaultValue ?? null,
          isRequired: validation?.isRequired ?? false,
          updatedAt: config.db?.updatedAt ?? false,
        };
      },
    });
  };
