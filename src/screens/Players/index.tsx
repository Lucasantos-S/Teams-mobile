import React from "react";
import { FlatList, Alert, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Form, HeaderList, NumbersOfPlayes } from "./styles";
import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highligth";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Filter } from "@/components/Filter";
import { PlayerCard } from "@/components/PlayerCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import { playerAddByGroup } from "@/storage/players/playerAddByGroup";
import { PlayerStorageDTO } from "@/storage/players/PlayerStorageDTO";
import { playersGetGroupByTeam } from "@/storage/players/playerGetGroupByTeam";
import { AppError } from "@/utils/AppeError";
import { PlayerRemoveByGroup } from "@/storage/players/playerRemoveByGroup";
import { removeGroupByName } from "@/storage/group/grupoRemoveByName";
import { Loading } from "@/components/Loading";

type RoutersParams = {
  group: string;
};

export function Players() {
  const [loading, setLoading] = React.useState(true);
  const [team, setTeam] = React.useState("Time A");
  const [players, setPlayers] = React.useState([] as PlayerStorageDTO[]);
  const [name, setName] = React.useState("");

  const newPlayerNameInputRef = React.useRef<TextInput>(null);

  const navigation = useNavigation();

  const route = useRoute();
  const { group } = route.params as RoutersParams;

  async function handleAddPlayer() {
    if (name.trim().length === 0) {
      return Alert.alert(
        "Novo jogador",
        "Informe o nome da pessoa para adicionar."
      );
    }
    try {
      await playerAddByGroup({ name, team }, group);
      getPlayerByTeam();
      newPlayerNameInputRef.current?.blur();
      setName("");
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Novo jogador", error.message);
      } else {
        return Alert.alert("Novo jogador", "Não foi possivel adicionar.");
      }
    }
  }

  async function getPlayerByTeam() {
    try {
      setLoading(true);
      const data = await playersGetGroupByTeam(group, team);
      setPlayers(data);
    } catch (error) {
      return Alert.alert("Jogadores", "Não foi possivel carregar os jogadores");
    } finally {
      setLoading(false);
    }
  }

  async function removePlayer(playerName: string) {
    await PlayerRemoveByGroup(playerName, group);
    getPlayerByTeam();
  }

  async function removeGroup() {
    await removeGroupByName(group);
    navigation.navigate("groups");
  }

  async function handleRemoveGroup() {
    Alert.alert("Remover", `Deseja remover o turma ${group}?`, [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => removeGroup() },
    ]);
  }

  React.useEffect(() => {
    getPlayerByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highligth title={group} subTitle="adicione a galera e separe os times" />
      <Form>
        <InputText
          inputRef={newPlayerNameInputRef}
          placeholder="Nome do participante"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => {
                removePlayer(item.name);
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
      )}

      <Button
        title="Remover turma"
        type="SECONDARY"
        onPress={handleRemoveGroup}
      />
    </Container>
  );
}
