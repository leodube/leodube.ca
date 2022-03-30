/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";

import { jsx, Inline, Stack, VisuallyHidden, Text } from "@keystone-ui/core";
import {
  FieldContainer,
  FieldLabel,
  TextInput,
  DatePicker,
} from "@keystone-ui/fields";
import {
  CardValueComponent,
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from "@keystone-6/core/types";

export type DatepickerFieldMeta = {
  defaultValue: string | { kind: "now" } | null;
  updatedAt: boolean;
  isRequired: boolean;
};
