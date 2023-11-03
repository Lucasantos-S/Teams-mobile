import React from "react";
import { Input } from "./styles";

type IInputProps = {
  placeholder: string;
};

export function InputText({ placeholder }: IInputProps) {
  return <Input placeholder={placeholder}></Input>;
}
