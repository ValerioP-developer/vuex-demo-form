<template>
     <div id="nav">
          <router-link to="/">Home</router-link> !
          <router-link to="/profile/1254">Profile 1254</router-link> ! 
          <router-link to="/profile/4">Profile 4</router-link> ! 
          <router-link to="/profile-new">Insert Data</router-link> ! 
          <span style="float:right;">
        <!-- Default dropleft button -->
        <div class="btn-group dropleft">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            MENU
          </button>
          <div class="dropdown-menu">
                <router-link class="dropdown-item" to="/" tag="li" active-class="active" exact>Home</router-link>
                <router-link class="dropdown-item" to="/profile" tag="li" active-class="active" exact>Profile</router-link>
                <router-link class="dropdown-item" to="/profile-new" tag="li" active-class="active" exact>Inserisci Dati</router-link>
          </div>
        </div>
      </span>
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
