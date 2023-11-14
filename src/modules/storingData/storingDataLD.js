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

export function storeLDPreSurvey(uid, data, store) {

    data.pointOfContact = store.state.ld_point_of_contact

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

    let uid = store.state.uid

    data.forEach((outer, index) => {
        outer.forEach((inner, innerIndex) => {
            // First two steps
            if (index === 0 || index === 1) {
                inner.description = "User chooses a sad face for words associated with 'without learning difficulty', and a happy face for words related to learning difficulties"
            }
            // Last two steps
            if (index === 2 || index === 3) {
                inner.description = "User chooses a smiley face for words associated with 'without learning difficulty', and a sad face for words related to learning difficulties"
            }

            if (index === 0 || index === 2) {
                inner.description = "Practice: " + inner.description
            }

            inner.browser = navigator["userAgent"];
            inner.dateTaken = `${cMonth}-${cDay}-${cYear}`;
            inner.stimulusOrder = innerIndex + 1;
            delete inner.visibility
            delete inner.randomNo
            console.log("-", inner)
        })
    })


    if (
        localStorage.getItem(
            `IBT_LD_${uid}_Times_Taken`
        ) === null
    ) {
        localStorage.setItem(
            `IBT_LD_${uid}_Times_Taken`,
            1
        );
    }


    // Store data
    let numberOfTimesTestWasTaken = localStorage.getItem(
        `IBT_LD_${uid}_Times_Taken`
    );


    set(
        ref(
            db,
            `Test-Data/User-${uid}-${numberOfTimesTestWasTaken.padStart(2, 0)}`
        ),
        data
    );

    if (data.length === 4) {
        localStorage.setItem(
            `IBT_LD_${uid}_Times_Taken`,
            Number(
                localStorage.getItem(
                    `IBT_LD_${uid}_Times_Taken`
                )
            ) + 1
        );
    }
}

export function storeLDPostSurveyData(store, uid, data) {
    data.pointOfContact = store.state.ld_point_of_contact

    set(
        ref(
            db,
            `User-Post-Survey-Data/User-${uid}`
        ),
        data
    );
}