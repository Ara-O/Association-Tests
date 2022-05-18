import { getDatabase, ref, set } from "firebase/database"

export default function(userData, version, thisval){
const db = getDatabase();
// console.log
let test = thisval;
set(ref(db, `${version}-Contact-Experience/User-${test.$store.state.uid}`), {
    data:  userData,
});
}