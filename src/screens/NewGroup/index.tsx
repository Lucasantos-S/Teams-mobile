import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Form, UsersIcon } from "./styles";
import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highligth";
import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";

export function NewGroup() {
  const [group, setGroup] = React.useState("");
  const navigation = useNavigation();

  function handlePlayes() {
    navigation.navigate("players", { group });
  }
  return (
    <Container>
      <Header showBackButton />
      <Form>
        <UsersIcon />
        <Highligth
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoas"
        />
        <InputText placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" onPress={handlePlayes} />
      </Form>
    </Container>
  );
}
