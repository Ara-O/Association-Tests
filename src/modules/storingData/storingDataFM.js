import { getDatabase, ref, set } from "firebase/database";

export default function storingDataFM(
  store,
  version,
  updateLocalStorage = true,
  fullData
) {
  if (!store.state.uid) {
    store.commit("changeUserID", String(Math.floor(Math.random() * 10000)));
  }

  // console.log(version)
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  // console.log(trial_data, " ", store)
  fullData.forEach((data) => {
    // delete data.instruction;
    data.forEach((el) => {
      el.browserInfo = navigator["userAgent"];
      el.dateTaken = `${cMonth}-${cDay}-${cYear}`;
      el.gender = store.state.userData.gender || "Not provided";
      el.ethnicity = store.state.userData.chosenethnicity || "Not provided";

      delete el.visibility;
    });
  });

  const db = getDatabase();
  if (
    localStorage.getItem(
      `${store.getters.getCurrentTest}_${store.state.uid}_Times_Taken`
    ) === null
  ) {
    localStorage.setItem(
      `${store.getters.getCurrentTest}_${store.state.uid}_Times_Taken`,
      1
    );
  }

  let numberOfTimesTestWasTaken = localStorage.getItem(
    `${store.getters.getCurrentTest}_${store.state.uid}_Times_Taken`
  );

  set(
    ref(
      db,
      `${version}/User-${
        store.getters.getUID
      }-${numberOfTimesTestWasTaken.padStart(2, 0)}`
    ),
    {
      data: fullData,
    }
  );

  if (updateLocalStorage) {
    localStorage.setItem(
      `${store.getters.getCurrentTest}_${store.state.uid}_Times_Taken`,
      Number(
        localStorage.getItem(
          `${store.getters.getCurrentTest}_${store.state.uid}_Times_Taken`
        )
      ) + 1
    );
  }
}
