<template>
<footer>
    <div class = "FooterBackground">
        <div id="search">
            <button @click = "search"><img alt="logo" src="../assets/검색.png"> 검색</button>
        </div>
        <div id="chat">
            <button @click = "chat"><img alt="logo" src="../assets/채팅.png">채팅</button>
        </div>
        <div id="pod">
            <button @click = "pod"><img alt="logo" src="../assets/팟.png"> 팟</button>
        </div>
        <div id="mypage">
            <button @click = "mypage"><img alt="logo" src="../assets/마이페이지.png">마이페이지</button>
        </div>
    </div>
</footer>
</template>

<script>
export default{
    name : 'PotFooter',
    methods: {
            search(){

            },
            chat(){

            },
            pod(){
                
            },
            mypage(){

            }
            ,
        },
}
</script>

<style scoped>
.FooterBackground{
    position: fixed;
    width: 375px;
    height: 92px;
    left: 0px;
    top: 731px;

    background: #FFD260;
    border-radius: 10px;
}

#pod{
    position: fixed;
    width: 25px;
    height: 57px;
    left: 215px;
    top: 745px;
}

#mypage{
    position: fixed;
    width: 69px;
    height: 61px;
    left: 286px;
    top: 741px;
}

#chat{
    position: fixed;
    width: 30px;
    height: 52px;
    left: 121px;
    top: 750px;
}

#search{
    position: fixed;
    width: 50px;
    height: 61px;
    left: 20px;
    top: 741px;
}   

</style>