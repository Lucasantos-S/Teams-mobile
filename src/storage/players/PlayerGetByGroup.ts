import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "../storageConfig";
export async function GetPlayerByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

    const storagePlayer: PlayerStorageDTO[] = storage
      ? JSON.parse(storage)
      : [];

    return storagePlayer;
  } catch (error) {
    throw error;
  }
}
