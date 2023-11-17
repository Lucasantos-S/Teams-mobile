import { GetPlayerByGroup } from "./PlayerGetByGroup";

export async function playersGetGroupByTeam(group: string, team: string) {
  try {
    const storage = await GetPlayerByGroup(group);

    const playerFilter = storage.filter((player) => player.team === team);

    return playerFilter;
  } catch (error) {
    throw error;
  }
}
