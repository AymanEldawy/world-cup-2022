import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  getDocs,
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { storage } from "./Teams.js";

const firebaseConfig = {
  apiKey: "AIzaSyACAKgOUESrNgBEwBJUQtiD_R3MG5RKNvo",
  authDomain: "world-cup-2022-37653.firebaseapp.com",
  projectId: "world-cup-2022-37653",
  storageBucket: "world-cup-2022-37653.appspot.com",
  messagingSenderId: "922146639492",
  appId: "1:922146639492:web:f3307c9c1b7b83128ffcd1",
  measurementId: "G-BL3989BFW1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const colRef = collection(db, "teams");
const listTeams = [];

export async function getChampions() {
  return getDocs(colRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      listTeams.push({ ...doc.data(), id: doc.id });
    });
    getResults(listTeams);
  });
}

// Add champion
export function addChampions(champion) {
  addDoc(colRef, {
    team: champion,
  });
}

const getResults = (listTeams) => {
  let champions = {};
  for (let champion of listTeams) {
    let alt = champion.team.split("/").at(-1);
    let name = alt.split(".")[0];
    if (champions.hasOwnProperty(name)) {
      champions[name].count++;
    } else {
      champions[name] = { team: name, count: 1, flag: champion.team };
    }
  }
  storage.saveTeams(champions);

};
