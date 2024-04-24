<template>
<v-app>
  <v-main>
      <v-container>
<input type="hidden" id="anPageName" name="page" value="login" />
    <div class="container-center-horizontal">
      <div class="login screen" >
        <div style="overflow:auto; width:350px; height:800px;"></div>
        <div style="overflow:auto; width:350px; height:800px;"></div>
        <img class="icon" src="img/icon-2@2x.svg" alt="Icon" />
        <div class="text-37">로그인</div>
        <div class="text-38">전화번호로 로그인합니다.</div>
        <v-form ref="formFirst">
          <div class = "PhoneNumber">
            <v-col>
              <div class="title dmsans-normal-masala-12px">휴대전화번호</div>
              <div class="text-38" style="margin-left:14px;position:relative;"> -포함해서 입력하세요 ex. 010-1234-5678</div>
              <div class="overlap-group">
                <div class="place-holder dmsans-normal-silver-chalice-14px">
                  <v-text-field v-model = "phonenum" label = "phonenum" :rules="[value => !!value || '전화번호를 입력 하세요.']" placeholder="010-1234-5678" style="margin-top:-18px; postion:relative;"></v-text-field>
                </div>
              </div>
              <div id = "recaptcha-container" ></div>
              <v-btn @click="setKeyIdentifier()" style="margin-top:10px; margin-left:5px; position:relative;">인증받기</v-btn>
            </v-col>
          </div>
        </v-form>
        <v-form ref="formSecond">
          <div class = "IdentifierNum">
            <div class="form-1"> 
              <v-col>
                <div class="title dmsans-normal-masala-12px">인증번호</div>
                <div class="overlap-group" style="margin-top:10px; margin-left:-5px">
                  <p class="place-holder dmsans-normal-silver-chalice-14px">
                    <v-text-field v-model = "identifiernum" label = "identifier" :rules="[value => !!value || '인증번호를 입력 하세요.']"  placeholder="휴대전화로 발송된 인증번호 6자리를 입력하세요" style="margin-top:-18px; postion:relative;"></v-text-field>
                  </p>
                </div>             
              </v-col>
              <div class="login-button">
                <div class="button" @click="Login()"><div class="login-1 dmsans-bold-white-14px">로그인</div></div>
              </div>
            </div>
          </div>
        </v-form>
      </div>
      </div>

<!-- 
        <v-form ref="formFirst">
          <div class = "PhoneNumber">
            <v-col>
              <h6> 휴대전화 번호</h6>
              <h6> -포함해서 입력하세요 ex. 010-1234-5678</h6>
              <v-text-field v-model = "phonenum" label = "phonenum" :rules="[value => !!value || '전화번호를 입력 하세요.']" placeholder="010-1234-5678"></v-text-field>
              <div id = "recaptcha-container" ></div>
              <v-btn @click="setKeyIdentifier()">인증받기</v-btn>
            </v-col>
          </div>
        </v-form>
        <v-form ref="formSecond">
          <div class = "IdentifierNum">
            <v-col>
              <h6>인증번호 입력</h6>
              <v-text-field v-model = "identifiernum" label = "identifier" :rules="[value => !!value || '인증번호를 입력 하세요.']"  placeholder="휴대전화로 발송된 인증번호 4자리를 입력하세요"></v-text-field>
            </v-col>
            <v-btn @click="Login()">로그인</v-btn>
          </div>
        </v-form> -->
      </v-container>
  </v-main>
</v-app>
</template>

<script>

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
      confirmationResult : null
    };
  },
  methods: {
    onSignInSubmit() {
      console.log(this.msg)
    },
    setKeyIdentifier() {
      firebaseAuth.setKeyIdentifier(this)
    },
    Login(){
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
/* screen - login */

.login {
  align-items: center;
  background-color: var(--zircon);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 812px;
  padding: 65px 0;
  width: 375px;
}

.login .icon {
  height: 23px;
  margin-left: 1.0px;
  margin-top: 3px;
  width: 34px;
}

.login .text-37 {
  align-self: flex-start;
  color: var(--eerie-black);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-xxxxl);
  font-weight: 700;
  letter-spacing: -0.72px;
  margin-left: 44px;
  margin-top: 44px;
  min-height: 31px;
}

.login .text-38 {
  color: var(--masala);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-l);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 19.2px;
  margin-top: 15px;
  min-height: 19px;
  white-space: nowrap;
  width: 287px;
}

.login .form {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-left: 1.0px;
  margin-top: 37px;
  min-height: 76px;
  width: 334px;
}

.login .title {
  letter-spacing: 0;
  line-height: 16.4px;
  margin-left: 23px;
  margin-top: -1px;
  min-height: 16px;
  white-space: nowrap;
}

.login .overlap-group {
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

.login .place-holder {
  letter-spacing: 0;
  line-height: 19.2px;
  min-height: 19px;
  white-space: nowrap;
}

.login .form-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-left: 1.0px;
  margin-top: 18px;
  min-height: 76px;
  width: 334px;
}

.login .place-holder-1 {
  color: var(--silver-chalice);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 16.4px;
  min-height: 16px;
  white-space: nowrap;
}

.login .login-button {
  align-items: flex-start;
  display: flex;
  height: 51px;
  margin-top: 289px;
  min-width: 335px;
}

.login .button {
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

.login .login-1 {
  letter-spacing: -0.14px;
  line-height: 21.3px;
  margin-top: -1.00px;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}



</style>