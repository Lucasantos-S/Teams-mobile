import React from "react";
import { FlatList } from "react-native";
import { Container, Title } from "./styles";
import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highligth";
import { GroupCard } from "@/components/GroupCard";

export function Groups() {
  const [groups, setGroups] = React.useState([] as string[]);

  const renderGroup = React.useMemo(() => {
    return (
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    );
  }, [groups]);
  return (
    <Container>
      <Header />
      <Highligth title="Turmas" subTitle="jogue com a sua turma" />
      {renderGroup}
    </Container>
  );
}
