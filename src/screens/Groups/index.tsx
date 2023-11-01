import React from "react";
import { Container, Title } from "./styles";
import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highligth";
import { GroupCard } from "@/components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highligth title="Turmas" subTitle="jogue com a sua turma" />
      <GroupCard />
    </Container>
  );
}
