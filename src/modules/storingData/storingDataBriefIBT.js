import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, get } from "firebase/database";

/*
accuracy: 0
image: "B_CM03.jpg"
leftClickerFaceEmotion: "Happy"
ms: 3012
randomNo: 1
rightClickerFaceEmotion: "Sad"
stimulusEmotion: "Happy"
visibility: "none"
*/

let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

const firebaseConfigUow = {
  apiKey: import.meta.env.VITE_API_KEY_UOW,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_UOW,
  databaseURL: import.meta.env.VITE_DATABASE_URL_UOW,
  projectId: import.meta.env.VITE_PROJECT_ID_UOW,
  storageBucket: import.meta.env.STORAGE_BUCKET_UOW,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_UOW,
  appId: import.meta.env.VITE_APP_ID_UOW,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID_UOW,
};

// Initialize Firebase
const app = initializeApp(firebaseConfigUow, "secondary");

export function storeBriefIBTData(dataToStore, thisData) {
  // console.log("data gets stored now - ", dataToStore);
  dataToStore.forEach((element, outerIndex) => {
    element.forEach((trial, innerIndex) => {
      trial.browser = navigator["userAgent"];
      trial.dateTaken = `${cMonth}-${cDay}-${cYear}`;
      trial.stimulusOrder = innerIndex + 1;
      delete trial.randomNo;
      delete trial.visibility;
    });
    // console.log(element);
  });

  const db = getDatabase(app);

  if (
    localStorage.getItem(
      `${thisData.$store.getters.getCurrentTest}_${thisData.$store.state.uid}_Times_Taken`
    ) === null
  ) {
    localStorage.setItem(
      `${thisData.$store.getters.getCurrentTest}_${thisData.$store.state.uid}_Times_Taken`,
      1
    );
  }

  let numberOfTimesTestWasTaken = localStorage.getItem(
    `${thisData.$store.getters.getCurrentTest}_${thisData.$store.state.uid}_Times_Taken`
  );
  set(
    ref(
      db,
      `IBT_Brief_Black_White/User-${
        thisData.$store.state.uid
      }-${numberOfTimesTestWasTaken.padStart(2, 0)}`
    ),
    {
      data: dataToStore,
    }
  );

  localStorage.setItem(
    `${thisData.$store.getters.getCurrentTest}_${thisData.$store.state.uid}_Times_Taken`,
    Number(
      localStorage.getItem(
        `${thisData.$store.getters.getCurrentTest}_${thisData.$store.state.uid}_Times_Taken`
      )
    ) + 1
  );
}
