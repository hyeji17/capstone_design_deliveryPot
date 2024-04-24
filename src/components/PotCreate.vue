<template>
<v-container>
    <!-- <div>
      <button @click='firebaseCreateSet()'>Create Set (모두 삭제하고 생성)</button>
      <button @click='firebaseCreatePush()'>Create Push (고유 키를 생성하며 데이터 생성)</button>
      <button @click='firebaseRead()'>Read</button>
      <button @click='firebaseDelete()'>Delete</button>
      <button @click='firebaseUpdate()'>Update (해당 부분만 수정)</button>
    </div> -->
<input type="hidden" id="anPageName" name="page" value="potcreate" />
    <div class="container-center-horizontal">
      <div class="potcreate screen">
        <div class="bottombar">
          <div class="overlap-group4">
            <div class="group-411">
              <div class="iconly-light-search">
                <div class="overlap-group">
                  <div class="ellipse_739"></div>
                  <img class="line_181" src="img/line-181-3@2x.svg" alt="Line_181" />
                </div>
              </div>
              <img class="group-411-item" src="img/chat-3@2x.svg" alt="chat" />
              <div class="iconly-light-search-1">
                <div class="overlap-group">
                  <div class="ellipse_739-1"></div>
                  <img class="line_181" src="img/line-181-2@2x.svg" alt="Line_181" />
                </div>
              </div>
              <img
                class="iconly-light-notification"
                src="img/iconly-light-notification@2x.svg"
                alt="Iconly/Light/Notification"
              />
              <img class="group-411-item" src="img/profile@2x.svg" alt="profile" />
            </div>
            <div class="icon"><img class="icon-logo" src="img/icon-logo-5@2x.svg" alt="Icon/Logo" /></div>
          </div>
        </div>
         <!-- <div style="overflow:auto; width:350px; height:800px;"></div> -->
          <div class="ation-container">
            <a href="javascript:history.back()"
              ><img
                class="variants-navigation-button"
                src="img/variants-navigation-button-5@2x.svg"
                alt="Variants/Navigation Button"
              />
            </a>
        <div class="create-component">
            <div class="location">
              <div class="text-container">
                <div class="text-101 valign-text-middle dmsans-normal-eerie-black-14px">위치</div>
                <div class="text-102 valign-text-middle dmsans-normal-red-orange-15px">우리집</div>
              </div>
              <img class="vector-2" src="img/vector-2@2x.svg" alt="Vector 2" />
            </div>
          <div class="text-103 valign-text-middle">배달팟의 주인장이 되어보세요!</div>

          <div class="view-1">
            <div class="text-105 valign-text-middle dmsans-semi-bold-cape-cod-15px">메뉴 카테고리</div>
            <div class="overlap-group-1">
              <v-select :items="categories" item-text="value" item-value="key" label = "선택" v-model="pot.category" @change="check()"></v-select> 
            </div>
          </div>
          <div class="view">
            <div class="text-container-1">
              <div class="text-1-1 valign-text-middle dmsans-semi-bold-cape-cod-15px">제목</div>
              <p class="text-1-2 valign-text-middle dmsans-semi-bold-gunsmoke-13px">위치와 메뉴가 한눈에 드러나게 적어주세요!</p>
            </div>
            <div class="overlap-group-1">
              <input class="text-1 valign-text-bottom dmsans-normal-cape-cod-13px" v-model="pot.title" placeholder="입력">
              <img class="vector" src="img/vector-6@2x.svg" alt="Vector" />
            </div>
          </div>
          <div class="view">
            <div class="text-container-2">
              <div class="text-1-1 valign-text-middle dmsans-semi-bold-cape-cod-15px">내용</div>
              <p class="text-1-2 valign-text-middle dmsans-semi-bold-gunsmoke-13px">진행방식과 참고사항에 대해 자세히 적어주세요!</p>
            </div>
            <div class="overlap-group-2">
              <textarea v-model="pot.contents" class="text-109 valign-text-bottom dmsans-normal-cape-cod-13px" placeholder="입력"></textarea>
              <img class="vector-1" src="img/vector-8@2x.svg" alt="Vector" />
            </div>
          </div>
          <div class="view-2">
            <div class="text-11 valign-text-middle dmsans-semi-bold-cape-cod-15px">선호 성별</div>
            <div class="component">
               <!-- <div class="segmented-picker-option"> -->
                <div class="separator-1"></div>
                <div class="gender-picker-only" v-if="pot.sex === 'same'">
                  <!-- <div class="coloronly-option"><div class="coloronly valign-text-middle dmsans-bold-white-13px"><label for="sexSame">동성만</label></div></div/> -->
                  <div class="coloronly-option"><div class="coloronly valign-text-middle dmsans-bold-white-13px"><label for="sexSame">동성만</label></div></div>
                  <div class="nopro-option"><div class="nopro valign-text-middle dmsans-normal-gunsmoke-12px"><label for="sexAll">상관X</label></div></div>
                </div>
                <div class="gender-picker-nopro" v-if="pot.sex === 'all'">
                    <div class="only-option"><div class="only valign-text-middle dmsans-normal-gunsmoke-12px"><label for="sexSame">동성만</label></div></div>
                    <div class="colornopro-option"><div class="colornopro valign-text-middle dmsans-bold-white-13px"><label for="sexAll">상관X</label></div></div>
                </div>
              <!-- </div> -->
              <input style="display: none" type="radio" v-model="pot.sex" value="same" id="sexSame">
              <input style="display: none" type="radio" v-model="pot.sex" value="all" id="sexAll">
            </div>
          </div>
          <div class="view-3">
            <div class="text-11 valign-text-middle dmsans-semi-bold-cape-cod-15px">픽업 방식</div><div class="component">
              
             <div class="pickup-picker-myhome" v-if="pot.pickup === 'myhome'">
              <div class="colormyhome-option">
                <div class="colormyhome valign-text-middle dmsans-bold-white-13px"><label for="myHome">우리집픽업</label></div>
              </div>
              <div class="x-option"><div class="middle valign-text-middle dmsans-medium-gunsmoke-13px"><label for="middle">중간지점픽업</label></div></div>
              <div class="x-option">
                <div class="separator"></div>
                <div class="others valign-text-middle dmsans-medium-gunsmoke-13px"><label for="yourHome">남의집픽업</label></div>
              </div>
            </div> 

              <div class="pickup-picker-others" v-if="pot.pickup === 'yourhome'">
                <div class="e-option">
                  <div class="separator"></div>
                  <div class="myhome valign-text-middle dmsans-medium-gunsmoke-13px"><label for="myHome">우리집픽업</label></div>
                </div>
                <div class="e-option"><div class="middle valign-text-middle dmsans-medium-gunsmoke-13px"><label for="middle">중간지점픽업</label></div></div>
                <div class="colorothers-option">
                  <div class="colorothers valign-text-middle dmsans-bold-white-13px"><label for="yourHome">남의집픽업</label></div>
                </div>
              </div>
              
              <div class="pickup-picker-middle" v-if="pot.pickup === 'half'">
                <div class="x-option">
                  <div class="separator"></div>
                  <div class="mythome valign-text-middle dmsans-medium-gunsmoke-13px"><label for="myHome">우리집픽업</label></div>
                </div>
                <div class="colormiddle-option">
                  <div class="colormiddle valign-text-middle dmsans-bold-white-13px"><label for="middle">중간지점픽업</label></div>
                </div>
                <div class="x-option"><div class="others valign-text-middle dmsans-medium-gunsmoke-13px"><label for="yourHome">남의집픽업</label></div></div>
              </div>
             
              <input style="display: none" type="radio" v-model="pot.pickup" value="myhome" id="myHome">
              <input style="display: none" type="radio" v-model="pot.pickup" value="yourhome" id="yourHome">
              <input style="display: none" type="radio" v-model="pot.pickup" value="half" id="middle">

            </div>
          </div>
          <div class="view-4">
          <div class="text-container-3">
            <div class="text-114 valign-text-middle dmsans-semi-bold-cape-cod-15px">팟원수 설정</div>
            <p class="text-116 valign-text-middle dmsans-semi-bold-gunsmoke-13px">
              최소 1명 이상, 최대 10명 이하로 설정해주세요!
            </p>
          </div>
          <div class="overlap-group-1">
            <div class="text-1 valign-text-bottom dmsans-normal-cape-cod-13px">
              <input type="number" id="potNumber" name="number" placeholder="입력" min="2" max="10" value="2" style="border:0 solid black" v-model="pot.max"></div>
            <img class="vector" src="img/vector-6@2x.svg" alt="Vector" />
          </div>
        </div>
          <div class="view-5">
            <div class="text-container-4">
              <div class="text-118 valign-text-middle dmsans-semi-bold-cape-cod-15px">오픈카톡 링크</div>
              <div class="text-120 valign-text-middle">
                (선택) 오픈카카오톡링크를 생성하여<br />팀원들에게 공유해주세요!
              </div>
            </div>
            <div class="overlap-group-1">
              <div class="text-1 valign-text-bottom dmsans-normal-cape-cod-13px">
                <input type="text" id="link" name="link" placeholder="입력" style="border:0 solid black" v-model="pot.openchat"></div>
              <img class="vector" src="img/vector-6@2x.svg" alt="Vector" />
            </div>
          </div>
          
            <div class="view-6"><div class="text-117 valign-text-middle" @click="create()">배달팟 모으기</div></div>
            <!-- <v-btn @click = "create()">배달팟열기</v-btn> -->
        </div>
        </div>
      </div>
          </div>

</v-container>
</template>
<script>
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, set, push, query, onValue, orderByChild, equalTo, off, remove, update } from 'firebase/database'
import { firebaseDB } from '../firebase/db'

export default{
  components: {

  },
  data: () => ({
    auth: null,
    db: null,
    categories:[
      {key : "chicken", value : "치킨"},
      {key : "fastfood", value : "패스트푸드"},
      {key : "pizza", value : "피자"},
      {key : "japanesfood", value : "일식"},
      {key : "chinesefood", value : "중식"},
      {key : "dessert", value : "디저트"},
      {key : "americanfood", value : "양식"},
      {key : "koreanfood", value : "한식"},
      {key : "bunsik", value : "분식"},
      {key : "nightfood", value : "야식"},
      {key : "asianfood", value : "아시안"},
      {key : "lunchbox", value : "도시락"},
    ],
    pot: {
      category: '',
      title : '',
      contents : '',
      sex: 'same',
      pickup : 'half',
      max : '2',
      parties : {},
      openchat : '',
      done : false,
      uid: null
    }
  }),
  methods: {
    check: function() {
      console.log(this.pot)
    },
    create: function(){
      this.pot.uid = this.auth.currentUser?.uid || ''
      this.pot.parties[this.pot.uid]= {
        doneNotiOwner : true, // 방장 알림제외
        doneNotiParty : true // 참여자 모집 마감 알림 제외
      }
      const {key } = push(ref(this.db, `pots`), this.pot)
      firebaseDB.noti(this, key)
      console.log(this.pot)
      this.$router.push("/potsearch")
    },
    firebaseCreateSet: function() {
      set(ref(this.db, `members`), {
        key1: {
          name: '홍길동',
          age: '39'
        },
        key2: {
          name: '이순신',
          age: '33'
        },
        key3: {
          name: '홍명보',
          age: '44'
        },
        key4: {
          name: '박지삼',
          age: '22'
        },
        [this.auth.currentUser?.uid]: {
          name: '권명순',
          age: '10'
        },
      })
    },
    firebaseCreatePush: function() {
      push(ref(this.db, `members`), {
        name: '춘향이',
        age: '16'
      })
    },
    firebaseRead: function() {
      // const dbRef = query(ref(this.db, 'members'))
      const dbRef = query(ref(this.db, 'members'), orderByChild('name'), equalTo('춘향이'))
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          console.log(childSnapshot.key, childSnapshot.val())
        })
        off(dbRef)
      }, {
        onlyOnce: false
      })
    },
    firebaseDelete: function() {
      const key = 'key1'
      remove(ref(this.db, `members/${key}`))
    },
    firebaseUpdate: function() {
      const key = 'key2'
      update(ref(this.db, `members/${key}/`), {
        name: '충무공',
        address: '광화문'
      })
    }
  },
  created() {
    this.auth = getAuth()
    this.db = getDatabase()
  }
}
</script>

<style scoped>
/* screen - potcreate */

.potcreate {
  align-items: flex-start;
  background-color: var(--zircon);
  border: 1px none;
  display: flex;
  height: 1138px;
  overflow: hidden;
  width: 375px;
}

.potcreate .bottombar {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 115px;
  left: -1px;
  min-width: 378px;
  padding: 0 1px;
  position: fixed;
  top: 1023px;
  z-index: 3;
}

.potcreate .overlap-group4 {
  background-image: url(../../public/img/rectangle-26-5@2x.svg);
  background-size: 100% 100%;
  height: 123px;
  margin-top: -8.25px;
  position: relative;
  width: 375px;
}

.potcreate .group-411 {
  align-items: flex-end;
  display: flex;
  height: 40px;
  left: 39px;
  min-width: 296px;
  position: absolute;
  top: 36px;
}

.potcreate .iconly-light-search {
  align-items: flex-end;
  border: 1px none;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  min-width: 24px;
  padding: 1.2px 1.7px;
}

.potcreate .overlap-group {
  height: 21px;
  position: relative;
  width: 20px;
}

.potcreate .ellipse_739 {
  border: 1.5px solid;
  border-color: var(--silver-chalice);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.potcreate .line_181 {
  height: 5px;
  left: 15px;
  position: absolute;
  top: 16px;
  width: 5px;
}

.potcreate .group-411-item {
  height: 24px;
  margin-left: 35px;
  width: 24px;
}

.potcreate .iconly-light-search-1 {
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

.potcreate .ellipse_739-1 {
  border: 1.5px solid;
  border-color: var(--white);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.potcreate .iconly-light-notification {
  height: 24px;
  margin-left: 53px;
  width: 24px;
}

.potcreate .icon {
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

.potcreate .icon-logo {
  height: 27px;
  width: 39px;
}

.potcreate .variants-navigation-button {
  height: 80px;
  left: 0;
  position: fixed;
  top: 43px;
  width: 75px;
  z-index: 2;
}

.potcreate .create-component {
  align-items: center;
  border: 1px none;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  margin-top: 57px;
  min-height: 951px;
  width: 352px;
  z-index: 1;
}

.potcreate .location {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 20px;
  height: 45px;
  margin-left: 28.0px;
  min-width: 70px;
}

.potcreate .text-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: -1px;
  min-height: 45px;
  width: 42px;
}

.potcreate .text-101 {
  height: 21px;
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-right: 2.0px;
  min-width: 26px;
  text-decoration: underline;
  white-space: nowrap;
}

.potcreate .text-102 {
  height: 23px;
  letter-spacing: -0.15px;
  line-height: 22.8px;
  min-width: 42px;
  text-align: center;
  white-space: nowrap;
}

.potcreate .vector-2 {
  align-self: center;
  height: 4px;
  margin-bottom: 19.5px;
  width: 8px;
}

.potcreate .text-103 {
  align-self: flex-start;
  color: var(--masala);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-xxxl);
  font-weight: 700;
  height: 24px;
  letter-spacing: 0;
  margin-left: 8px;
  margin-top: 30px;
  min-width: 255px;
  text-align: center;
}

.potcreate .view-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-right: 1.0px;
  margin-top: 35px;
  min-height: 77px;
  width: 335px;
}

.potcreate .text-105 {
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-top: -1px;
  white-space: nowrap;
}

.potcreate .overlap-group-1 {
  align-items: center;
  background-color: var(--mystic);
  border-radius: 10px;
  display: flex;
  gap: 96px;
  height: 36px;
  justify-content: flex-end;
  min-width: 335px;
  padding: 0 14.5px;
}

.potcreate .text-1 {
  height: 13px;
  letter-spacing: -0.08px;
  line-height: 18px;
  white-space: nowrap;
  width: 200px;
}

.potcreate .vector {
  height: 12px;
  margin-top: 0.77px;
  width: 10px;
}

.potcreate .view {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-right: 1.0px;
  margin-top: 14px;
  min-height: 77px;
  width: 335px;
}

.potcreate .text-container-1 {
  height: 18px;
  margin-top: -1px;
  position: relative;
  width: 265px;
}

.potcreate .text-1-1 {
  height: 18px;
  left: 0;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 120px;
}

.potcreate .text-1-2 {
  height: 18px;
  left: 34px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.potcreate .text-container-2 {
  height: 18px;
  margin-top: -1px;
  position: relative;
  width: 289px;
}

.potcreate .overlap-group-2 {
  align-items: center;
  background-color: var(--mystic);
  border-radius: 10px;
  display: flex;
  gap: 28px;
  height: 93px;
  justify-content: flex-end;
  min-width: 335px;
  padding: 11px 14.5px;
}

.potcreate .text-109 {
  align-self: flex-end;
  height: 68px;
  letter-spacing: -0.08px;
  line-height: 18px;
  width: 268px;
}

.potcreate .vector-1 {
  height: 12px;
  margin-top: 3.26px;
  width: 10px;
}

.potcreate .view-2 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 21px;
  height: 90px;
  margin-right: 1.0px;
  margin-top: 67px;
  padding: 5px 0;
  width: 351px;
}

.potcreate .text-11 {
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-left: 8px;
  white-space: nowrap;
}

.potcreate .component {
  align-items: flex-start;
  align-self: center;
  background-color: var(--rolling-stone);
  border: 0px none;
  border-radius: 8px;
  display: flex;
  height: 32px;
  overflow: hidden;
  padding: 2px;
  width: 335px;
}

.potcreate .segmented-picker-option {
  border: 1px none;
  border-radius: 7px;
  flex: 1;
  height: 28px;
  min-width: 165.5px;
  position: relative;
}

.potcreate .separator-1 {
  background-color: var(--ship-gray);
  border: 0px none;
  border-radius: 0.5px;
  height: 16px;
  left: 163px;
  position: absolute;
  top: 6px;
  width: 1px;
}

.potcreate .value {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 150px;
}

.potcreate .segmented-picker-option-1 {
  border: 0.5px none;
  border-radius: 7px;
  flex: 1;
  height: 28px;
  min-width: 165.5px;
  position: relative;
}

.potcreate .value-1 {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 6px;
  white-space: nowrap;
  width: 150px;
}

.potcreate .view-3 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 21px;
  height: 90px;
  margin-right: 1.0px;
  margin-top: 10px;
  padding: 5px 0;
  width: 351px;
}

.potcreate .x-option {
  border: 1px none;
  border-radius: 7px;
  flex: 1;
  height: 28px;
  min-width: 110.33px;
  position: relative;
}

.potcreate .separator {
  background-color: var(--ship-gray);
  border: 0px none;
  border-radius: 0.5px;
  height: 16px;
  left: 108px;
  position: absolute;
  top: 6px;
  width: 1px;
}

.potcreate .myhome {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 94px;
}

.potcreate .others {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 94px;
}

.potcreate .middle {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 94px;
}

.potcreate .view-4 {
  align-items: center;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 19px;
  height: 90px;
  margin-right: 1.0px;
  margin-top: 10px;
  padding: 5px 0;
  width: 351px;
}

.potcreate .text-container-3 {
  height: 18px;
  margin-right: 4.0px;
  position: relative;
  width: 331px;
}

.potcreate .text-114 {
  height: 18px;
  left: 0;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 97px;
}

.potcreate .text-116 {
  height: 18px;
  left: 81px;
  letter-spacing: -0.08px;
  line-height: 18px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.potcreate .view-5 {
  align-items: center;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 90px;
  margin-left: 1.0px;
  margin-top: 10px;
  width: 351px;
}

.potcreate .text-container-4 {
  align-items: center;
  display: flex;
  min-width: 335px;
}

.potcreate .text-118 {
  height: 18px;
  letter-spacing: -0.08px;
  line-height: 18px;
  margin-bottom: 8.0px;
  white-space: nowrap;
  width: 97px;
}

.potcreate .text-120 {
  color: var(--gunsmoke);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-s);
  font-weight: 600;
  height: 36px;
  letter-spacing: -0.08px;
  line-height: 18px;
  width: 238px;
}

.potcreate .view-6 {
  align-items: flex-start;
  background-color: var(--tropical-rain-forest);
  border: 1px none;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 72px;
  margin-right: 10.0px;
  margin-top: 29px;
  overflow: hidden;
  padding: 22.9px 15px;
  width: 306px;
}

.potcreate .text-117 {
  color: #fcfcfe;
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-xxxl);
  font-weight: 700;
  height: 23px;
  letter-spacing: 0;
  text-align: center;
  width: 276px;
}


/* screen - 413_929 */

.gender-picker-nopro {
  align-items: flex-start;
  background-color: var(--rolling-stone);
  border: 0px none;
  border-radius: 8px;
  display: flex;
  height: 32px;
  overflow: hidden;
  padding: 2px;
  width: 335px;
}

.only-option {
  border: 1px none;
  border-radius: 7px;
  flex: 1;
  height: 28px;
  min-width: 165.5px;
  position: relative;
}

.only {
  color: var(--gunsmoke);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-m);
  font-style: normal;
  font-weight: 500;
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 150px;
}

.colornopro-option {
  background-color: var(--tropical-rain-forest);
  border: 0.5px solid;
  border-color: var(--black-2);
  border-radius: 7px;
  box-shadow: 0px 3px 1px #0000000a , 0px 3px 8px #0000001f;
  flex: 1;
  height: 29px;
  margin-bottom: -0.50px;
  margin-top: -0.50px;
  min-width: 166.5px;
  position: relative;
}

.colornopro {
  color: var(--white);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-l);
  font-style: normal;
  font-weight: 700;
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 6px;
  white-space: nowrap;
  width: 150px;
}

/* screen - 413_930 */

.gender-picker-only {
  align-items: flex-start;
  background-color: var(--rolling-stone);
  border: 0px none;
  border-radius: 8px;
  display: flex;
  height: 32px;
  overflow: hidden;
  padding: 2px;
  width: 335px;
}

.coloronly-option {
  background-color: var(--tropical-rain-forest);
  border: 0.5px solid;
  border-color: var(--black-2);
  border-radius: 7px;
  box-shadow: 0px 3px 1px #0000000a , 0px 3px 8px #0000001f;
  flex: 1;
  height: 29px;
  margin-bottom: -0.50px;
  margin-left: -0.50px;
  margin-top: -0.50px;
  min-width: 166.5px;
  position: relative;
}

.coloronly {
  color: var(--white);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-l);
  font-style: normal;
  font-weight: 700;
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 6px;
  white-space: nowrap;
  width: 150px;
}

.nopro-option {
  border: 1px none;
  border-radius: 7px;
  flex: 1;
  height: 28px;
  min-width: 165.5px;
  position: relative;
}

.nopro {
color: var(--gunsmoke);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-m);
  font-style: normal;
  font-weight: 500;
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 150px;
}

/* screen - 413_927 */

.pickup-picker-middle {
  align-items: flex-start;
  background-color: var(--rolling-stone);
  border: 0px none;
  border-radius: 8px;
  display: flex;
  height: 32px;
  overflow: hidden;
  padding: 2px;
  width: 335px;
}

.x-option {
  border: 1px none;
  border-radius: 7px;
  flex: 1;
  height: 28px;
  min-width: 110.33px;
  position: relative;
}

.separator {
  background-color: var(--ship-gray);
  border: 0px none;
  border-radius: 0.5px;
  height: 16px;
  left: 108px;
  position: absolute;
  top: 6px;
  width: 1px;
}

.mythome {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 94px;
}

.others {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 94px;
}

.colormiddle-option {
  background-color: var(--tropical-rain-forest);
  border: 0.5px solid;
  border-color: var(--black-2);
  border-radius: 7px;
  box-shadow: 0px 3px 1px #0000000a , 0px 3px 8px #0000001f;
  flex: 1;
  height: 29px;
  margin-bottom: -0.50px;
  margin-top: -0.50px;
  min-width: 111.33px;
  position: relative;
}

.colormiddle {
  color: var(--white);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-l);
  font-style: normal;
  font-weight: 700;
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 6px;
  white-space: nowrap;
  width: 94px;
}

/* screen - 413_925 */

.pickup-picker-myhome {
  align-items: flex-start;
  background-color: var(--rolling-stone);
  border: 0px none;
  border-radius: 8px;
  display: flex;
  height: 32px;
  overflow: hidden;
  padding: 2px;
  width: 335px;
}

.colormyhome-option {
  background-color: var(--tropical-rain-forest);
  border: 0.5px solid;
  border-color: var(--black-2);
  border-radius: 7px;
  box-shadow: 0px 3px 1px #0000000a , 0px 3px 8px #0000001f;
  flex: 1;
  height: 29px;
  margin-bottom: -0.50px;
  margin-left: -0.50px;
  margin-top: -0.50px;
  min-width: 111.33px;
  position: relative;
}

.colormyhome {
  color: var(--white);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-l);
  font-style: normal;
  font-weight: 700;
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 6px;
  white-space: nowrap;
  width: 94px;
}

.x-option {
  border: 1px none;
  border-radius: 7px;
  flex: 1;
  height: 28px;
  min-width: 110.33px;
  position: relative;
}

.separator {
  background-color: var(--ship-gray);
  border: 0px none;
  border-radius: 0.5px;
  height: 16px;
  left: 108px;
  position: absolute;
  top: 6px;
  width: 1px;
}

.others {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 94px;
}

.middle {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 94px;
}

/* screen - 413_926 */

.pickup-picker-others {
  align-items: flex-start;
  background-color: var(--rolling-stone);
  border: 0px none;
  border-radius: 8px;
  display: flex;
  height: 32px;
  overflow: hidden;
  padding: 2px;
  width: 335px;
}

.e-option {
  border: 1px none;
  border-radius: 7px;
  flex: 1;
  height: 28px;
  min-width: 110.33px;
  position: relative;
}

.separator {
  background-color: var(--ship-gray);
  border: 0px none;
  border-radius: 0.5px;
  height: 16px;
  left: 108px;
  position: absolute;
  top: 6px;
  width: 1px;
}

.myhome {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 94px;
}

.colorothers-option {
  background-color: var(--tropical-rain-forest);
  border: 0.5px solid;
  border-color: var(--black-2);
  border-radius: 7px;
  box-shadow: 0px 3px 1px #0000000a , 0px 3px 8px #0000001f;
  flex: 1;
  height: 29px;
  margin-bottom: -0.50px;
  margin-top: -0.50px;
  min-width: 111.33px;
  position: relative;
}

.colorothers {
  color: var(--white);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-l);
  font-style: normal;
  font-weight: 700;
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 6px;
  white-space: nowrap;
  width: 94px;
}

.middle {
  height: 16px;
  left: 8px;
  letter-spacing: -0.08px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 94px;
}

.potcreate ::-webkit-scrollbar{
  display : none; /* Chrome, Safari, Opera */
}
</style>