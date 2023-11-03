import React from "react";
import { Container, Title } from "./styles";
import { IButtonTypeProps } from "./Button.structure";

export function Button({ title, type = "PRIMARY", ...rest }: IButtonTypeProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
