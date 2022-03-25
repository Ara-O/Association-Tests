<template>
<main>
<h3>Welcome to the Explore studies</h3>
<!-- <video width="500px" height="500px">
    <source src="https://www.youtube.com/watch?v=ScMzIvxBSi4">
</video> -->
<h4>Welcome video goes here</h4>
    <btn whereTo="/consent-form" class="explore-studies">Explore Studies</btn>
</main>
</template>

<script>
import btn from "../components/Jelly_Button.vue";
export default {
    components: {
        btn
    }
}
</script>
<style scoped>
.explore-studies{
    width: 130px;
    font-weight: 400;
    height: 41px;
}
</style>