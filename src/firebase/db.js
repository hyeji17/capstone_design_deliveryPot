import { ref, query, onValue, update } from 'firebase/database'

export const firebaseDB = {
  noti(thisComponent, potid) {
    // /* eslint-disable */
    // debugger
    const dbRef = query(ref(thisComponent.db, `pots/${potid}`))
    onValue(dbRef, (snapshot) => {
      const pot = snapshot.val()
      if (pot.uid === thisComponent.auth.currentUser?.uid) {
        // 방장인 경우
        let newNoti = false
        for (let key in pot.parties) {
          if (!pot.parties[key].doneNotiOwner) {
            newNoti = true
          }
        }
        if (newNoti) {
          if (window.confirm(`${pot.title}에 새로운 참여자가 있습니다. 이동 하시겠습니까?`)) {
            thisComponent.$router.push(`/potpost?potid=${potid}`)
          }
        }
      } else {
        // 참여인 경우
        if (pot.done && !pot.parties[thisComponent.auth.currentUser?.uid].doneNotiParty) {
          if (window.confirm(`${pot.title}의 팟이 마감되었습니다. 오픈 채팅 링크를 확인 하시겠습니까?`)) {
            thisComponent.$router.push(`/potpost?potid=${potid}`)
          }
        }
      }
      // off(dbRef)
    }, {
      onlyOnce: false
    })
  },
  potRead(thisComponent) {
    // db에서 pots 가져오기
    thisComponent.dbRef = query(ref(thisComponent.db, `pots/${thisComponent.$route.query.potid}`))
    onValue(thisComponent.dbRef, (snapshot) => {
      thisComponent.pot = snapshot.val()
      console.log(thisComponent.pot)
      // 알림 확인
      if (thisComponent.pot.uid === thisComponent.auth.currentUser?.uid) {
        for (let key in thisComponent.pot.parties) {
          thisComponent.pot.parties[key].doneNotiOwner = true
        }
        update(ref(thisComponent.db, `pots/${thisComponent.$route.query.potid}/parties`), thisComponent.pot.parties)
      } else if (thisComponent.pot.done && !thisComponent.pot.parties[thisComponent.auth.currentUser?.uid].doneNotiParty) {
        update(ref(thisComponent.db, `pots/${thisComponent.$route.query.potid}/parties/${thisComponent.auth.currentUser?.uid}`), {
          doneNotiParty: true
        })
      }
    }, {
      onlyOnce: false
    })
  }
}
