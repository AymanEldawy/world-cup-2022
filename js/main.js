import { getChampions } from "./firebase.config.js";
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
import { displayGroupChecker, displayTeamGroup } from "./UI.js";

window.addEventListener("DOMContentLoaded", () => {
  getChampions();
  displayMostFourTeams();
  // Display groups
  displayGroupChecker(".groups .group-A #group", GroupA);
  displayGroupChecker(".groups .group-B #group", GroupB);
  displayGroupChecker(".groups .group-C #group", GroupC);
  displayGroupChecker(".groups .group-D #group", GroupD);
  displayGroupChecker(".groups .group-E #group", GroupE);
  displayGroupChecker(".groups .group-F #group", GroupF);
  displayGroupChecker(".groups .group-G #group", GroupG);
  displayGroupChecker(".groups .group-H #group", GroupH);
  for (let group of ["A", "B", "C", "D", "E", "F", "G", "H"]) {
    document
      .querySelectorAll(`.group-${group} label input`)
      .forEach((input) => {
        input.addEventListener("click", () => {
          chooseTeam(input.parentElement);
        });
      });
  }
  document
    .querySelectorAll('.groups input[type="checkbox"]')
    .forEach((input) => (input.checked = false));
});
const group16 = {};

function chooseTeam(label) {
  let groupAlpha = label.dataset.group;
  let parent = label.parentElement;
  let siblings = [...parent.children];
  let count = 1;
  // Has class
  if (label.classList.contains("active")) {
    let indexInGroup = document.querySelector(
      `label[for="${label.getAttribute("for")}"] span`
    ).textContent; // get Index group
    delete group16[indexInGroup]; // remove item
    if (!(Object.keys(group16).length > 15)) {
      document.getElementById("goNext").setAttribute("disabled", "");
    }
    label.classList.remove("active");
    count = count > 0 ? 0 : count - 1;
    document
      .querySelector(`label[for="${label.getAttribute("for")}"] span`)
      .remove();
    if (count < 2) {
      for (let sibling of siblings) {
        if (!sibling.classList.contains("active")) {
          document.querySelector(
            `label[for="${sibling.getAttribute("for")}"] input`
          ).style.opacity = "1";
          sibling.style.pointerEvents = "unset";
        }
      }
    }
  } else {
    let index = "";
    for (let sibling of siblings) {
      if (sibling.classList.contains("active")) {
        index = document.querySelector(
          `label.active[data-group=${sibling.dataset.group}] span`
        ).textContent;
        count++;
      }
    }
    if (count < 3) {
      let indexCount = "";
      indexCount =
        index === `${groupAlpha}1` ? `${groupAlpha}2` : `${groupAlpha}1`;
      let span = document.createElement("span");
      span.textContent = indexCount;
      label.append(span);
      label.classList.toggle("active");
    }
    if (count == 2) {
      // let groupElements = sibling.pa
      for (let sibling of siblings) {
        if (!sibling.classList.contains("active")) {
          document.querySelector(
            `label[for="${sibling.getAttribute("for")}"] input`
          ).style.opacity = "0";
          sibling.style.pointerEvents = "none";
        }
      }
    }
    let imgPath = document.querySelector(
      `label[for="${label.getAttribute("for")}"] img`
    ).src;
    let dynamicKey = {
      group: groupAlpha,
      index: count,
      flag: imgPath,
      team: label.getAttribute("for"),
    };
    addToGroup16(dynamicKey);
  }
}

function addToGroup16(group) {
  let dynamicKey = group.group + group.index;
  group16[dynamicKey] = {
    group: group.group,
    team: group.team,
    flag: group.flag,
  };

  if (Object.keys(group16).length > 15) {
    storage.save(group16);
    document.getElementById("goNext").removeAttribute("disabled");
  }
}

export function sortChampions() {
  let teams = storage.fetchTeams();
  let teamsList = [];

  for (let team of Object.keys(teams)) {
    teamsList.push(teams[team]);
  }
  teamsList.sort((a, b) => b.count - a.count);

  return teamsList;
}
sortChampions();
export function createChampionItem(champion, length) {
  let div = document.createElement("div");
  div.className = "most-teams-item";
  div.innerHTML = `
  <img src=${champion.flag} />
  <h3>${champion.team.replace("%20", " ")}</h3>
  <span>${calculationPercent(champion.count, length)}</span>`;

  return div;
}

export function calculationPercent(count, length) {
  return Math.round((count / length) * 100) + " %";
}

function displayMostFourTeams() {
  let teams = sortChampions();
  let len = teams.length;
  if (document.querySelector(".best-four")) {
    if (len > 4) {
      for (let i = 0; i < 4; i++) {
        document
          .querySelector(".teams")
          .append(createChampionItem(teams[i], len));
      }
    } else {
      for (let team of teams) {
        document.querySelector(".teams").append(createChampionItem(team));
      }
    }
  }
}
