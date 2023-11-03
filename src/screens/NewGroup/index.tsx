import React from "react";
import { Container, Form, UsersIcon } from "./styles";
import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highligth";
import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Form>
        <UsersIcon />
        <Highligth
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoas"
        />
        <InputText placeholder="Nome da turma" />
        <Button title="Criar" />
      </Form>
    </Container>
  );
}
