<template>
<v-container>
  <input type="hidden" id="anPageName" name="page" value="potpost-owner" />
    <div class="container-center-horizontal">
      <div class="potpost-owner screen">
        <div class="flex-col">
          <div class="ation-container">
            <a href="javascript:history.back()">
            <img
              class="variants-navigation-button"
              src="img/variants-navigation-button-7@2x.svg"
              alt="Variants/Navigation Button"
            />
            </a>
            <div class="location">
              <div class="text-container">
                <div class="text-139 valign-text-middle dmsans-normal-eerie-black-14px">위치</div>
                <div class="text-140 valign-text-middle dmsans-normal-red-orange-15px">우리집</div>
              </div>
              <img class="vector-2" src="img/vector-2@2x.svg" alt="Vector 2" />
            </div>
          </div>
          <div class="view">
            <div class="overlap-group-1"><div class="text-146 dmsans-bold-black-24px"><img :src = "categories[pot.category]" style="position: relative; width: 50px; top: -9px; left: -13px;" /> </div></div>
            <div class="flex-col-1">
              <div class="overlap-group3">
                <div class="text-144 valign-text-middle dmsans-bold-masala-24px">{{pot.title}}</div>
                <div class="nn dmsans-bold-tropical-rain-forest-20px">{{Object.keys(pot.parties).length}}/{{pot.max}}</div>
              </div>
              <p class="text-145 valign-text-middle dmsans-medium-gunsmoke-15px">{{sexes[pot.sex]}} / {{pickups[pot.pickup]}}</p>
            </div>
          </div>
          <div class="overlap-group6">
            <div class="overlap-group-2">
              <div class="rectangle-10"></div>
              <div class="text-141 dmsans-normal-black-15px">{{pot.contents}}</div>
            </div>
            <div class="delete-icon">
              <img class="iconly-light" src="img/iconly-light-delete@2x.svg" alt="Iconly/Light/Delete" />
            </div>
            <div class="edit-icon">
              <img class="iconly-light" src="img/iconly-light-edit-1@2x.svg" alt="Iconly/Light/Edit" />
            </div>
            <div class="overlap-group4">
              <div class="label valign-text-middle dmsans-bold-white-17px" @click="done()">모집마감</div>
            </div>
          </div>
             <img class="partition" src="img/partition@2x.svg" alt="partition" />
          <div class="overlap-group1" v-if="pot.done">
            <div class="n valign-text-bottom dmsans-bold-masala-18px">오픈채팅방링크</div>
            <div class="text-14 valign-text-middle dmsans-normal-masala-13px">{{pot.openchat}}</div>
            <img class="partition-1" src="img/-partition@2x.svg" alt="partition" />
          </div>
         
          <div class="bottombar">
            <div class="overlap-group5">
              <div class="group-411">
                <div class="iconly-light-search">
                  <div class="overlap-group">
                    <div class="ellipse_739"></div>
                    <img class="line_181" src="img/line-181-1@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img class="group-411-item" src="img/chat@2x.svg" alt="chat" />
                <div class="iconly-light-search-1">
                  <div class="overlap-group">
                    <div class="ellipse_739-1"></div>
                    <img class="line_181" src="img/line-181@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img
                  class="iconly-light-notification"
                  src="img/iconly-light-notification@2x.svg"
                  alt="Iconly/Light/Notification"
                />
                <img class="group-411-item" src="img/profile@2x.svg" alt="profile" />
              </div>
              <div class="icon"><img class="icon-logo" src="img/icon-logo-7@2x.svg" alt="Icon/Logo" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    

    
</v-container>
</template>

<script>
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, update } from 'firebase/database'
import { firebaseDB } from '@/firebase/db'

export default{
  components: {

  },data: () => ({
    auth: null,
    db: null,
    // categories:[
    //   {key : "chicken", value : "치킨"},
    //   {key : "fastfood", value : "패스트푸드"},
    //   {key : "pizza", value : "피자"},
    //   {key : "japanesfood", value : "일식"},
    //   {key : "chinesefood", value : "중식"},
    //   {key : "dessert", value : "디저트"},
    //   {key : "americanfood", value : "양식"},
    //   {key : "koreanfood", value : "한식"},
    //   {key : "bunsik", value : "분식"},
    //   {key : "nightfood", value : "야식"},
    //   {key : "asianfood", value : "아시안"},
    //   {key : "lunchbox", value : "도시락"},
    // ],
    categories:{
      chicken : "img/------1@2x.png" ,
      fastfood : "img/--------1@2x.png",
      pizza : "img/-----1@2x.png" ,
      japenesefood : "img/-----1-1@2x.png",
      chinesefood : "img/---------1@2x.png",
      dessert : "img/------1-1@2x.png",
      americanfood : "img/-------1@2x.png",
      koreanfood : "img/---------1-1@2x.png",
      bunsik : "img/---------1-2@2x.png",
      nightfood : "img/-------1-1@2x.png",
      asianfood : "img/---------2@2x.png",
      lunchbox : "img/--------1-1@2x.png",
    },
    sexes: {
      same: "동성",
      all: "상관 없음"
    },
    pickups:{
      myhome : "주인장 집",
      half : "중간 지점",
      yourhome : "팟원 집"
    },
    pot: {},
    headcount: 0
  }),
  methods: {
    confirm: function() {
        if(this.pot.parties[this.auth.currentUser?.uid]){
            alert('이미 참여한 팟입니다.')
            return
        }
        if (Object.keys(this.pot.parties).length >= this.pot.max){
            alert('마감된 팟입니다.')
            return
        }
        const result = window.confirm('참여하시겠습니까?')
        if (result === true) {
            this.pot.parties[this.auth.currentUser?.uid] = {
                doneNotiOwner: false,
                doneNotiParty : false

            }
            update(ref(this.db, `pots/${this.$route.query.potid}/parties`), this.pot.parties)
        }
        console.log(result)
    },
    done : function(){
      update(ref(this.db, `pots/${this.$route.query.potid}`), {
        done:true
      })
    }
  },
  created() {
    this.auth = getAuth()
    this.db = getDatabase()

    firebaseDB.potRead(this)
  }
}
</script>

<style scoped>
/* screen - potpost-owner */

.potpost-owner {
  align-items: flex-start;
  background-color: var(--zircon);
  border: 1px none;
  display: flex;
  gap: 658px;
  height: 812px;
  overflow: hidden;
  width: 375px;
}

.potpost-owner .flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: -1px;
  margin-top: 43px;
  min-height: 769px;
  width: 381px;
}

.potpost-owner .ation-container {
  align-items: center;
  align-self: flex-start;
  display: flex;
  gap: 92px;
  margin-left: 1px;
  min-width: 237px;
}

.potpost-owner .variants-navigation-button {
  height: 80px;
  width: 75px;
}

.potpost-owner .location {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 20px;
  height: 45px;
  margin-bottom: 7.0px;
  min-width: 70px;
}

.potpost-owner .text-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: -1px;
  min-height: 45px;
  width: 42px;
}

.potpost-owner .text-139 {
  height: 21px;
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-right: 2.0px;
  min-width: 26px;
  text-decoration: underline;
  white-space: nowrap;
}

.potpost-owner .text-140 {
  height: 23px;
  letter-spacing: -0.15px;
  line-height: 22.8px;
  min-width: 42px;
  text-align: center;
  white-space: nowrap;
}

.potpost-owner .vector-2 {
  align-self: center;
  height: 4px;
  margin-bottom: 19.5px;
  width: 8px;
}

.potpost-owner .view {
  align-items: center;
  display: flex;
  gap: 15px;
  margin-right: 5.0px;
  margin-top: 9px;
  min-width: 344px;
}

.potpost-owner .overlap-group-1 {
  align-items: flex-start;
  background-color: var(--desert-sand);
  border-radius: 50px;
  display: flex;
  height: 73px;
  justify-content: flex-end;
  min-width: 50px;
  padding: 23px 11.6px;
}

.potpost-owner .text-146 {
  letter-spacing: -0.72px;
  min-height: 26px;
  width: 26px;
}

.potpost-owner .flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 7.0px;
  min-height: 54px;
  width: 275px;
}

.potpost-owner .overlap-group3 {
  height: 31px;
  position: relative;
  width: 275px;
}

.potpost-owner .text-144 {
  height: 31px;
  left: 0;
  letter-spacing: 0;
  position: absolute;
  top: 0;
  width: 211px;
}

.potpost-owner .nn {
  left: 203px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  text-align: center;
  top: 14px;
  white-space: nowrap;
  width: 72px;
}

.potpost-owner .text-145 {
  height: 17px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-bottom: -1px;
  white-space: nowrap;
}

.potpost-owner .overlap-group6 {
  height: 222px;
  margin-right: 1.0px;
  margin-top: 10px;
  position: relative;
  width: 306px;
}

.potpost-owner .overlap-group-2 {
  height: 193px;
  left: 0;
  position: absolute;
  top: 0;
  width: 304px;
}

.potpost-owner .rectangle-10 {
  background-color: var(--mystic);
  border: 1px none;
  border-radius: 10px;
  height: 173px;
  left: 0;
  position: absolute;
  top: 0;
  width: 304px;
}

.potpost-owner .text-141 {
  left: 10px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 15px;
  width: 290px;
}

.potpost-owner .delete-icon {
  align-items: center;
  background-color: #fbe6e6;
  border: 1px none;
  border-radius: 15px;
  display: flex;
  height: 40px;
  left: 264px;
  min-width: 40px;
  padding: 0 8px;
  position: absolute;
  top: 182px;
}

.potpost-owner .iconly-light {
  height: 24px;
  width: 24px;
}

.potpost-owner .edit-icon {
  align-items: center;
  background-color: #d9f9e4;
  border: 1px none;
  border-radius: 15px;
  display: flex;
  height: 40px;
  left: 216px;
  min-width: 40px;
  padding: 0 8px;
  position: absolute;
  top: 182px;
}

.potpost-owner .overlap-group4 {
  align-items: center;
  background: linear-gradient(180deg, rgb(249.26, 135.89, 31.24) 0%, rgb(249.26, 135.89, 31.24) 0.01%, rgb(255, 119.34, 76.5) 100%);
  border-radius: 10px;
  display: flex;
  height: 40px;
  left: 108px;
  min-width: 100px;
  padding: 0 19px;
  position: absolute;
  top: 182px;
}

.potpost-owner .label {
  height: 21px;
  letter-spacing: -0.41px;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  width: 62px;
}

.potpost-owner .partition {
  height: 2px;
  margin-right: 3.0px;
  margin-top: 12px;
  width: 374px;
}

.potpost-owner .overlap-group1 {
  height: 74px;
  margin-right: 4.0px;
  margin-top: 7px;
  position: relative;
  width: 375px;
}

.potpost-owner .n {
  height: 24px;
  left: 24px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 0;
  width: 142px;
}

.potpost-owner .text-14 {
  height: 52px;
  left: 28px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 22px;
  width: 235px;
}

.potpost-owner .partition-1 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 72px;
  width: 375px;
}

.potpost-owner .overlap-group2 {
  height: 74px;
  margin-right: 3.0px;
  margin-top: 7px;
  position: relative;
  width: 374px;
}

.potpost-owner .n-1 {
  height: 24px;
  left: 24px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 0;
  width: 142px;
}

.potpost-owner .partition-2 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 72px;
  width: 374px;
}

.potpost-owner .bottombar {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 115px;
  margin-right: 3.0px;
  margin-top: 84px;
  min-width: 378px;
  padding: 0 1px;
}

.potpost-owner .overlap-group5 {
  background-image: url(../../public/img/rectangle-26-7@2x.svg);
  background-size: 100% 100%;
  height: 123px;
  margin-top: -8.25px;
  position: relative;
  width: 375px;
}

.potpost-owner .group-411 {
  align-items: flex-end;
  display: flex;
  height: 40px;
  left: 39px;
  min-width: 296px;
  position: absolute;
  top: 36px;
}

.potpost-owner .iconly-light-search {
  align-items: flex-end;
  border: 1px none;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  min-width: 24px;
  padding: 1.3px 1.7px;
}

.potpost-owner .overlap-group {
  height: 21px;
  position: relative;
  width: 20px;
}

.potpost-owner .ellipse_739 {
  border: 1.5px solid;
  border-color: var(--silver-chalice);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.potpost-owner .line_181 {
  height: 5px;
  left: 15px;
  position: absolute;
  top: 16px;
  width: 5px;
}

.potpost-owner .group-411-item {
  height: 24px;
  margin-left: 35px;
  width: 24px;
}

.potpost-owner .iconly-light-search-1 {
  align-items: flex-end;
  align-self: flex-start;
  border: 1px none;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  margin-left: 53px;
  min-width: 24px;
  padding: 1.3px 1.7px;
}

.potpost-owner .ellipse_739-1 {
  border: 1.5px solid;
  border-color: var(--white);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.potpost-owner .iconly-light-notification {
  height: 24px;
  margin-left: 53px;
  width: 24px;
}

.potpost-owner .icon {
  align-items: flex-end;
  background-color: var(--soft-peach);
  border: 1px none;
  border-radius: 30px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 60px;
  left: 156px;
  min-width: 60px;
  padding: 16.6px 10.4px;
  position: absolute;
  top: 14px;
}

.potpost-owner .icon-logo {
  height: 27px;
  width: 39px;
}

.potpost-owner .job-finder-app-1 {
  height: 4096px;
  margin-top: -2252px;
  object-fit: cover;
  width: 974px;
}

</style>