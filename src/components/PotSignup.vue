<template>
<v-app>
  <v-main>
      <v-container style="margin-top:-50px;">
        <input type="hidden" id="anPageName" name="page" value="screen2" />
         <div class="container-center-horizontal">
      <div class="signup screen">
        <div style="overflow-x: hidden; overflow-y: auto; height: 800px;">
          <div class="flex-col">
          <img class="icon" src="img/icon-3@2x.svg" alt="Icon" />
          <div class="text-39">회원가입</div>
          <p class="text-40">본인의 이름, 전화번호, 이메일 정보를 수집합니다.</p>
          <v-form ref="formFirst">
            <div class="name">
              <v-col>
                <div class="title dmsans-normal-masala-12px" style="margin-top:-20px;">이름</div>
                <div class="overlap-group" style="margin-top:5px;"><div class="place-holder dmsans-normal-silver-chalice-14px">
                   <v-text-field v-model = "name" label = "name" :rules="[value => !!value || '이름을 입력 하세요.']" placeholder="김배달" style="margin-top:-18px;postion:relative;"> </v-text-field>
              </div></div>
              </v-col>
            </div>
            <div class="flex-col-item">
              <v-col>
                <div class="title dmsans-normal-masala-12px">E-mail</div>
                 <div class="overlap-group" style="margin-top:5px;postion:relative;">
                  <div class="place-holder dmsans-normal-silver-chalice-14px">
                    <v-text-field v-model = "email" label ="email" :rules="[value => !!value || '이메일을 입력 하세요.']" placeholder="baedalpot@gmail.com" style="margin-top:-18px;postion:relative;"></v-text-field>
                  </div></div>
              </v-col>
            </div>
            <div class="flex-col-item">
              <v-col>
                <div class="title dmsans-normal-masala-12px">휴대전화번호</div>
               <div class="text-40" style="margin-left:19px; position:relative;"> -포함해서 입력하세요 ex. 010-1234-5678</div>
                
                <div class="overlap-group" style="margin-top:5px;postion:relative;">
                  <div class="place-holder dmsans-normal-silver-chalice-14px">
                   <v-text-field v-model = "phonenum" label = "phonenum" :rules="[value => !!value || '전화번호를 입력 하세요.']" placeholder="010-1234-5678" style="margin-top:-18px;postion:relative;"></v-text-field>
                </div></div>        
                <div id = "recaptcha-container" ></div>
                <v-btn @click="setKeyIdentifier()" style="margin-left:10px; postion:relative;">인증받기</v-btn>
              </v-col>
            </div>
          </v-form>
            <div class="flex-col-item">
            <v-form ref="formSecond">
              <div class = "IdentifierNum">
                <v-col>
                  <div class="title dmsans-normal-masala-12px">인증번호</div>
                  <div class="overlap-group" style="margin-top:5px;postion:relative;"><p class="place-holder-1">
                  <v-text-field v-model = "identifiernum" label = "identifier" :rules="[value => !!value || '인증번호를 입력 하세요.']" placeholder="인증번호" style="margin-top:-18px;postion:relative;"></v-text-field>
                </p></div>
                </v-col>
                <!-- <div class="text-40">/ -->
                  <v-checkbox label = "개인정보수집, 위치정보수집에 동의합니다." v-model="agree" class="type-here"> </v-checkbox>
                <!-- </div> -->
              </div>
            </v-form>
          </div>
          <div class="button">
            <div class="signup-1" @click="SignIn()"><div class="create-an-account dmsans-bold-white-14px">회원가입</div></div>
            <a href="/login">
              <div class="signin"><div class="create-an-account-1">기존 계정으로 로그인하기</div></div>
            </a>
           </div>
        </div>
        </div>
        </div>
        </div>
      </v-container>
  </v-main>
</v-app>
</template>

<script>
import "../../public/css/screen2.css"
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from '../firebase/auth'

export default {
  data() {
    return {
      msg: "인증 완료!",
      auth: getAuth(),
      // phonenum : '+1 650-555-1234',
      phonenum : '',
      // appVerifier : window.recaptchaVerifier(),
      name : "",
      email : "",
      identifiernum : "",
      confirmationResult : null,
      agree: false
    };
  },
  methods: {
    onSignInSubmit() {
      console.log(this.msg)
    },
    setKeyIdentifier() {
      firebaseAuth.setKeyIdentifier(this)
    },
    SignIn(){
      if (!this.agree) {
        alert('약관에 동의 해주세요.')
        return
      }
      firebaseAuth.Confirm(this)
    },
    // Login(){
    //   window.confirmationResult.confirm(this.code).then(() => {
    //     // User signed in successfully.
    //     // const user = result.user;
    //     // ...
    //   }).catch(() => {
    //     // User couldn't sign in (bad verification code?)
    //     // ...
    //   });

    //   var credential = firebase.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, this.code);

    //   firebase.auth().signInWithCrendential(credential);
    // },
    LogOut(){
      signOut(this.auth).then(() => {
        // Sign-out successful.
      }).catch(() => {
        // An error happened.
      });
    },
    beforeCreate() {
      onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user.email);
        this.$router.push({ path: "PotMain" });
        // ...
      } else {
        console.log("not logged in");
        // User is signed out
        // ...
      }
    });
  },

  }
};
</script>

<style scoped>
/* screen - signup */

.signup {
  align-items: flex-start;
  background-color: var(--zircon);
  border: 1px none;
  display: flex;
  gap: 1864px;
  height: 853px;
  overflow: hidden;
  width: 375px;
}

.signup .flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 19px;
  margin-top: 68px;
  min-height: 742px;
  width: 336px;
}

.signup .icon {
  align-self: center;
  height: 23px;
  margin-left: 2.0px;
  width: 34px;
}

.signup .text-39 {
  color: var(--eerie-black);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-xxxxl);
  font-weight: 700;
  letter-spacing: -0.72px;
  margin-left: 25px;
  margin-top: 34px;
  min-height: 31px;
}

.signup .text-40 {
  align-self: center;
  color: var(--masala);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-l);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 21px;
  margin-left: 1.0px;
  margin-top: 15px;
  min-height: 21px;
  white-space: nowrap;
  width: 287px;
}

.signup .name {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 33px;
  min-height: 76px;
  width: 334px;
}

.signup .title {
  letter-spacing: 0;
  line-height: 16.4px;
  margin-left: 23px;
  margin-top: -1px;
  min-height: 16px;
  white-space: nowrap;
}

.signup .overlap-group {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--mercury);
  border-radius: 15px;
  display: flex;
  height: 50px;
  min-width: 334px;
  padding: 14px 22px;
}

.signup .place-holder {
  letter-spacing: 0;
  line-height: 19.2px;
  min-height: 19px;
  white-space: nowrap;
}

.signup .flex-col-item {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-left: 2px;
  margin-top: 20px;
  min-height: 76px;
  width: 334px;
}

.signup .place-holder-1 {
  color: var(--silver-chalice);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 16.4px;
  min-height: 16px;
  white-space: nowrap;
}

.signup .checkbox {
  align-items: flex-start;
  background-color: #fcfcfc;
  border: 1px solid;
  border-color: var(--mercury);
  border-radius: 4px;
  display: flex;
  height: 16px;
  justify-content: flex-end;
  margin-left: 23px;
  margin-top: 28px;
  min-width: 16px;
}

.signup .type-here {
  color: #2a3037;
  font-family: var(--font-family-dm_sans);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 16.5px;
  margin-top: -4px;
  min-height: 17px;
  white-space: nowrap;
}

.signup .button {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 1px;
  margin-top: 53px;
  min-height: 124px;
  width: 335px;
}

.signup .signup-1 {
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

.signup .create-an-account {
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-top: -1.00px;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.signup .signin {
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

.signup .create-an-account-1 {
  color: var(--red-orange);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-xl);
  font-weight: 700;
  letter-spacing: -0.15px;
  line-height: 22.5px;
  margin-top: -1.00px;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.signup .job-finder-app-1 {
  height: 4096px;
  margin-top: -441px;
  object-fit: cover;
  width: 974px;
}

.signup ::-webkit-scrollbar{
  display: none; /* Chrome, Safari, Opera */
}
</style>