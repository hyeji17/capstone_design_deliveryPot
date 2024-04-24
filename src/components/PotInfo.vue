<template>
  <v-container>
 <input type="hidden" id="anPageName" name="page" value="information-window" />
    <div class="container-center-horizontal">
      <div class="information-window screen">
        <div class="flex-row">
          <img class="icon" src="img/icon-1@2x.svg" alt="Icon" />
        </div>
        <div class="text-23">배달팟의 주인장과 팟원이 되어보세요!</div>
        <div class="group-389">
          <div class="ellipse-container">
            <img class="ellipse-5" src="img/ellipse-5@2x.svg" alt="Ellipse 5" />
            <img class="ellipse-12" src="img/ellipse-12@2x.png" alt="Ellipse 12" />
            <img class="ellipse-6" src="img/ellipse-6@2x.png" alt="Ellipse 6" />
            <img class="ellipse-7" src="img/ellipse-7@2x.svg" alt="Ellipse 7" />
            <img class="ellipse-8" src="img/ellipse-8@2x.svg" alt="Ellipse 8" />
            <img class="ellipse-10" src="img/ellipse-10@2x.svg" alt="Ellipse 10" />
            <img class="ellipse-11" src="img/ellipse-11@2x.png" alt="Ellipse 11" />
            <img class="ellipse-9" src="img/ellipse-9@2x.svg" alt="Ellipse 9" />
          </div>
        </div>
        <p class="text-24 valign-text-middle" style="margin-top:30px; position:relative;">
          ‘주인장&#39; : 배달팟을 모으기 위해 팟을 개설한 이용자<br />‘팟원’ : 근거리의 주인장이 개설한 배달팟에 참여한
          배달팟의 일원
        </p>
        <div class="button">
          <a href="/signup">
            <div class="signup"><div class="create-an-account dmsans-bold-white-14px">회원가입</div></div>
          </a>
          <a href="/login">
            <div class="signin"><div class="create-an-account-1">로그인</div></div>
          </a>
        </div>

      </div>
    </div>    
  </v-container>
</template>

<script>
export default {
}
</script>

<style scoped>
/* screen - information-window */

.information-window {
  align-items: center;
  background-color: #f7fbff;
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 812px;
  padding: 67px 19px;
  width: 375px;
}

.information-window .flex-row {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 107px;
  height: 24px;
  margin-right: 11px;
  min-width: 174px;
}

.information-window .icon {
  align-self: flex-end;
  height: 23px;
  width: 34px;
}

.information-window .skip {
  color: #fa5a1e;
  font-family: var(--font-family-dm_sans);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.16px;
  line-height: 24px;
  min-height: 24px;
  min-width: 33px;
  text-align: right;
  white-space: nowrap;
}

.information-window .text-23 {
  color: var(--eerie-black);
  font-family: var(--font-family-dm_sans);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.66px;
  margin-right: 1.0px;
  margin-top: 49px;
  min-height: 29px;
  min-width: 334px;
  text-align: center;
}

.information-window .group-389 {
  align-items: flex-end;
  display: flex;
  height: 267px;
  margin-left: 0;
  margin-top: 51px;
  min-width: 335px;
}

.information-window .ellipse-container {
  height: 344px;
  margin-bottom: -76.83px;
  margin-left: -1px;
  position: relative;
  width: 336px;
}

.information-window .ellipse-5 {
  height: 89px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 90px;
}

.information-window .ellipse-12 {
  height: 332px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 12px;
  width: 332px;
}

.information-window .ellipse-6 {
  height: 170px;
  left: 80px;
  position: absolute;
  top: 70px;
  width: 171px;
}

.information-window .ellipse-7 {
  height: 78px;
  left: 240px;
  position: absolute;
  top: 5px;
  width: 78px;
}

.information-window .ellipse-8 {
  height: 52px;
  left: 23px;
  position: absolute;
  top: 159px;
  width: 52px;
}

.information-window .ellipse-10 {
  height: 42px;
  left: 135px;
  position: absolute;
  top: 9px;
  width: 41px;
}

.information-window .ellipse-11 {
  height: 27px;
  left: 75px;
  object-fit: cover;
  position: absolute;
  top: 240px;
  width: 27px;
}

.information-window .ellipse-9 {
  height: 68px;
  left: 268px;
  position: absolute;
  top: 164px;
  width: 68px;
}

.information-window .text-24 {
  align-self: flex-end;
  color: var(--gunsmoke);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-s);
  font-weight: 300;
  height: 65px;
  letter-spacing: 0;
  margin-top: 4px;
  text-align: center;
  width: 333px;
}

.information-window .button {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 61px;
  min-height: 125px;
  width: 335px;
}

.information-window .signup {
  align-items: flex-start;
  background: linear-gradient(180deg, rgb(249.26, 135.89, 31.24) 0%, rgb(255, 119.34, 76.5) 100%);
  border: 1px none;
  border-radius: 20px;
  box-shadow: 0px 10px 30px #c942101a;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  padding: 15px 20px;
  width: 335px;
}

.information-window .create-an-account {
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-top: -1.00px;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.information-window .signin {
  align-items: flex-start;
  border: 1px none;
  border-radius: 20px;
  box-shadow: 0px 10px 30px #c942101a;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  padding: 15px 20px;
  width: 335px;
}

.information-window .create-an-account-1 {
  color: var(--red-orange);
  font-family: var(--font-family-dm_sans);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.16px;
  line-height: 24px;
  margin-top: -1.00px;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

</style>