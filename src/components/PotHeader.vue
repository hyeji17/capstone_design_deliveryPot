<template>
    <header>
        <div id = "select" class = "check">
            <select v-model="selected">
                <option disabled value = ""><h1>우리집</h1></option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div> 
        <div class="logo-container">
            <img alt="logo" src="../assets/alram.png">
        </div>
    </header>
</template>

<script>
export default{
    name : 'PotHeader',
     data(){
        return{
            selected : ''
        
        }
    }
}
</script>

<style scoped>

</style>