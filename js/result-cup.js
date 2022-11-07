import {
  GroupA,
  GroupB,
  GroupC,
  GroupD,
  GroupE,
  GroupF,
  GroupG,
  GroupH,
  storage,
  TEAMS,
} from "./Teams.js";
import { createTeamItem, displayTeamGroup } from "./UI.js";

import * as html2Canvas from "./html2canvas.js";

console.log(html2Canvas);
const groups = storage.fetch();

window.addEventListener("DOMContentLoaded", () => {
  for (let group of ["A", "B", "C", "D", "E", "F", "G", "H"]) {
    displayTeamGroup(`.groups-top-level.${group} .group-container`, [
      groups[`${group}1`],
      groups[`${group}2`],
    ]);
    document.querySelector(
      `.sub-level-team[data-level=${group}1]`
    ).innerHTML = `
    <div class="team">
    <figure class="flag">
      <img src="${groups[`${group}1`].flag}" />
      <figcaption>${groups[`${group}1`].team}</figcaption>
    </figure>
    </div>

      `;
    document.querySelector(
      `.sub-level-team[data-level=${group}2]`
    ).innerHTML = `
    <div class="team">
    <figure class="flag">
      <img src="${groups[`${group}2`].flag}" />
      <figcaption>${groups[`${group}2`].team}</figcaption>
    </figure>
    </div>
      `;
  }
});
