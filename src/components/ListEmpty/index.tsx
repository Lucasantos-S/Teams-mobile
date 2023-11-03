import React from "react";
import { Container, Message, WarningIcon } from "./styles";

export interface IListEmptyProps {
  message: string;
}

export function ListEmpty({ message }: IListEmptyProps) {
  return (
    <Container>
      <WarningIcon />
      <Message>{message}</Message>
    </Container>
  );
}
