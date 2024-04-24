import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  updateProfile,
  updateEmail,
  onAuthStateChanged
} from "firebase/auth";
import {ref, query, onValue, orderByChild} from 'firebase/database'
import { firebaseDB } from "./db";

export const firebaseAuth = {
  setKeyIdentifier(thisComponent) {
    // Validate
    if(!thisComponent.$refs.formFirst.validate()) return

    // 위젯 준비
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': () => {
          // 위젯 클릭 완료
          signInWithPhoneNumber(thisComponent.auth, `+82 ${thisComponent.phonenum}`, window.recaptchaVerifier)
          .then((confirmationResult) => {
            console.log("정상 SMS 전송")
            thisComponent.confirmationResult = confirmationResult
          }).catch(() => {});
      },
      'expired-callback': () => {
      }
    }, thisComponent.auth);

    // 위젯 호출
    window.recaptchaVerifier.render().then(function(widgetId) {
      window.grecaptcha.reset(widgetId);
    });

  },
  Confirm(thisComponent){
    if(!thisComponent.$refs.formSecond.validate()) return
    if(!thisComponent.confirmationResult) {
      alert('먼저 인증 받기를 눌러주세요.')
      return 
    }

    thisComponent.confirmationResult.confirm(thisComponent.identifiernum).then(result => {
      const url = thisComponent.$route.name === 'signup' ? '/login' : '/pothomescreen'
      console.log('전화번호 로그인 완료', result.user)
      // 최초 로그인인 경우 이름과 이메일 변경
      if (!result.user.displayName) {
        // 회원 이름 변경
        updateProfile(thisComponent.auth.currentUser, {
          displayName: thisComponent.name
        }).then(() => {
          // 이메일 변경
          updateEmail(thisComponent.auth.currentUser, thisComponent.email).then(() => {
            thisComponent.$router.push(url)
          }).catch(error => {
            console.error('현 사이트에 동일한 이메일 있음', error)
          })
          // thisComponent.displayName = '테스트 유저'
        })
      } else {
        thisComponent.$router.push(url)
      }
    }).catch(error => {
      console.error(error)
      alert("인증번호를 다시 입력해주세요.")
    })
  },
  onAuthStateChanged(thisComponent) {
    onAuthStateChanged(thisComponent.auth, (user) => {
      if (user) {
        console.log('로그인', user.uid);
        // 본인이 속한 pots 가져오기
        // const dbRef = query(ref(thisComponent.db, 'pots'), orderByChild('uid'), equalTo(user.uid))
        const dbRef = query(ref(thisComponent.db, 'pots'), orderByChild(`parties/${user.uid}`))
        onValue(dbRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            firebaseDB.noti(thisComponent, childSnapshot.key)
          })
        }, {
          onlyOnce: true
        })
      } else {
        console.log("not logged in");
      }
    })
  }
};
