import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "../storageConfig";
import { playerGroup } from "./PlayerGetAllGroup";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const playersGrupo = await playerGroup(group);
    console.log(playersGrupo)
    const playersAddGrupo = JSON.stringify([...playersGrupo, newPlayer]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}- ${group}`, playersAddGrupo);
  } catch (error) {}
}
