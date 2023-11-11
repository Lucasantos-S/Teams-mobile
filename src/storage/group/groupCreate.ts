import AsyncStorage from "@react-native-async-storage/async-storage";
import { GRUPO_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupGetAll";
import { AppError } from "@/utils/AppeError";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groupAlreadyExists = storedGroups.includes(newGroup);

    if (groupAlreadyExists) {
      throw new AppError(`O grupo ${newGroup} já foi cadastrado`);
    }
    const groups = JSON.stringify([...storedGroups, newGroup]);
    await AsyncStorage.setItem(GRUPO_COLLECTION, groups);
  } catch (error) {
    throw error;
  }
}
