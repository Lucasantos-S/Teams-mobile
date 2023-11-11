import React from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Container, Title } from "./styles";
import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highligth";
import { GroupCard } from "@/components/GroupCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { groupsGetAll } from "@/storage/group/groupGetAll";

export function Groups() {
  const [groups, setGroups] = React.useState([] as string[]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  const renderGroup = React.useMemo(() => {
    return (
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => navigation.navigate("players", { group: item })}
          />
        )}
        contentContainerStyle={groups.length === 0 && { marginTop: 100 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma turma cadastrada, que tal cadastrar?" />
        )}
        showsVerticalScrollIndicator={false}
      />
    );
  }, [groups]);

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {}
  }
  useFocusEffect(
    React.useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highligth title="Turmas" subTitle="jogue com a sua turma" />
      {renderGroup}
      <Button title="Cadastrar turmas" onPress={handleNewGroup} />
    </Container>
  );
}
