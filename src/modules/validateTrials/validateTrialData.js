function shuffleObjects(array) {
    for (var a = 0; a < array.length; a++) {
        var x = array[a];
        var y = Math.floor(Math.random() * (a + 1));
        array[a] = array[y];
        array[y] = x;
    }
    return array;
}

//testing for repetition
export default function validateTrial(fullData){
    //once the limit reaches four, place the current trial towards the end... 
    let limit = 1;
    fullData.forEach((trial, index) => {
            
            //If the next trial is the same key, add to limit
            if(index !== fullData.length - 1 && trial.key === fullData[index + 1].key){
                limit++; 
            } 

            //If the next element breaks the cycle, return the limit to 1
            if( index !== fullData.length - 1 && trial.key !== fullData[index + 1].key){
                limit = 1 
            }

            //If the limit - cycle - is four, re-shuffle the object and call the function again
            if(limit === 4){
                // console.log("There have been more than 4 in a row, rerolling");
                // let duplicate = JSON.parse(JSON.stringify(fullData))
                let fullDataRecursive = shuffleObjects(fullData);
                // console.log("Before ", duplicate)
                // console.log( "After ", fullDataRecursive)
                validateTrial(fullDataRecursive);
            }

    })

    return fullData
}