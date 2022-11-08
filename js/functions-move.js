import { addChampions } from "./firebase.config.js";
import { storage } from "./Teams.js";

const champions = [];
const GROUP8 = {
  "level2-1": "",
  "level2-2": "",
  "level2-3": "",
  "level2-4": "",
  "level2-5": "",
  "level2-6": "",
  "level2-7": "",
  "level2-8": "",
};
const GROUP4 = {
  "level3-1": "",
  "level3-2": "",
  "level3-3": "",
  "level3-4": "",
};
const GROUP2 = {
  "final-1": "",
  "final-2": "",
};

function addToGroup8(key, img, level) {
  let oldPath = GROUP8[key];
  GROUP8[key] = img.src;
  moveImageToNext(GROUP8);
  if (
    document
      .getElementById(`level3-${Math.ceil(level / 2)}`)
      .getAttribute("src") &&
    document
      .getElementById(`level3-${Math.ceil(level / 2)}`)
      .getAttribute("src") == oldPath
  )
    document
      .getElementById(`level3-${Math.ceil(level / 2)}`)
      .setAttribute("src", img.src);
  if (
    document
      .getElementById(`final-${Math.ceil(level / 2 / 2)}`)
      .getAttribute("src") &&
    document
      .getElementById(`final-${Math.ceil(level / 2 / 2)}`)
      .getAttribute("src") == oldPath
  )
    document
      .getElementById(`final-${Math.ceil(level / 2 / 2)}`)
      .setAttribute("src", img.src);
}

function addToGroup4(key, img, level) {
  let oldPath = GROUP4[key];
  GROUP4[key] = img.src;
  moveImageToNext(GROUP4);
  if (
    document
      .getElementById(`final-${Math.ceil(level / 2)}`)
      .getAttribute("src") &&
    document
      .getElementById(`final-${Math.ceil(level / 2)}`)
      .getAttribute("src") == oldPath
  )
    document
      .getElementById(`final-${Math.ceil(level / 2)}`)
      .setAttribute("src", img.src);
}

function addToGroup2(key, img, level) {
  GROUP2[key] = img.src;
  moveImageToNext(GROUP2);
}

function addToChampions(img) {
  champions.push(img.src);
  addChampions(img.src);
  document.getElementById(`champions`).setAttribute("src", img.src);
  document.querySelectorAll(".sub-level img").forEach((image) => {
    if (image.src == img.src) {
      image.offsetParent.classList.add("active-path");
      let parent = image.offsetParent;
      let groupParent = parent.parentElement.parentElement.parentElement;
      if (
        document.querySelector(
          `#${groupParent.id} .sub-level-team:first-of-type img`
        ).src == img.src
      ) {
        groupParent.classList.add("active-path", "top");
      } else {
        groupParent.classList.add("active-path", "bottom");
      }
    }
  });
  let championsGroup = document.querySelector(".final-level-groups");
  if (
    document.querySelector(
      ".final-level-groups .final-level-team:first-of-type img"
    ).src == img.src
  ) {
    championsGroup.classList.add("active-path", "left");
  } else {
    championsGroup.classList.add("active-path", "right");
  }

  document.querySelector(".matches").classList.add("finished");
  document.querySelector(".final-level-champions").classList.add("active-path");
}
window.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i < 9; i++) {
    let groups = Array.from(
      document.querySelectorAll(`.sub-level #group${i} img`)
    );
    groups.forEach((img) => {
      img.addEventListener("click", () => {
        let groupsFilter = Array.from(
          document.querySelectorAll(`.sub-level #group${i} img`)
        );
        let checkIfTeamIsReady = groupsFilter.filter(
          (img) => img.getAttribute("src") !== ""
        );
        if (img.getAttribute("src") && checkIfTeamIsReady.length > 1)
          addToGroup8(`level2-${i}`, img, i);
      });
    });
  }
  for (let i = 1; i < 5; i++) {
    let groups = Array.from(document.querySelectorAll(`#subGroup${i} img`));
    groups.forEach((img) => {
      img.addEventListener("click", () => {
        let groupsFilter = Array.from(
          document.querySelectorAll(`#subGroup${i} img`)
        );
        let checkIfTeamIsReady = groupsFilter.filter(
          (img) => img.getAttribute("src") !== ""
        );
        if (img.getAttribute("src") && checkIfTeamIsReady.length > 1)
          addToGroup4(`level3-${i}`, img, i);
      });
    });
  }
  for (let i = 1; i < 3; i++) {
    let groups = Array.from(document.querySelectorAll(`#sub3Group${i} img`));
    let checkIfTeamIsReady = groups.filter(
      (img) => img.getAttribute("src") !== ""
    );
    groups.forEach((img, index) => {
      img.addEventListener("click", () => {
        let groupsFilter = Array.from(
          document.querySelectorAll(`#sub3Group${i} img`)
        );
        let checkIfTeamIsReady = groupsFilter.filter(
          (img) => img.getAttribute("src") !== ""
        );
        if (img.getAttribute("src") && checkIfTeamIsReady.length > 1)
          addToGroup2(`final-${i}`, img, index);
      });
    });
  }
  let finalGroup = Array.from(
    document.querySelectorAll(`.final-level-groups img`)
  );

  finalGroup.forEach((img) => {
    img.addEventListener("click", () => {
      let finalGroupFilter = Array.from(
        document.querySelectorAll(`.final-level-groups img`)
      );
      let checkIfTeamIsReady = finalGroupFilter.filter(
        (img) => img.getAttribute("src") !== ""
      );
      // push to group 2
      if (img.getAttribute("src") && checkIfTeamIsReady.length > 1)
        addToChampions(img);
    });
  });
});

function moveImageToNext(group) {
  for (let team in group) {
    if (group[team] != "") {
      document.getElementById(`${team}`).setAttribute("src", group[team]);
    }
  }
}


