import { getDatabase, ref, set } from "firebase/database";

export default function storingDataFM(trial_data, store, version) {
  // console.log(version)
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  // console.log(trial_data, " ", store)
  trial_data.forEach((data) => {
    delete data.instruction;
    data.trialDataSet.forEach((el) => {
      el.browserInfo = navigator["userAgent"];
      el.dateTaken = `${cMonth}-${cDay}-${cYear}`;
      el.gender = store.state.userData.gender || "Not provided";
      el.ethnicity = store.state.userData.chosenethnicity || "Not provided";

      delete el.visibility;
    });
  });

  const db = getDatabase();
  set(ref(db, `${version}/User-${store.getters.getUID}`), {
    data: [trial_data[0].trialDataSet, trial_data[1].trialDataSet],
  });
}
