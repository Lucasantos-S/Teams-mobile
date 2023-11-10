import React from "react";
import { useRoute } from "@react-navigation/native";
import { Container, Form, HeaderList, NumbersOfPlayes } from "./styles";
import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highligth";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Filter } from "@/components/Filter";
import { FlatList } from "react-native";
import { PlayerCard } from "@/components/PlayerCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";

type RoutersParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = React.useState("Time A");
  const [players, setPlayers] = React.useState([]);

  const route = useRoute();
  const { group } = route.params as RoutersParams;

  return (
    <Container>
      <Header showBackButton />
      <Highligth title={group} subTitle="adicione a galera e separe os times" />
      <Form>
        <InputText placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayes>{players.length}</NumbersOfPlayes>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => {
              setPlayers((players) => players.filter((p) => p != item));
            }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhuma jogar cadastrado nesse time, que tal cadastrar?" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}