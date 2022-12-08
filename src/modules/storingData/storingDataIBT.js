import { getDatabase, ref, set } from "firebase/database";

export function updateIBTData(
  Data,
  test,
  cMonth,
  cDay,
  cYear,
  whereToStore,
  version
) {
  //test -> this value
  //
  let dataclone = JSON.parse(JSON.stringify(Data));
  dataclone.forEach((dataouter, outerIndex) => {
    dataouter.forEach((data, innerIndex) => {
      //adding the current test, browser type, and the date taken
      data.currentTest = whereToStore;
      data.browser = navigator["userAgent"];
      data.dateTaken = `${cMonth}-${cDay}-${cYear}`;
      if (test.testType === "IBT_Gender_Subject") {
        if (outerIndex === 0) {
          data.description =
            "Practice: User clicks the male face for an image of a letter, and the female face for an image of a number";
        } else if (outerIndex === 1) {
          data.description =
            "User clicks the male face for an image of a letter, and the female face for an image of a number";
        } else if (outerIndex === 2) {
          data.description =
            "Practice: User clicks the female face for an image of a letter, and the male face for an image of a number";
        } else if (outerIndex === 3) {
          data.description =
            "User clicks the female face for an image of a letter, and the male face for an image of a number";
        }
      } else if (test.testType === "IBT_Gender_Roles") {
        if (outerIndex === 0) {
          data.description =
            "Practice: User clicks the male face for an image of a kitchen item, and the female face for an image of a office item";
        } else if (outerIndex === 1) {
          data.description =
            "User clicks the male face for an image of a kitchen item, and the female face for an image of a office item";
        } else if (outerIndex === 2) {
          data.description =
            "Practice: User clicks the female face for an image of a kitchen item, and the male face for an image of a office item";
        } else if (outerIndex === 3) {
          data.description =
            "User clicks the female face for an image of a kitchen item, and the male face for an image of a office item";
        }
      } else if (test.testType === "IBT_Gender_Color") {
        if (outerIndex === 0) {
          data.description =
            "Practice: User clicks the male face for an image of a blue color, and the female face for an image of a pink color";
        } else if (outerIndex === 1) {
          data.description =
            "User clicks the male face for an image of a blue color, and the female face for an image of a pink color";
        } else if (outerIndex === 2) {
          data.description =
            "Practice: User clicks the female face for an image of a blue color, and the male face for an image of a pink color";
        } else if (outerIndex === 3) {
          data.description =
            "User clicks the female face for an image of a blue color, and the male face for an image of a pink color";
        }
      }

      data.userWouldPrefer =
        test.$store.state.userData.userWouldPrefer || "Not provided";
      data.gender = test.$store.state.userData.gender || "Not provided";
      data.ethnicity =
        test.$store.state.userData.chosenethnicity || "Not provided";

      //Only for ibt gender
      if (test.testType[4] === "G") {
        data.boyWouldPrefer =
          test.$store.state.userData.boyWouldPrefer || "Not provided";
        data.girlWouldPrefer =
          test.$store.state.userData.girlWouldPrefer || "Not provided";
        //ibt for cat dog
      } else if (test.testType[4] === "C") {
        data.boyWouldPrefer = "N/A";
        data.girlWouldPrefer = "N/A";
      } else {
        data.howUserFeelsTowardsBlackChildren =
          test.$store.state.userData.howUserFeelsTowardsBlackChildren ??
          "Not provided";
        data.howUserFeelsTowardsWhiteChildren =
          test.$store.state.userData.howUserFeelsTowardsWhiteChildren ??
          "Not provided";
      }

      data.stimulus = data.image;
      data.testType = version;
      data.stimulusOrder = innerIndex + 1;
      delete data.image;
      delete data.name;
      delete data.visibility;
      delete data.isImg;
      delete data.randomNo;
      delete data.currentTest;
    });
  });
  return dataclone;
}

export function storeIBTGroupData(
  version,
  test,
  role,
  individualUid,
  familyUid
) {
  const db = getDatabase();

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

export function storeIBTIndividualData(version, test) {
  const db = getDatabase();

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

  localStorage.setItem(
    `${test.$store.getters.getCurrentTest}_${test.$store.state.uid}_Times_Taken`,
    Number(
      localStorage.getItem(
        `${test.$store.getters.getCurrentTest}_${test.$store.state.uid}_Times_Taken`
      )
    ) + 1
  );
  // const db = getDatabase();
  // set(ref(db, `${version}/User-${test.$store.state.uid}`), {
  //   data: test.$store.state[version],
  // });
}
