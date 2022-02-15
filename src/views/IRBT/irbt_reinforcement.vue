<template>
<main>
    <img src="../../assets/IRBT_faces/test_instruction.jpg" alt="">
    </main>
</template>

<script>
export default {
    mounted(){
        let that = this
        setTimeout(function (){
            that.$router.push("/IRBT/section_1");
        },4000 )
    }
}
</script>

<style scoped>
@media (max-width: 852px) {
    img{
        width: 82vw
    }
}
</style>