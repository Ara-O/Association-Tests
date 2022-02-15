<template>
    <main>
        <img src="../../assets/IRBT_faces/practice_instruction.jpg" alt="Practice instruction">
    </main>
</template>

<script>
export default {
    mounted(){
        let that = this;
        setTimeout(function(){
            that.$router.push("/IRBT/Practice")
        }, 3000)
    }
    }
</script>

<style scoped>
@media (max-width: 852px) {
    main{
        background: white;
    }

    img{
        width: 82vw !important;
    }
}
</style>