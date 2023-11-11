import React from "react";
import { Container, Icon } from "./styles";
import { IButtonIconProps } from "./ButtonIcon.structure";

export function ButtonIcon({
  icon,
  type = "PRIMARY",
  ...rest
}: IButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
