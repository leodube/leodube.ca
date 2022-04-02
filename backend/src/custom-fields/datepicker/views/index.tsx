/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";

import { jsx, Inline, Stack, Text } from "@keystone-ui/core";
import { FieldContainer, FieldLabel, DatePicker } from "@keystone-ui/fields";
import {
  CardValueComponent,
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from "@keystone-6/core/types";
import { CellLink, CellContainer } from "@keystone-6/core/admin-ui/components";
import {
  constructTimestamp,
  deconstructTimestamp,
  formatOutput,
  Value,
} from "./utils";

export const Field = ({
  field,
  value,
  onChange,
  forceValidation,
}: FieldProps<typeof controller>) => {
  const [touchedFirstInput, setTouchedFirstInput] = useState(false);
  const showValidation = touchedFirstInput || forceValidation;

  const validationMessages = showValidation
    ? validate(value, field.fieldMeta, field.label)
    : undefined;

  return (
    <FieldContainer as="fieldset">
      <Stack>
        <FieldLabel as="legend">{field.label}</FieldLabel>
        {onChange ? (
          <Inline gap="small">
            <Stack>
              <DatePicker
                onUpdate={(date) => {
                  onChange({
                    ...value,
                    value: {
                      dateValue: date,
                      timeValue:
                        typeof value.value.timeValue === "object" &&
                        value.value.timeValue.value === null
                          ? { kind: "parsed", value: "00:00:00.000" }
                          : value.value.timeValue,
                    },
                  });
                }}
                onClear={() => {
                  onChange({
                    ...value,
                    value: { ...value.value, dateValue: null },
                  });
                }}
                onBlur={() => setTouchedFirstInput(true)}
                value={value.value.dateValue ?? ""}
              />
              {validationMessages?.date && (
                <Text color="red600" size="small">
                  {validationMessages.date}
                </Text>
              )}
            </Stack>
          </Inline>
        ) : (
          value.value.dateValue !== null &&
          typeof value.value.timeValue === "object" &&
          value.value.timeValue.value !== null && (
            <Text>
              {formatOutput(
                constructTimestamp({
                  dateValue: value.value.dateValue,
                  timeValue: value.value.timeValue.value,
                })
              )}
            </Text>
          )
        )}
        {((value.kind === "create" &&
          typeof field.fieldMeta.defaultValue !== "string" &&
          field.fieldMeta.defaultValue?.kind === "now") ||
          field.fieldMeta.updatedAt) && (
          <Text>
            When this item is saved, this field will be set to the current date
          </Text>
        )}
      </Stack>
    </FieldContainer>
  );
};

function validate(
  value: Value,
  fieldMeta: DatepickerFieldMeta,
  label: string
):
  | {
      date?: string;
    }
  | undefined {
  const val = value.value;
  const hasDateValue = val.dateValue !== null;

  const isValueEmpty = !hasDateValue;
  if (value.kind === "update" && value.initial === null && isValueEmpty) {
    return undefined;
  }

  if (
    value.kind === "create" &&
    isValueEmpty &&
    ((typeof fieldMeta.defaultValue === "object" &&
      fieldMeta.defaultValue?.kind === "now") ||
      fieldMeta.updatedAt)
  ) {
    return undefined;
  }

  if (fieldMeta.isRequired && isValueEmpty) {
    return { date: `${label} is required` };
  }

  if (!hasDateValue) {
    return { date: `${label} requires a date to be selected` };
  }

  return undefined;
}

export const Cell: CellComponent = ({ item, field, linkTo }) => {
  let value = item[field.path];
  return linkTo ? (
    <CellLink {...linkTo}>{formatOutput(value)}</CellLink>
  ) : (
    <CellContainer>{formatOutput(value)}</CellContainer>
  );
};
Cell.supportsLinkTo = true;

export const CardValue: CardValueComponent = ({ item, field }) => {
  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      {formatOutput(item[field.path])}
    </FieldContainer>
  );
};

export type DatepickerFieldMeta = {
  defaultValue: string | { kind: "now" } | null;
  updatedAt: boolean;
  isRequired: boolean;
};
export const controller = (
  config: FieldControllerConfig<DatepickerFieldMeta>
): FieldController<Value, string> & { fieldMeta: DatepickerFieldMeta } => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    fieldMeta: config.fieldMeta,
    defaultValue: {
      kind: "create",
      value:
        typeof config.fieldMeta.defaultValue === "string"
          ? deconstructTimestamp(config.fieldMeta.defaultValue)
          : { dateValue: null, timeValue: { kind: "parsed", value: null } },
    },
    deserialize: (data) => {
      const value = data[config.path];
      return {
        kind: "update",
        initial: data[config.path],
        value: value
          ? deconstructTimestamp(value)
          : { dateValue: null, timeValue: { kind: "parsed", value: null } },
      };
    },
    serialize: ({ value: { dateValue, timeValue } }) => {
      if (
        dateValue &&
        typeof timeValue === "object" &&
        timeValue.value !== null
      ) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue: timeValue.value,
        });
        return { [config.path]: formattedDate };
      }
      return { [config.path]: null };
    },
    validate: (value) =>
      validate(value, config.fieldMeta, config.label) === undefined,
  };
};
