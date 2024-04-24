<template>
<v-container v-if="pot.uid">
    <PotPostParticipant v-if="auth.currentUser?.uid !== pot.uid"> </PotPostParticipant>
     <PotPostOwner v-if="auth.currentUser?.uid === pot.uid"></PotPostOwner>
</v-container>

    
</template>

<script>
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, query, onValue, push, orderByChild, equalTo, update } from 'firebase/database'
import PotPostOwner from './PotPostOwner.vue'
import PotPostParticipant from './PotPostParticipant.vue'

export default{
  components: {
    PotPostOwner,
    PotPostParticipant

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
        const result = window.confirm('참여하시겠습니까?')
        if (result === true) {
          push(ref(this.db, `parties`), {
            potid: this.$route.query.potid,
            creatoruid: this.pot.uid,
            uid: this.auth.currentUser?.uid
          })
          // pot headcount + 1
          update(ref(this.db, `pots/${this.$route.query.potid}`), {
            headcount: this.pot.headcount + 1
          })
        }
        console.log(result)
    }
  },
  created() {
    this.auth = getAuth()
    this.db = getDatabase()

    // db에서 pots 가져오기
    const dbRef = query(ref(this.db, `pots/${this.$route.query.potid}`))
    onValue(dbRef, (snapshot) => {
      this.pot = snapshot.val()
      console.log(this.pot)
      // off(dbRef)
      // parties 정보 가져오기
      const dbRefParties = query(ref(this.db, 'parties'), orderByChild('potid'), equalTo(this.$route.query.potid))
      onValue(dbRefParties, (snapshot) => {
        // this.pot = snapshot.val()
        console.log('size', snapshot.size)
        this.headcount = snapshot.size + 1
        // off(dbRefParties)
      }, {
        onlyOnce: false
      })
    }, {
      onlyOnce: false
    })
  }
}
</script>

<style scoped>

</style>