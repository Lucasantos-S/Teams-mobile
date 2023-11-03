import React from "react";
import { Container, Form } from "./styles";
import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highligth";
import { Input } from "@/components/InputText/styles";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highligth
        title="Nome da turma"
        subTitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
