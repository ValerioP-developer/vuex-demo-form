<template>
  <div>
    <h4>Il mio Profilo</h4>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Nome : </b>{{ getName }}</li>
      <li class="list-group-item"><b>Cognome : </b>{{ getNameSetting }}</li>
      <li class="list-group-item"><b>Email : </b>{{ getLastname }}</li>
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
          'getLastname' : 'profile/getLastname',
          //it will be in the lastname --> it is just a test to show how to refers to different modules belove --> settings module
          'getNameSetting':'settings/getName'
    })
  },
  methods : {
  },
  props: {

  }  
}
</script>
