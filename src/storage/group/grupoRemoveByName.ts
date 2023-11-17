import AsyncStorage from "@react-native-async-storage/async-storage";
import { GRUPO_COLLECTION, PLAYER_COLLECTION } from "@/storage/storageConfig";
import { groupsGetAll } from "./groupGetAll";

export async function removeGroupByName(groupDeleted: string) {
  try {
    const storage = await groupsGetAll();
    const Filtered = storage.filter((groups) => groups != groupDeleted);
    const groups = JSON.stringify(Filtered);

    await AsyncStorage.setItem(GRUPO_COLLECTION, groups);
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
