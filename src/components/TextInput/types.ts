import { ChangeEvent } from "react";

type valueType = string | number | Array<any> | undefined;

export interface TextInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value: valueType;
  className: string;
  placeHolder: string;
}
