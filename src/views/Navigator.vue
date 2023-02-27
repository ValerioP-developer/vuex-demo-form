<template>
     <div id="nav">
          <router-link to="/">Home</router-link> 
          <router-link to="/profile">Profile</router-link> 
          <router-link to="/profile-new">Profile</router-link> 
     </div>

</template>

<script>
export default {
  name: 'navigatorView',
  data (){
    return {
      
    }
  },
  computed : {

  },
  methods : {
  
  },
  components: {
  //  'profile-detail-component' : ProfileDetailComponent,
  //  'profile-component' : ProfileComponent 
  }
}
</script>
