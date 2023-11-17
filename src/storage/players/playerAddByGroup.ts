import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "../storageConfig";
import { GetPlayerByGroup } from "./PlayerGetByGroup";
import { AppError } from "@/utils/AppeError";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const playersGrupo = await GetPlayerByGroup(group);
    const playerAlreadyExists = playersGrupo.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError(
        `O jogador ${newPlayer.name} já está adicionada em um time aqui.`
      );
    }

    const playersAddGrupo = JSON.stringify([...playersGrupo, newPlayer]);
    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      playersAddGrupo
    );
  } catch (error) {
    throw error;
  }
}
