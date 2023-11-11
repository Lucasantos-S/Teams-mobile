import AsyncStorage from "@react-native-async-storage/async-storage";
import { GRUPO_COLLECTION } from "../storageConfig";

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GRUPO_COLLECTION);
    const groups: string[] = storage ? JSON.parse(storage) : [];
    return groups;
  } catch (error) {
    throw error;
  }
}
