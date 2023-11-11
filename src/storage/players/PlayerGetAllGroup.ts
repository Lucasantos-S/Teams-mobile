import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
export async function playerGroup(group: string) {
  try {
    const storedPlayer = await AsyncStorage.getItem(`${PLAYER_COLLECTION}- ${group}`);

    if (!storedPlayer) return [];

    return JSON.parse(storedPlayer)
  } catch (error) {}
}
