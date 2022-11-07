export const storage = {
  fetch: () => {
    let world_cup_teams = JSON.parse(localStorage.getItem("world_cup_teams"));
    return world_cup_teams ? world_cup_teams : {};
  },
  save: (data) => {
    localStorage.setItem("world_cup_teams", JSON.stringify(data));
  },
  fetchCanvas: () => {
    let world_cup_teams_canvas = JSON.parse(
      localStorage.getItem("world_cup_teams_canvas")
    );
    return world_cup_teams_canvas ? world_cup_teams_canvas : "";
  },
  saveCanvas: (data) => {
    localStorage.setItem("world_cup_teams_canvas", JSON.stringify(data));
  },
};

export const TEAMS = [
  {
    id: "A1",
    team: "Qatar",
    flag: "images/groupA/Qatar.png",
    group: "A",
    level: "1",
  },
  {
    id: "A2",
    team: "Ecuador",
    flag: "images/groupA/Ecuador.png",
    group: "A",
    level: "1",
  },
  {
    id: "A3",
    team: "Senegal",
    flag: "images/groupA/Senegal.png",
    group: "A",
    level: "1",
  },
  {
    id: "A4",
    team: "Netherlands",
    flag: "images/groupA/Netherlands.png",
    group: "A",
    level: "1",
  },

  {
    id: "B1",
    team: "England",
    flag: "images/groupB/England.png",
    group: "B",
    level: "1",
  },
  {
    id: "B2",
    team: "Iran",
    flag: "images/groupB/Iran.png",
    group: "B",
    level: "1",
  },
  {
    id: "B3",
    team: "United States",
    flag: "images/groupB/United States.webp",
    group: "B",
    level: "1",
  },
  {
    id: "B4",
    team: "Wales",
    flag: "images/groupB/Wales.png",
    group: "B",
    level: "1",
  },

  {
    id: "C1",
    team: "Argentina",
    flag: "images/groupC/Argentina.webp",
    group: "C",
    level: "1",
  },
  {
    id: "C2",
    team: "Saudi Arabia",
    flag: "images/groupC/Saudi Arabia.png",
    group: "C",
    level: "1",
  },
  {
    id: "C3",
    team: "Mexico",
    flag: "images/groupC/Mexico.png",
    group: "C",
    level: "1",
  },
  {
    id: "C4",
    team: "Poland",
    flag: "images/groupC/Poland.png",
    group: "C",
    level: "1",
  },

  {
    id: "D1",
    team: "France",
    flag: "images/groupD/France.webp",
    group: "D",
    level: "1",
  },
  {
    id: "D2",
    team: "Australia",
    flag: "images/groupD/Australia.jpg",
    group: "D",
    level: "1",
  },
  {
    id: "D3",
    team: "Denmark",
    flag: "images/groupD/Denmark.png",
    group: "D",
    level: "1",
  },
  {
    id: "D4",
    team: "Tunisia",
    flag: "images/groupD/Tunisia.webp",
    group: "D",
    level: "1",
  },

  {
    id: "E1",
    team: "Spain",
    flag: "images/groupE/Spain.webp",
    group: "E",
    level: "1",
  },
  {
    id: "E2",
    team: "Costa Rica",
    flag: "images/groupE/Costa Rica.jpg",
    group: "E",
    level: "1",
  },
  {
    id: "E3",
    team: "Germany",
    flag: "images/groupE/Germany.svg",
    group: "E",
    level: "1",
  },
  {
    id: "E4",
    team: "Japan",
    flag: "images/groupE/Japan.png",
    group: "E",
    level: "1",
  },

  {
    id: "F1",
    team: "Belgium",
    flag: "images/groupF/Belgium.webp",
    group: "F",
    level: "1",
  },
  {
    id: "F2",
    team: "Canada",
    flag: "images/groupF/Canada.jpg",
    group: "F",
    level: "1",
  },
  {
    id: "F3",
    team: "Morocco",
    flag: "images/groupF/Morocco.png",
    group: "F",
    level: "1",
  },
  {
    id: "F4",
    team: "Croatia",
    flag: "images/groupF/Croatia.png",
    group: "F",
    level: "1",
  },

  {
    id: "G1",
    team: "Brazil",
    flag: "images/groupG/Brazil.png",
    group: "G",
    level: "1",
  },
  {
    id: "G2",
    team: "Serbia",
    flag: "images/groupG/Serbia.png",
    group: "G",
    level: "1",
  },
  {
    id: "G3",
    team: "Switzerland",
    flag: "images/groupG/Switzerland.webp",
    group: "G",
    level: "1",
  },
  {
    id: "G4",
    team: "Cameroon",
    flag: "images/groupG/Cameroon.webp",
    group: "G",
    level: "1",
  },

  {
    id: "H1",
    team: "Portugal",
    flag: "images/groupH/Portugal.jpg",
    group: "H",
    level: "1",
  },
  {
    id: "H2",
    team: "Ghana",
    flag: "images/groupH/Ghana.png",
    group: "H",
    level: "1",
  },
  {
    id: "H3",
    team: "Uruguay",
    flag: "images/groupH/Uruguay.png",
    group: "H",
    level: "1",
  },
  {
    id: "H4",
    team: "South Korea",
    flag: "images/groupH/South Korea.png",
    group: "H",
    level: "1",
  },
];
export const GroupA = TEAMS.filter((team) => team.group === "A");
export const GroupB = TEAMS.filter((team) => team.group === "B");
export const GroupC = TEAMS.filter((team) => team.group === "C");
export const GroupD = TEAMS.filter((team) => team.group === "D");
export const GroupE = TEAMS.filter((team) => team.group === "E");
export const GroupF = TEAMS.filter((team) => team.group === "F");
export const GroupG = TEAMS.filter((team) => team.group === "G");
export const GroupH = TEAMS.filter((team) => team.group === "H");

// All championss
const championss = [{ team: "", count: 1 }];
// Check if championss exist
// => plus +1
// => put

// Function go to next level
// Push to 16
const groupOf16 = [];
// Push to 8
const groupOf8 = [];
// Push to 4
const groupOf4 = [];
// Push to 2
const groupOf2 = [];
// Push to 1
const groupOf1 = [];

// Convert body to image
// Share image or Qr code

// Save championss in database
