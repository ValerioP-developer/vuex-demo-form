<template>
  <div>
    <h4>Il mio Profilo</h4>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Nome : </b>{{ getName }}</li>
      <li class="list-group-item"><b>Cognome : </b>{{ getLastname }}</li>
      <li class="list-group-item"><b>Email : </b>{{ getEmail }}</li>
    </ul>
  </div>
</template>



<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProfileDetailComponent',
  data (){
    return {

    }
  },
  created(){

  },
  computed : {
    //it refers to profile module actions
    /*
    ...mapGetters('profile',[
          'getName',
          'getEmail',
          'getLastname'
    ])*/
    ...mapGetters({
          'getName':'profile/getName',
          'getEmail':'profile/getEmail',
           'getLastname' : 'profile/getLastname'
    })
  },
  methods : {

  },
  props: {

  }  
}
</script>
