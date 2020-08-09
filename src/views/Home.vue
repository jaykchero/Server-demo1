<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"><br>
    <input type="text" placeholder="name" v-model="user.name"> <br>
    <input type="text" placeholder="age" v-model="user.age"> <br>
    <button @click="updateUser">更新</button>
  </div>
</template>

<script>


export default {
    data () {

      return {
        user : {
          name:'',
          age:''
        }
      }
    },
    methods:{
      updateUser () {
        console.log(this.user);
        this.$store.commit('updateUser',this.user)
        console.log("更新后："+this.$store.state.user.name)
      }
    }

}
</script>
