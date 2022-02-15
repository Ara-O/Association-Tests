<template >
<main @click="next">
    <img src="../../assets/IRBT_faces/welcome_instruction.jpg" alt="Welcome Instruction" style="width: 122vh">
    <h3>Click anywhere to start</h3>
    </main>
</template>

<style scoped>
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
    }

 @media (max-width: 852px) {
    main{
        background: white;
    }

    img{
        width: 82vw !important;
    }
}
</style>

<script>
export default {
    methods: {
        next(){
            this.$router.push("/IRBT/Start")
        }
    }
}
</script>