let ms = 0;
let startTime;
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

function startTimer() {
  // console.log("starting timer")
  ms = 0;
  startTime = new Date();
}

function stopTimer() {
  const endTime = new Date();
  ms = endTime - startTime;
  // console.log("ending timer - ", ms)
}

export function startFaceMatching(){
    console.log('starting matching')
}

export function handleUserSelection(userChoice, currentTrial){
    //!check if user is right or not, if user is right,
    //!increment the currentTrial, if not, show error, etc etc
    console.log("user choice: ", userChoice)
    console.log(currentTrial)
    currentTrial.value++
}