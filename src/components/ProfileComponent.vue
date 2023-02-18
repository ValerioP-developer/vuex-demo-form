<template>
  <div>
   <div class="card" style="width: 18rem;">
          <div class="card-header">Inserisci i dati</div>
          <div class="card-body">
            <div class="list-group">
              <label>Nome: {{name}}</label>
              <input type="text" v-model="profile.name" name="name" />
              <label>Cognome: {{lastname}}</label>
              <input type="text" v-model="profile.lastname" name="lastname" />
              <label>Email: {{email}} </label>
              <input type="text" v-model="profile.email" name="email" />
            </div>
            <hr>
            <a href="#" class="btn btn-primary"  @click="send()">Salva</a>
          </div>
    </div>
  </div>
</template>

<script>

import { mapMutations ,mapActions} from 'vuex';

export default {
  name: 'ProfileComponent',
  data (){
    return {
      profile : {
        nome : '',
        cognome : '',
        email : '',
      }
    }
  },
  computed : {
    /*
     nameStore(){
      return this.$store.state.nameStore
     }*/
     name:{
      get:function(){
          return this.$store.state.nameStore
      },
      set:function(newvalue){
        this.$store.state.nameStore =newvalue
      }
     }
  },
  methods : {
    ...mapMutations([
      'setName'
    ]),
    //It refers to profile module action
    ...mapActions('profile',[
      'actionProfile'
    ]),


    send(){
      // this.$store.commit('setName','newVAlerio');
      //this.setName('usingMapMutations');
      this.actionProfile(this.profile);
    }
  },
}
</script>
