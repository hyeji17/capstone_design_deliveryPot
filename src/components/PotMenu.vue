<template>
<div>
<input type="hidden" id="anPageName" name="page" value="menusearch" />
    <div class="container-center-horizontal">
      <div class="menusearch screen">
        <div class="flex-col">
          <div class="ation-container">
            <a href="/pothomescreen">
              <img
                class="variants-navigation-button"
                src="img/variants-navigation-button-2@2x.svg"
                alt="Variants/Navigation Button"
              />
            </a>
            <div class="location">
              <div class="text-container">
                <div class="text-50 valign-text-middle dmsans-normal-eerie-black-14px">위치</div>
                <div class="text-51 valign-text-middle dmsans-normal-red-orange-15px">우리집</div>
              </div>
              <img class="vector-2" src="img/vector-2@2x.svg" alt="Vector 2" />
            </div>
          </div>
          <div class="text-52 dmsans-bold-masala-24px">원하는 메뉴의 배달팟을<br />찾아보세요!</div>
          <div class="overlap-group-container">
            <div class="overlap-group">
              <a href="/potsearch?category=chicken">
                <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">치킨</div>
              <div class="rectangle-1"></div>
              <img class="x1" src="img/------1@2x.png" alt="1" />
              </a>
            </div>
            <div class="overlap-group1">
              <a href="/potsearch?category=fastfood">
                    <div class="rectangle-19"></div>
              <div class="text-54 valign-text-middle dmsans-normal-black-12px">패스트푸드</div>
              <div class="rectangle-20"></div>
              <img class="x1-1" src="img/--------1@2x.png" alt="1" />
              </a>
            </div>
            <div class="overlap-group-2">
              <a href="/potsearch?category=pizza">
              <div class="rectangle"></div>
              <div class="text-53 valign-text-middle dmsans-normal-black-12px">피자</div>
              <div class="rectangle-1"></div>
              <img class="x1-2" src="img/-----1@2x.png" alt="1" />
              </a>
            </div>
            <div class="overlap-group-1">
              <a href="/potsearch?category=japanesefood">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">일식</div>
              <div class="rectangle-1"></div>
              <img class="x1-3" src="img/-----1-1@2x.png" alt="1" />
              </a>
            </div>
          </div>
          <div class="overlap-group-container-1">
            <div class="overlap-group">
              <a href="/potsearch?category=chinsesfood">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">중식</div>
              <div class="rectangle-1"></div>
              <img class="x1-4" src="img/---------1@2x.png" alt="1" />
              </a>
            </div>
            <div class="overlap-group-1">
              <a href="/potsearch?category=dessert">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">디저트</div>
              <div class="rectangle-1"></div>
              <img class="x1-5" src="img/------1-1@2x.png" alt="1" />
              </a>
            </div>
            <div class="overlap-group-1">
              <a href="/potsearch?category=americanfood">
             <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">양식</div>
              <div class="rectangle-1"></div>
              <img class="x1-6" src="img/-------1@2x.png" alt="1" />
              </a>
            </div>
            <div class="overlap-group7">
              <a href="/potsearch?category=koreanfood">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">한식</div>
              <div class="rectangle-1"></div>
              <img class="x1-7" src="img/---------1-1@2x.png" alt="1" />
              </a>
            </div>
          </div>
          <div class="overlap-group-container-2">
            <div class="overlap-group">
              <a href="/potsearch?category=bunsik">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">분식</div>
              <div class="rectangle-1"></div>
              <img class="x1-8" src="img/---------1-2@2x.png" alt="1" />
              </a>
            </div>
            <div class="overlap-group">
              <a href="/potsearch?category=nightfood">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">야식</div>
              <div class="rectangle-1"></div>
              <img class="x1-9" src="img/-------1-1@2x.png" alt="1" />
              </a>
            </div>
            <div class="overlap-group">
              <a href="/potsearch?category=asianfood">
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">아시안</div>
              <div class="rectangle-1"></div>
              <img class="x2" src="img/---------2@2x.png" alt="2" />
              </a>
            </div>
            <div class="overlap-group">
              <a href="/potsearch?category=lunchbox">                
              <div class="rectangle"></div>
              <div class="text valign-text-middle dmsans-normal-black-12px">도시락</div>
              <div class="rectangle-1"></div>
              <img class="x1-10" src="img/--------1-1@2x.png" alt="1" />
              </a>
            </div>
          </div>
          <div class="overlap-group14">
          <div class="view" @click = "$router.push('/potsearch')">
            <div class="overlap-group12">
              <div class="blue"></div>
              <div class="text-65 valign-text-middle dmsans-normal-white-14px">여기서 메뉴를 못 고르셨나요?</div>
              <div class="text-66 valign-text-middle dmsans-bold-white-20px">전체 보기</div>
            </div>
          </div>
          <div class="bottombar">
            <div class="overlap-group13">
              <div class="group-411">
                <div class="iconly-light-search">
                  <div class="overlap-group-3">
                    <img class="line_181" src="img/line-181-3@2x.svg" alt="Line_181" />
                  </div>
                </div>
                <img class="group-411-item" src="img/chat-1@2x.svg" alt="chat" />
                <div class="iconly-light-search-1">
                  <div class="overlap-group-4">
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
              <div class="icon"><img class="icon-logo" src="img/icon-logo-2@2x.svg" alt="Icon/Logo" /></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

  <!-- <div id = "menu">
    <button @click = "chicken"> <img alt = "logo" src="../assets/치킨.png">치킨</button>
  
    <button @click = "pizza"> <img alt = "logo" src="../assets/피자.png">피자</button>
 
    <button @click = "bunsik"> <img alt = "logo" src="../assets/떡볶이.png">분식</button>
 
    <button @click = "koreanfood"> <img alt = "logo" src="../assets/비빔밥.png">한식</button>
  
    <button @click = "chinesfood"> <img alt = "logo" src="../assets/짜장면.png">중식</button>

    <button @click = "japanesefood"> <img alt = "logo" src="../assets/스시.png">일식</button>
 
    <button @click = "americanfood"> <img alt = "logo" src="../assets/파스타.png">양식</button>

    <button @click = "fastfood"> <img alt = "logo" src="../assets/햄버거.png">패스트푸드</button>

    <button @click = "nightfood"> <img alt = "logo" src="../assets/닭발.png">야식</button>

    <button @click = "lunchbox"> <img alt = "logo" src="../assets/도시락.png">도시락</button>

    <button @click = "asianfood"> <img alt = "logo" src="../assets/쌀국수.png">아시안</button>

    <button @click = "dessert"> <img alt = "logo" src="../assets/도넛.png">디저트</button>
  


    <button @click = "wholemenu"><img alt = "logo" src = "../assets/wholemenu.png">
    </button>
  </div> -->
  </div>
</template>

<script>
import "../../public/css/rogeuin-jeonhwabeonhoibryeogjung.css"
export default {
  name : 'MenuPage',
}
</script>

<style scoped>

/* screen - menusearch */

.menusearch {
  align-items: flex-start;
  background-color: var(--zircon);
  border: 1px none;
  display: flex;
  gap: 799px;
  height: 812px;
  overflow: hidden;
  width: 375px;
}

.menusearch .flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: -1px;
  margin-top: 57px;
  min-height: 755px;
  width: 378px;
}

.menusearch .ation-container {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 110px;
  margin-left: 14px;
  min-width: 224px;
}

.menusearch .variants-navigation-button {
  height: 44px;
  width: 44px;
}

.menusearch .location {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 21px;
  height: 45px;
  min-width: 70px;
}

.menusearch .text-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: -1px;
  min-height: 45px;
  width: 42px;
}

.menusearch .text-50 {
  height: 21px;
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-right: 2.0px;
  min-width: 26px;
  text-decoration: underline;
  white-space: nowrap;
}

.menusearch .text-51 {
  height: 23px;
  letter-spacing: -0.15px;
  line-height: 22.8px;
  min-width: 42px;
  text-align: center;
  white-space: nowrap;
}

.menusearch .vector-2 {
  align-self: center;
  height: 4px;
  margin-bottom: 19.5px;
  width: 7px;
}

.menusearch .text-52 {
  letter-spacing: -0.72px;
  margin-right: 41.0px;
  margin-top: 39px;
  min-height: 62px;
  width: 287px;
}

.menusearch .overlap-group-container {
  align-items: flex-start;
  display: flex;
  margin-top: 28px;
  min-width: 350px;
}

.menusearch .overlap-group {
  border-radius: 50px;
  height: 109px;
  position: relative;
  width: 82px;
}

.menusearch .rectangle {
  background-color: var(--desert-sand);
  border: 1px none;
  border-radius: 50px;
  height: 87px;
  left: 9px;
  position: absolute;
  top: 11px;
  width: 65px;
}

.menusearch .text {
  height: 24px;
  left: 14px;
  letter-spacing: -0.12px;
  line-height: 18.3px;
  position: absolute;
  text-align: center;
  top: 64px;
  width: 54px;
}

.menusearch .rectangle-1 {
  border: 1px solid;
  border-color: var(--beauty-bush);
  border-radius: 50px;
  height: 109px;
  left: 0;
  position: absolute;
  top: 0;
  width: 82px;
}

.menusearch .x1 {
  height: 37px;
  left: 19px;
  object-fit: cover;
  position: absolute;
  top: 26px;
  width: 45px;
}

.menusearch .overlap-group1 {
  border-radius: 50px;
  height: 111px;
  margin-left: 6px;
  margin-top: -1px;
  position: relative;
  width: 84px;
}

.menusearch .rectangle-19 {
  background-color: var(--desert-sand);
  border: 1px none;
  border-radius: 50px;
  height: 87px;
  left: 10px;
  position: absolute;
  top: 12px;
  width: 65px;
}

.menusearch .text-54 {
  height: 24px;
  left: 14px;
  letter-spacing: -0.12px;
  line-height: 18.3px;
  position: absolute;
  text-align: center;
  top: 65px;
  width: 57px;
}

.menusearch .rectangle-20 {
  border: 1px solid;
  border-color: var(--beauty-bush);
  border-radius: 50px;
  height: 111px;
  left: 0;
  position: absolute;
  top: 0;
  width: 84px;
}

.menusearch .x1-1 {
  height: 40px;
  left: 24px;
  object-fit: cover;
  position: absolute;
  top: 20px;
  width: 34px;
}

.menusearch .overlap-group-2 {
  border-radius: 50px;
  height: 109px;
  margin-left: 6px;
  position: relative;
  width: 82px;
}

.menusearch .text-53 {
  height: 25px;
  left: 22px;
  letter-spacing: -0.12px;
  line-height: 18.3px;
  position: absolute;
  text-align: center;
  top: 64px;
  width: 37px;
}

.menusearch .x1-2 {
  height: 25px;
  left: 22px;
  object-fit: cover;
  position: absolute;
  top: 32px;
  width: 38px;
}

.menusearch .overlap-group-1 {
  border-radius: 50px;
  height: 109px;
  margin-left: 7px;
  position: relative;
  width: 82px;
}

.menusearch .x1-3 {
  height: 40px;
  left: 22px;
  object-fit: cover;
  position: absolute;
  top: 26px;
  width: 40px;
}

.menusearch .overlap-group-container-1 {
  align-items: flex-start;
  display: flex;
  margin-left: 0.75px;
  margin-top: 13px;
  min-width: 351px;
}

.menusearch .x1-4 {
  height: 25px;
  left: 20px;
  object-fit: cover;
  position: absolute;
  top: 33px;
  width: 42px;
}

.menusearch .x1-5 {
  height: 30px;
  left: 23px;
  object-fit: cover;
  position: absolute;
  top: 33px;
  width: 34px;
}

.menusearch .x1-6 {
  height: 32px;
  left: 24px;
  object-fit: cover;
  position: absolute;
  top: 32px;
  width: 35px;
}

.menusearch .overlap-group7 {
  border-radius: 50px;
  height: 109px;
  margin-left: 8px;
  position: relative;
  width: 82px;
}

.menusearch .x1-7 {
  height: 30px;
  left: 26px;
  object-fit: cover;
  position: absolute;
  top: 33px;
  width: 30px;
}

.menusearch .overlap-group-container-2 {
  align-items: flex-start;
  display: flex;
  gap: 7px;
  margin-left: 0.75px;
  margin-top: 13px;
  min-width: 351px;
}

.menusearch .x1-8 {
  height: 30px;
  left: 26px;
  object-fit: cover;
  position: absolute;
  top: 30px;
  width: 30px;
}

.menusearch .x1-9 {
  height: 25px;
  left: 18px;
  object-fit: cover;
  position: absolute;
  top: 34px;
  width: 44px;
}

.menusearch .x2 {
  height: 30px;
  left: 24px;
  object-fit: cover;
  position: absolute;
  top: 29px;
  width: 33px;
}

.menusearch .x1-10 {
  height: 24px;
  left: 26px;
  object-fit: cover;
  position: absolute;
  top: 34px;
  width: 31px;
}

.menusearch .overlap-group14 {
  height: 210px;
  margin-top: 18px;
  position: relative;
  width: 378px;
}

.menusearch .view {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 104px;
  left: 39px;
  min-width: 301px;
  position: absolute;
  top: 0;
}

.menusearch .overlap-group12 {
  height: 104px;
  margin-left: -9px;
  position: relative;
  width: 308px;
}

.menusearch .blue {
  background: linear-gradient(180deg, rgb(249.26, 135.89, 31.24) 0%, rgb(249.26, 135.89, 31.24) 0.01%, rgb(255, 119.34, 76.5) 100%);
  border: 1px none;
  border-radius: 20px;
  height: 104px;
  left: 15px;
  position: absolute;
  top: 0;
  width: 293px;
}

.menusearch .text-65 {
  height: 44px;
  left: 0;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 2px;
  width: 228px;
}

.menusearch .text-66 {
  height: 32px;
  left: 39px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 41px;
  width: 240px;
}

.menusearch .bottombar {
  align-items: flex-start;
  background-image: url(../../public/img/rectangle-26-2@2x.svg);
  background-size: 100% 100%;
  border: 1px none;
  display: flex;
  height: 115px;
  left: 0;
  min-width: 378px;
  padding: 6px 40px;
  position: absolute;
  top: 95px;
}

.menusearch .overlap-group13 {
  height: 62px;
  position: relative;
  width: 296px;
}

.menusearch .group-411 {
  align-items: flex-end;
  display: flex;
  height: 40px;
  left: 0;
  min-width: 296px;
  position: absolute;
  top: 22px;
}

.menusearch .iconly-light-search {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 24px;
  min-width: 24px;
  padding: 2.0px;
}

.menusearch .overlap-group-3 {
  align-items: flex-end;
  border: 1.5px solid;
  border-color: var(--silver-chalice);
  border-radius: 9.74px;
  display: flex;
  height: 19px;
  justify-content: flex-end;
  min-width: 19px;
  padding: 1.0px 1.5px;
}

.menusearch .line_181 {
  height: 4px;
  width: 4px;
}

.menusearch .group-411-item {
  height: 24px;
  margin-left: 35px;
  width: 24px;
}

.menusearch .iconly-light-search-1 {
  align-items: flex-start;
  align-self: flex-start;
  border: 1px none;
  display: flex;
  height: 24px;
  margin-left: 53px;
  min-width: 24px;
  padding: 2.0px;
}

.menusearch .overlap-group-4 {
  align-items: flex-end;
  border: 1.5px solid;
  border-color: var(--white);
  border-radius: 9.74px;
  display: flex;
  height: 19px;
  justify-content: flex-end;
  min-width: 19px;
  padding: 1.0px 1.5px;
}

.menusearch .iconly-light-notification {
  height: 24px;
  margin-left: 53px;
  width: 24px;
}

.menusearch .icon {
  align-items: flex-end;
  background-color: var(--soft-peach);
  border: 1px none;
  border-radius: 30px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 60px;
  left: 117px;
  min-width: 60px;
  padding: 16.6px 10.4px;
  position: absolute;
  top: 0;
}

.menusearch .icon-logo {
  height: 27px;
  width: 39px;
}

.menusearch .job-finder-app-1 {
  height: 4096px;
  margin-top: -846px;
  object-fit: cover;
  width: 974px;
}

</style>
