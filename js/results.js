import { createChampionItem, sortChampions } from "./main.js";
import { storage } from "./Teams.js";

window.addEventListener("DOMContentLoaded", () => {
  let teams = sortChampions();
  let len = teams.length;
  for (const team of teams) {
    document
      .querySelector(".results .teams")
      .append(createChampionItem(team, len));
  }
});
