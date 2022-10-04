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
  startTimer();
}

export function handleUserSelection(testHasStarted, userChoice, trials, currentTest, currentTrial, userChoseCorrectlyStarFeedback, userChoseIncorrectlyFeedback, router, store){
    //!check if user is right or not, if user is right,
    //!increment the currentTrial, if not, show error, etc etc
    // console.log("user choice: ", userChoice, " correct choice: ", trials[currentTest.value].trialDataSet[currentTrial.value].correctImagePosition)
  
    
    if(userChoice === trials[currentTest.value].trialDataSet[currentTrial.value].correctImagePosition){
      console.log('they got it right')
      stopTimer();
      trials[currentTest.value].trialDataSet[currentTrial.value].visibility = "none"
      trials[currentTest.value].trialDataSet[currentTrial.value].reactionTime = ms;
      userChoseIncorrectlyFeedback.value = false
      userChoseCorrectlyStarFeedback.value = true
      
      setTimeout(function(){
        //if we are at the end of one test
        if(currentTrial.value === trials[currentTest.value].trialDataSet.length - 1) {
          stopTimer()
          //if we at the end of one test, check whether thats not the end of the series
          //of tests, if it is, thats the end!
          if(currentTest.value === trials.length -1){
            console.log("full test has ended")
            store.state[store.getters.getCurrentTest] = trials
            router.push("/FM_Categorization_Black_White_Feedback")
          }else {
            currentTest.value++;
            currentTrial.value = 0;
            testHasStarted.value = false,
            console.error("too big! this is the endd")     
          }
        } else {
          startTimer();
          currentTrial.value++
          trials[currentTest.value].trialDataSet[currentTrial.value].visibility = "block"
        }
       userChoseCorrectlyStarFeedback.value = false
     }, 1000)
     
    }else {
      console.log('they got it wrong')
      trials[currentTest.value].trialDataSet[currentTrial.value].accuracy = 0;
      userChoseIncorrectlyFeedback.value = true
      setTimeout(function(){
        userChoseIncorrectlyFeedback.value = false;
      }, 1000)
    }
}