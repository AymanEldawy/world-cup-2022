import { createChampionItem, sortChampions } from "./main.js";
import { storage } from "./Teams.js";

window.addEventListener("DOMContentLoaded", () => {
  let teams = storage.fetchTeams();
  console.log(Object.keys(teams).length)
  let { sortedChampions, sortedChampionsIndex } = sortChampions();
  console.log(teams);
  let len = Object.keys(sortedChampions).length;
  console.log(len, Object.keys(sortedChampions).length)
  for (let i = 0; i < Object.keys(sortedChampions).length; i++) {
    console.log("run...");
    document
      .querySelector(".results .teams")
      .append(
        createChampionItem(sortedChampions[sortedChampionsIndex[i]], len)
      );
  }
});
