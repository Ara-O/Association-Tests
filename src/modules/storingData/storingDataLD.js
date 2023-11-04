import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
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

const firebaseConfigLD = {
    apiKey: import.meta.env.VITE_API_KEY_LD,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN_LD,
    projectId: import.meta.env.VITE_PROJECT_ID_LD,
    storageBucket: import.meta.env.STORAGE_BUCKET_LD,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_LD,
    appId: import.meta.env.VITE_APP_ID_LD,
};

// Initialize Firebase
const app = initializeApp(firebaseConfigLD, "ld");

const db = getDatabase(app);

export function storeLDPreSurvey(uid, data) {
    set(
        ref(
            db,
            `User-Pre-Survey-Data/User-${uid}`
        ),
        data
    );

}


export function storeLDData(
    store
) {
    if (!store.state.uid) {
        store.commit(
            "changeUserID",
            String(Math.floor(Math.random() * 10000))
        );
    }

    let data = store.state.ld_data

    console.log('data', data)
    if (data.length === 4) {
        console.log("Update loc stor")
    }

    // UPDATE USER INFO

    // console.log("data gets stored now - ", dataToStore);
    // dataToStore.forEach((element, outerIndex) => {
    //     element.forEach((trial, innerIndex) => {
    //         trial.browser = navigator["userAgent"];
    //         trial.dateTaken = `${cMonth}-${cDay}-${cYear}`;
    //         trial.stimulusOrder = innerIndex + 1;
    //         // rome-ignore lint/performance/noDelete: <explanation>
    //         delete trial.randomNo;
    //         // rome-ignore lint/performance/noDelete: <explanation>
    //         delete trial.visibility;
    //     });
    //     // console.log(element);
    // });

    // const db = getDatabase(app);

    // if (
    //     localStorage.getItem(
    //         `${thisData.$store.getters.getCurrentTest}_${thisData.$store.state.uid}_Times_Taken`
    //     ) === null
    // ) {
    //     localStorage.setItem(
    //         `${thisData.$store.getters.getCurrentTest}_${thisData.$store.state.uid}_Times_Taken`,
    //         1
    //     );
    // }

    // let numberOfTimesTestWasTaken = localStorage.getItem(
    //     `${thisData.$store.getters.getCurrentTest}_${thisData.$store.state.uid}_Times_Taken`
    // );
    // set(
    //     ref(
    //         db,
    //         `IBT_Brief_Black_White/User-${thisData.$store.state.uid
    //         }-${numberOfTimesTestWasTaken.padStart(2, 0)}`
    //     ),
    //     {
    //         data: dataToStore,
    //     }
    // );

    // if (updateLocalStorage) {
    //     localStorage.setItem(
    //         `${thisData.$store.getters.getCurrentTest}_${thisData.$store.state.uid}_Times_Taken`,
    //         Number(
    //             localStorage.getItem(
    //                 `${thisData.$store.getters.getCurrentTest}_${thisData.$store.state.uid}_Times_Taken`
    //             )
    //         ) + 1
    //     );
    // }
}
