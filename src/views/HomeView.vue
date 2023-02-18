<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          Benvenuto : {{nameStore}}
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <profile-component></profile-component>
        </div>
        <div class="col-md-6">
            <profile-detail-component></profile-detail-component>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileDetailComponent from '@/components/ProfileDetailComponent.vue'
import ProfileComponent from '@/components/ProfileComponent.vue'
import { mapState } from 'vuex';

//import { mapState } from 'vuex';


export default {
  name: 'HomeView',
  data (){
    return {
      colore : 'Verde'
    }
  },
  computed : {

    ...mapState([
          'nameStore',
    ])
    /*name(){
          return this.$store.getters.getName;
    }*/
  },
  methods : {
  
  },
  components: {
    
    'profile-detail-component' : ProfileDetailComponent,
    'profile-component' : ProfileComponent 
  }
}
</script>



