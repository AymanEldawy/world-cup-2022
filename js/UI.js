import { storage } from "./Teams.js";
// create Team Items
export const createTeamItem = (team) => {
  let div = document.createElement("div");
  div.className = "team";
  div.setAttribute("data-group", team.group);
  div.innerHTML = `
    <figure class="flag">
      <img src="${team.flag}" />
      <figcaption>${team.team}</figcaption>
    </figure>
  `;
  return div;
};

// Display team group
export const displayTeamGroup = (selector, group) => {
  let element = document.querySelector(selector);
  for (let team of group) {
    element.append(createTeamItem(team));
  }
};

const createGroupChecker = (team) => {
  let label = document.createElement("label");
  label.className = "team";
  label.setAttribute("for", team.team);
  label.setAttribute("data-group", team.group);
  label.innerHTML = `
  <input type="checkbox" id="${team.team}" /> 
    <figure class="flag">
      <img src="${team.flag}" />
      <figcaption>${team.team}</figcaption>
    </figure>
  `;
  return label;
};

export const displayGroupChecker = (selector, group) => {
  if (document.querySelector("#group")) {
    let element = document.querySelector(selector);
    for (let team of group) {
      element.append(createGroupChecker(team));
    }
  }
};
