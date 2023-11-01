import React from "react";
import { Container, SubTitle, Title } from "./styles";
import { IHighligthProps } from "./Higthligth.structure";


export function Highligth({ title, subTitle }: IHighligthProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
