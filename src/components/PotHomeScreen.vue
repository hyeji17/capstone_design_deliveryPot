<template >
<v-container>
   <input type="hidden" id="anPageName" name="page" value="home" />
    <div class="container-center-horizontal">
      <div class="home screen">
        <div class="flex-col">
          <div class="location">
            <div class="text-container">
              <div class="text-41 valign-text-middle dmsans-normal-eerie-black-14px">위치</div>
              <div class="text-42 valign-text-middle dmsans-normal-red-orange-15px">우리집</div>
            </div>
            <img class="vector-2" src="img/vector-2@2x.svg" alt="Vector 2" />
          </div>
          <div class="text-49 dmsans-bold-masala-24px">어떤 기능을 찾고 계세요?</div>
            <div class="view">
              <div class="text-container-1">
          <a href="/potmenu">
                <div class="text-44 valign-text-middle dmsans-bold-white-20px">메뉴찾기</div>
                <div class="text-43 valign-text-middle dmsans-normal-white-14px">메뉴를 결정하지 못하셨나요?</div>
            </a>
              </div>
            </div>
          <div class="view-container">
            <a href="/potsearch">
              <div class="view-1">
                <div class="text-container-2">
                  <div class="text-46 valign-text-middle dmsans-bold-white-20px">배달팟 참여하기</div>
                  <div class="text-45 valign-text-middle dmsans-normal-white-14px">배달팟원이<br />되어보세요!</div>
                </div>
              </div>
            </a>
            <a href="/potcreate">
              <div class="view-2">
                <div class="text-container-3">
                  <div class="text-48 valign-text-middle dmsans-bold-white-20px">배달팟 모으기</div>
                  <div class="text-47 valign-text-middle dmsans-normal-white-14px">배달팟의 주인장이 되어보세요!</div>
                </div>
              </div>
            </a>
          </div>
          <div class="bottombar">
            <div class="overlap-group3">
              <div class="group-411">
                <div class="iconly-light-search">
                  <div class="overlap-group">
                    <div class="ellipse_739"></div>
                    <img class="line_181" src="img/line-181-3@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img class="group-411-item" src="img/chat-1@2x.svg" alt="chat" />
                <div class="iconly-light-search-1">
                  <div class="overlap-group">
                    <div class="ellipse_739-1"></div>
                    <img class="line_181" src="img/line-181-2@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img
                  class="iconly-light-notification"
                  src="img/iconly-light-notification-1@2x.svg"
                  alt="Iconly/Light/Notification"
                />
                <img class="group-411-item" src="img/profile-1@2x.svg" alt="profile" />
              </div>
              <div class="icon"><img class="icon-logo" src="img/icon-logo-1@2x.svg" alt="Icon/Logo" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="menu-container">
        <button  @click="$router.push('/potmenu')"><img alt="logo" src="../assets/메뉴찾기.png">
        </button>
    </div>
    <div id="delivery-search-container">
        <button @click="$router.push('/potsearch')"><img alt="logo" src="../assets/배달팟찾기.png">
        </button>
    </div>
    <div id="delivery-create-container">
        <button @click="$router.push('/potcreate')"><img alt="logo" src="../assets/배달팟구하기.png">
        </button>
    </div> -->

</v-container>
</template>

<script>

export default{
  components: {
  },   
}
</script>

<style scoped>
/* screen - home */

.home {
  align-items: flex-start;
  background-color: var(--zircon);
  border: 1px none;
  display: flex;
  gap: 2715px;
  height: 812px;
  overflow: hidden;
  width: 375px;
}

.home .flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: -1px;
  margin-top: 43px;
  min-height: 769px;
  width: 385px;
}

.home .ation-container {
  align-items: center;
  align-self: flex-start;
  display: flex;
  gap: 92px;
  margin-left: 1px;
  min-width: 237px;
}

.home .variants-navigation-button {
  height: 80px;
  width: 75px;
}

.home .location {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 20px;
  height: 45px;
  margin-bottom: 7.0px;
  min-width: 70px;
}

.home .text-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: -1px;
  min-height: 45px;
  width: 42px;
}

.home .text-41 {
  height: 21px;
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-right: 2.0px;
  min-width: 26px;
  text-decoration: underline;
  white-space: nowrap;
}

.home .text-42 {
  height: 23px;
  letter-spacing: -0.15px;
  line-height: 22.8px;
  min-width: 42px;
  text-align: center;
  white-space: nowrap;
}

.home .vector-2 {
  align-self: center;
  height: 4px;
  margin-bottom: 19.5px;
  width: 8px;
}

.home .text-49 {
  align-self: flex-end;
  letter-spacing: -0.72px;
  margin-top: 18px;
  min-height: 31px;
  width: 360px;
}

.home .view {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 147px;
  margin-right: 10.0px;
  margin-top: 49px;
  min-width: 147px;
}

.home .text-container-1 {
  align-items: flex-start;
  background: linear-gradient(180deg, rgb(249.26, 135.89, 31.24) 0%, rgb(249.26, 135.89, 31.24) 0.01%, rgb(255, 119.34, 76.5) 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin-left: -1px;
  min-height: 147px;
  padding: 12px 3px;
  width: 148px;
}

.home .text-44 {
  height: 45px;
  letter-spacing: 0;
  text-align: center;
  width: 100px;
}

.home .text-43 {
  align-self: center;
  height: 62px;
  letter-spacing: 0;
  text-align: center;
  width: 106px;
}

.home .view-container {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  margin-right: 6.0px;
  margin-top: 22px;
  min-width: 315px;
}

.home .view-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 147px;
  min-width: 147px;
}

.home .text-container-2 {
  align-items: flex-end;
  background: linear-gradient(180deg, rgb(249.26, 135.89, 31.24) 0%, rgb(249.26, 135.89, 31.24) 0.01%, rgb(255, 119.34, 76.5) 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-left: -1px;
  min-height: 147px;
  padding: 12px 5px;
  width: 148px;
}

.home .text-46 {
  height: 45px;
  letter-spacing: 0;
  text-align: center;
  width: 137px;
}

.home .text-45 {
  align-self: center;
  height: 62px;
  letter-spacing: 0;
  margin-left: 2.0px;
  text-align: center;
  width: 106px;
}

.home .view-2 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 147px;
  justify-content: flex-end;
  min-width: 152px;
  padding: 0 1px;
}

.home .text-container-3 {
  align-items: center;
  background: linear-gradient(180deg, rgb(249.26, 135.89, 31.24) 0%, rgb(249.26, 135.89, 31.24) 0.01%, rgb(255, 119.34, 76.5) 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  min-height: 147px;
  padding: 12px 6px;
  width: 148px;
}

.home .text-48 {
  height: 45px;
  letter-spacing: 0;
  margin-right: 15.0px;
  text-align: center;
  width: 121px;
}

.home .text-47 {
  height: 62px;
  letter-spacing: 0;
  margin-left: 3.0px;
  text-align: center;
  width: 115px;
}

.home .bottombar {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 115px;
  margin-right: 7.0px;
  margin-top: 160px;
  min-width: 378px;
  padding: 0 1px;
}

.home .overlap-group3 {
  background-image: url(../../public/img/rectangle-26-1@2x.svg);
  background-size: 100% 100%;
  height: 123px;
  margin-top: -8.25px;
  position: relative;
  width: 375px;
}

.home .group-411 {
  align-items: flex-end;
  display: flex;
  height: 40px;
  left: 39px;
  min-width: 296px;
  position: absolute;
  top: 36px;
}

.home .iconly-light-search {
  align-items: flex-end;
  border: 1px none;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  min-width: 24px;
  padding: 1.2px 1.7px;
}

.home .overlap-group {
  height: 21px;
  position: relative;
  width: 20px;
}

.home .ellipse_739 {
  border: 1.5px solid;
  border-color: var(--silver-chalice);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.home .line_181 {
  height: 5px;
  left: 15px;
  position: absolute;
  top: 16px;
  width: 5px;
}

.home .group-411-item {
  height: 24px;
  margin-left: 35px;
  width: 24px;
}

.home .iconly-light-search-1 {
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

.home .ellipse_739-1 {
  border: 1.5px solid;
  border-color: var(--white);
  border-radius: 9.74px;
  height: 19px;
  left: 0;
  position: absolute;
  top: 0;
  width: 19px;
}

.home .iconly-light-notification {
  height: 24px;
  margin-left: 53px;
  width: 24px;
}

.home .icon {
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

.home .icon-logo {
  height: 27px;
  width: 39px;
}

.home .job-finder-app-1 {
  height: 4096px;
  margin-top: -1362px;
  object-fit: cover;
  width: 974px;
}

</style>