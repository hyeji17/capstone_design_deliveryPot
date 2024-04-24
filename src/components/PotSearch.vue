<template>
<v-container>
          <!-- <div>
            <div v-for="(pot, index) in pots" :key="index">{{pot.title}} {{pot.category}}</div>
          </div> -->
 <input type="hidden" id="anPageName" name="page" value="potparticipation" />
    <div class="container-center-horizontal">
      <div class="potparticipation screen">
        <div class="flex-col">
          <div class="flex-row">
            <div class="flex-col-1">
              <div class="ation-container">
                <a href="/pothomescreen"
                  ><img
                    class="variants-navigation-button"
                    src="img/variants-navigation-button-3@2x.svg"
                    alt="Variants/Navigation Button"
                  />
                </a>
                <div class="location">
                  <div class="text-container-1">
                    <div class="text-70 valign-text-middle dmsans-normal-eerie-black-14px">위치</div>
                    <div class="text-71 valign-text-middle dmsans-normal-red-orange-15px">우리집</div>
                  </div>
                  <img class="vector-2" src="img/vector-2@2x.svg" alt="Vector 2" />
                </div>
              </div>
              <div class="text-72 valign-text-middle">근처의 팟을 찾아보세요!</div>
            </div>
            <div class="filter"><img class="filter-icon" src="img/filter-icon@2x.svg" alt="Filter Icon" /></div>
          </div>
          <!-- <a href="potpost-participants.html">
            <div class="post1">
              <div class="overlap-group">
                <div class="group-43">
                  <div class="overlap-group-1"><div class="text-4 dmsans-bold-black-24px">🍗</div></div>
                  <div class="text-container">
                    <div class="text dmsans-bold-scarpa-flow-18px">제목</div>
                    <div class="text-1 dmsans-normal-scarpa-flow-15px">선호성별/픽업방식/거리</div>
                  </div>
                </div>
                <div class="text-2 poppins-bold-tropical-rain-forest-20px">1/4</div>
              </div>
            </div></a
          > -->
          <div class="overlap-group-1" v-for="(pot, index) in pots" :key="index" @click="$router.push(`/potpost?potid=${index}`)">
            <div class="group-43">
              <div class="overlap-group"><div class="x1" > <img :src = "categories[pot.category]" style="position: relative; width: 56px; left: -12px; top: -7px;"/></div></div>
              <div class="text-container">
                <div class="text dmsans-bold-scarpa-flow-18px">{{pot.title}}</div>
                <div class="text-1 dmsans-normal-scarpa-flow-15px">{{sexes[pot.sex]}} / {{pickups[pot.pickup]}}</div>
              </div>
            </div>
            <div class="text-2 poppins-bold-tropical-rain-forest-20px">{{Object.keys(pot.parties).length}}/{{pot.max}}</div>
          </div>
        </div>
        <a href="/potcreate">
          <div class="edit-icon">
            <img class="iconly-light-edit" src="img/iconly-light-edit-1@2x.svg" alt="Iconly/Light/Edit" /></div
        ></a>
        <div class="bottombar">
          <div class="overlap-group7">
            <div class="group-411">
              <div class="iconly-light-search">
                <div class="overlap-group-2">
                  <div class="ellipse_739"></div>
                  <img class="line_181" src="img/line-181-3@2x.svg" alt="Line_181" />
                </div>
              </div>
              <img class="group-411-item" src="img/chat-3@2x.svg" alt="chat" />
              <div class="iconly-light-search-1">
                <div class="overlap-group-2">
                  <div class="ellipse_739-1"></div>
                  <img class="line_181" src="img/line-181-2@2x.svg" alt="Line_181" />
                </div>
              </div>
              <img
                class="iconly-light-notification"
                src="img/iconly-light-notification@2x.svg"
                alt="Iconly/Light/Notification"
              />
              <img class="group-411-item" src="img/profile-3@2x.svg" alt="profile" />
            </div>
            <div class="icon"><img class="icon-logo" src="img/icon-logo-3@2x.svg" alt="Icon/Logo" /></div>
          </div>
        </div>
      </div>
    </div>
</v-container>
</template>
<script>

// import "../../public/css/baedalpas-moeugi.css"
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, query, onValue, off, orderByChild, equalTo } from 'firebase/database'

export default{
  components: {
  },   
  data: () => ({
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
    pots: [],
    headcounts: {}
  }),
  created() {
    this.auth = getAuth()
    this.db = getDatabase()

    // db에서 pots 가져오기
    const category = this.$route.query.category
    let dbRef
    if (category) {
      dbRef = query(ref(this.db, 'pots'), orderByChild('category'), equalTo(category))
    } else {
      dbRef = query(ref(this.db, 'pots'))
    }
    onValue(dbRef, (snapshot) => {
      this.pots = snapshot.val()
      snapshot.forEach((childSnapshot) => {
        console.log('a', childSnapshot.key)
        console.log('b', childSnapshot.val())
      })
      off(dbRef)
      console.log(this.pots)
    }, {
      onlyOnce: false
    })
  }
}
</script>

<style scoped>
/* screen - potparticipation */

.potparticipation {
  background-color: var(--zircon);
  border: 1px none;
  height: 812px;
  overflow: hidden;
  position: relative;
  width: 375px;
}

.potparticipation .flex-col {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 547px;
  position: absolute;
  top: 43px;
  width: 362px;
}

.potparticipation .flex-row {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 56px;
  height: 126px;
  min-width: 343px;
}

.potparticipation .flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 124px;
  width: 262px;
}

.potparticipation .ation-container {
  align-items: center;
  display: flex;
  gap: 92px;
  min-width: 237px;
}

.potparticipation .variants-navigation-button {
  height: 80px;
  width: 75px;
}

.potparticipation .location {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 20px;
  height: 45px;
  margin-bottom: 7.0px;
  min-width: 70px;
}

.potparticipation .text-container-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: -1px;
  min-height: 45px;
  width: 42px;
}

.potparticipation .text-70 {
  height: 21px;
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-right: 2.0px;
  min-width: 26px;
  text-decoration: underline;
  white-space: nowrap;
}

.potparticipation .text-71 {
  height: 23px;
  letter-spacing: -0.15px;
  line-height: 22.8px;
  min-width: 42px;
  text-align: center;
  white-space: nowrap;
}

.potparticipation .vector-2 {
  align-self: center;
  height: 4px;
  margin-bottom: 19.5px;
  width: 8px;
}

.potparticipation .text-72 {
  align-self: flex-end;
  color: var(--masala);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-xxxxl);
  font-weight: 700;
  height: 29px;
  letter-spacing: 0;
  min-width: 240px;
  text-align: center;
}

.potparticipation .filter {
  align-items: flex-start;
  align-self: flex-end;
  background-color: #f2f2f2;
  border: 1px none;
  border-radius: 10px;
  display: flex;
  height: 30px;
  min-width: 25px;
  padding: 9.3px 7.3px;
}

.potparticipation .filter-icon {
  height: 10px;
  width: 10px;
}

.potparticipation .overlap-group1 {
  height: 73px;
  margin-top: 20px;
  position: relative;
  width: 345px;
}

.potparticipation .group-43 {
  align-items: center;
  display: flex;
  gap: 16px;
  height: 73px;
  left: 0;
  min-width: 274px;
  position: absolute;
  top: 0;
}

.potparticipation .overlap-group {
  align-items: flex-end;
  background-color: var(--desert-sand);
  border-radius: 50px;
  display: flex;
  height: 73px;
  min-width: 65px;
  padding: 22.6px 19px;
}

.potparticipation .text-7 {
  letter-spacing: -0.72px;
  min-height: 26px;
  width: 26px;
}

.potparticipation .text-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 4.0px;
  min-height: 53px;
  width: 189px;
}

.potparticipation .text {
  letter-spacing: 0;
  line-height: 27px;
  min-height: 25px;
  white-space: nowrap;
}

.potparticipation .text-1 {
  letter-spacing: 0;
  line-height: 22.5px;
  min-height: 25px;
  white-space: nowrap;
}

.potparticipation .text-2 {
  left: 273px;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  text-align: center;
  top: 24px;
  white-space: nowrap;
  width: 72px;
}

.potparticipation .overlap-group-1 {
  height: 73px;
  margin-right: 0;
  margin-top: 9px;
  position: relative;
  width: 345px;
}

.potparticipation .hansik {
  align-items: flex-end;
  background-color: var(--desert-sand);
  border-radius: 50px;
  display: flex;
  height: 73px;
  min-width: 65px;
  padding: 21px 17px;
}

.potparticipation .x1 {
  height: 30px;
  object-fit: cover;
  width: 30px;
}

.potparticipation .x1-1 {
  height: 30px;
  object-fit: cover;
  width: 30px;
}

.potparticipation .x1-2 {
  height: 30px;
  object-fit: cover;
  width: 30px;
}

.potparticipation .job-finder-app-1 {
  height: 4096px;
  left: 2269px;
  object-fit: cover;
  position: absolute;
  top: -1362px;
  width: 974px;
}

.potparticipation .post6 {
  align-items: flex-start;
  display: flex;
  height: 73px;
  left: 17px;
  min-width: 345px;
  position: absolute;
  top: 599px;
}

.potparticipation .overlap-group6 {
  height: 73px;
  position: relative;
  width: 345px;
}

.potparticipation .x1-3 {
  height: 30px;
  object-fit: cover;
  width: 30px;
}

.potparticipation .edit-icon {
  align-items: center;
  background-color: #d9f9e4;
  border: 1px none;
  border-radius: 15px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 60px;
  left: 288px;
  min-width: 60px;
  padding: 0 12px;
  position: fixed;
  top: 643px;
}

.potparticipation .iconly-light-edit {
  height: 36px;
  width: 36px;
}

.potparticipation .bottombar {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 115px;
  left: -1px;
  min-width: 378px;
  padding: 0 1px;
  position: fixed;
  top: 697px;
}

.potparticipation .overlap-group7 {
  background-image: url(../../public/img/rectangle-26-3@2x.svg);
  background-size: 100% 100%;
  height: 123px;
  margin-top: -8.25px;
  position: relative;
  width: 375px;
}

.potparticipation .group-411 {
  align-items: flex-end;
  display: flex;
  height: 40px;
  left: 39px;
  min-width: 296px;
  position: absolute;
  top: 36px;
}

.potparticipation .iconly-light-search {
  align-items: flex-end;
  border: 1px none;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  min-width: 24px;
  padding: 1.2px 1.7px;
}

.potparticipation .overlap-group-2 {
  height: 21px;
  position: relative;
  width: 20px;
}

.potparticipation .ellipse_739 {
  border: 1.5px solid;
  border-color: var(--silver-chalice);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.potparticipation .line_181 {
  height: 5px;
  left: 15px;
  position: absolute;
  top: 16px;
  width: 5px;
}

.potparticipation .group-411-item {
  height: 24px;
  margin-left: 35px;
  width: 24px;
}

.potparticipation .iconly-light-search-1 {
  align-items: flex-end;
  align-self: flex-start;
  border: 1px none;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  margin-left: 53px;
  min-width: 24px;
  padding: 1.2px 1.7px;
}

.potparticipation .ellipse_739-1 {
  border: 1.5px solid;
  border-color: var(--white);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.potparticipation .iconly-light-notification {
  height: 24px;
  margin-left: 53px;
  width: 24px;
}

.potparticipation .icon {
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

.potparticipation .icon-logo {
  height: 27px;
  width: 39px;
}

</style>
