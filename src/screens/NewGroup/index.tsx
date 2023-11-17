import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { Container, Form, UsersIcon } from "./styles";
import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highligth";
import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import { groupCreate } from "@/storage/group/groupCreate";
import { AppError } from "@/utils/AppeError";

export function NewGroup() {
  const [group, setGroup] = React.useState("");
  const navigation = useNavigation();

  async function handleCreateNewGroup() {
    try {
      if (!group.trim())
        return Alert.alert("Novo Grupo", "Informe o nome da turma");
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) Alert.alert("Novo Grupo", error.message);
      Alert.alert(
        "Novo Grupo",
        "Não foi possível criar um novo grupo, tente novamente."
      );
    }
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
        <Button title="Criar" onPress={handleCreateNewGroup} />
      </Form>
    </Container>
  );
}
