import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfigOccupation = {
  apiKey: import.meta.env.VITE_API_KEY_GENDER_OCCUPATION,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_GENDER_OCCUPATION,
  databaseURL: import.meta.env.VITE_DATABASE_URL_GENDER_OCCUPATION,
  projectId: import.meta.env.VITE_PROJECT_ID_GENDER_OCCUPATION,
  storageBucket: import.meta.env.STORAGE_BUCKET_GENDER_OCCUPATION,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_GENDER_OCCUPATION,
  appId: import.meta.env.VITE_APP_ID_GENDER_OCCUPATION,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID_GENDER_OCCUPATION,
};

// Initialize Firebase
const app3 = initializeApp(firebaseConfigOccupation, "tertiary");
export function updateIATData(
  Data,
  test,
  cMonth,
  cDay,
  cYear,
  whereToStore,
  version
) {
  // const db = getDatabase();
  let dataclone = JSON.parse(JSON.stringify(Data));
  dataclone.forEach((data, index) => {
    // console.log(data)
    //adding the current test, browser type, and the date taken
    data.currentTest = whereToStore;
    data.browser = navigator["userAgent"];
    data.dateTaken = `${cMonth}-${cDay}-${cYear}`;

    data.stimulus = data.image || data.name;
    data.testType = version;
    data.stimulusOrder = index + 1;
    data.gender = test.$store.state.userData.gender || "Not provided";
    data.ethnicity =
      test.$store.state.userData.chosenethnicity || "Not provided";

    data.userWouldPrefer =
      test.$store.state.userData.userWouldPrefer || "Not provided";

    //Only for iat gender and cat/dog
    if (data.testType[4] === "G") {
      data.boyWouldPrefer =
        test.$store.state.userData.boyWouldPrefer || "Not provided";
      data.girlWouldPrefer =
        test.$store.state.userData.girlWouldPrefer || "Not provided";
    } else if (data.testType[4] === "C") {
      data.boyWouldPrefer = "N/A";
      data.girlWouldPrefer = "N/A";
    } else {
      //Only for iat race
      if (
        test.$store.state.userData.slider1 === 0 ||
        test.$store.state.userData.slider1
      ) {
        data.howUserFeelsTowardsRace1 = test.$store.state.userData.slider1;
      } else {
        data.howUserFeelsTowardsBoys = "Not provided";
      }
      if (
        test.$store.state.userData.slider2 === 0 ||
        test.$store.state.userData.slider2
      ) {
        data.howUserFeelsTowardsRace2 = test.$store.state.userData.slider2;
      } else {
        data.howUserFeelsTowardsBoys = "Not provided";
      }
    }
    // rome-ignore lint/performance/noDelete: <explanation>
    delete data.image;
    // rome-ignore lint/performance/noDelete: <explanation>
    delete data.name;
    // rome-ignore lint/performance/noDelete: <explanation>
    delete data.visibility;
    // rome-ignore lint/performance/noDelete: <explanation>
    delete data.isImg;
  });

  test.$store.state[version].push(dataclone);
}

export function storeIATGroupData(
  version,
  test,
  role,
  individualUid,
  familyUid
) {
  const db = getDatabase(app3);

  if (
    localStorage.getItem(
      `${test.$store.getters.getCurrentTest}_Family_${familyUid}_${role}_${individualUid}_Times_Taken`
    ) === null
  ) {
    localStorage.setItem(
      `${test.$store.getters.getCurrentTest}_Family_${familyUid}_${role}_${individualUid}_Times_Taken`,
      1
    );
  }

  let numberOfTimesTestWasTaken = localStorage.getItem(
    `${test.$store.getters.getCurrentTest}_Family_${familyUid}_${role}_${individualUid}_Times_Taken`
  );

  set(
    ref(
      db,
      `Group-data/Family-${familyUid}/${role}-${individualUid}-${numberOfTimesTestWasTaken.padStart(
        2,
        0
      )}/${version}`
    ),
    {
      data: test.$store.state[version],
    }
  );

  localStorage.setItem(
    `${test.$store.getters.getCurrentTest}_Family_${familyUid}_${role}_${individualUid}_Times_Taken`,
    Number(
      localStorage.getItem(
        `${test.$store.getters.getCurrentTest}_Family_${familyUid}_${role}_${individualUid}_Times_Taken`
      )
    ) + 1
  );
}

export function storeIATIndividualData(
  version,
  test,
  updateLocalStorage = true
) {
  if (!test.$store.state.uid) {
    test.$store.commit(
      "changeUserID",
      String(Math.floor(Math.random() * 10000))
    );
  }

  if (
    localStorage.getItem(
      `${test.$store.getters.getCurrentTest}_${test.$store.state.uid}_Times_Taken`
    ) === null
  ) {
    localStorage.setItem(
      `${test.$store.getters.getCurrentTest}_${test.$store.state.uid}_Times_Taken`,
      1
    );
  }

  let numberOfTimesTestWasTaken = localStorage.getItem(
    `${test.$store.getters.getCurrentTest}_${test.$store.state.uid}_Times_Taken`
  );

  const db = getDatabase(app3);
  set(
    ref(
      db,
      `${version}/User-${
        test.$store.state.uid
      }-${numberOfTimesTestWasTaken.padStart(2, 0)}`
    ),
    {
      data: test.$store.state[version],
    }
  );

  if (updateLocalStorage) {
    localStorage.setItem(
      `${test.$store.getters.getCurrentTest}_${test.$store.state.uid}_Times_Taken`,
      Number(
        localStorage.getItem(
          `${test.$store.getters.getCurrentTest}_${test.$store.state.uid}_Times_Taken`
        )
      ) + 1
    );
  }
}
