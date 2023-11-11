import React from "react";
import { Container, FilterStyleProps, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

export interface IFilterProps extends FilterStyleProps, TouchableOpacityProps {
  title: string;
}

export function Filter({ title, isActive, ...rest }: IFilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
