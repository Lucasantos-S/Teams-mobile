import React from "react";
import { Container, Icon, Name } from "./styles";
import { IPlayerCardProps } from "./PlayerCard.structure";
import { ButtonIcon } from "../ButtonIcon";

export function PlayerCard({ name, onRemove }: IPlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
