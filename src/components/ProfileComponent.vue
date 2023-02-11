<template>
  <div>
   <div class="card" style="width: 18rem;">
          <div class="card-header">Inserisci i dati</div>
          <div class="card-body">
            <div class="list-group">
              <label>Nome: {{nameStore}}</label>
              <input type="text" v-model="name" name="name" />
              <label>Cognome: {{lastname}}</label>
              <input type="text" v-model="lastname" name="lastname" />
              <label>Email: {{email}} </label>
              <input type="text" v-model="email" name="email" />
            </div>
            <hr>
            <a href="#" class="btn btn-primary"  @click="send()">Salva</a>
          </div>
    </div>
  </div>
</template>

<script>

//import { mapGetters,mapMutations,mapActions } from 'vuex';

export default {
  name: 'ProfileComponent',
  data (){
    return {
        name : 'eef',
        lastname : 'ggg',
        email : 'pppp',      
    }
    
  },
  computed : {
     nameStore(){
      return this.$store.state.nameStore
     }
  },
  methods : {
    send(){
    this.$store.state.nameStore = this.name
    }
  },
}
</script>
