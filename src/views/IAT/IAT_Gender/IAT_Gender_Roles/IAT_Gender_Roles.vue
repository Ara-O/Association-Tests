<template>
    <div>
        <h4>wasssupp</h4>
    </div>
</template>

<script>
import * as trials from "../../../../modules/generateIatTrialsGender/generateIatTrialsRoles"
export default {
    mounted(){
        trials.testData_Block1("I", "E", 10)
        trials.testData_Block2("I", "E", 10)
        trials.testData_Block3("I", "E", 10)
        trials.testData_Block4("I", "E", 10)
    }
}
</script>