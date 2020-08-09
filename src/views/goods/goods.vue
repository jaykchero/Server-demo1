<template>
  <div>
    <h2>商品页面</h2>
       <ul>
       	<li v-for="(item,index) in list " :key="index">
         
         商品名： {{item.name}} <br>
         价格： {{item.price}} <br>
         数量：  {{item.num}} <br>
        <button @click="add(item)">添加至购物车</button><br>
        </li>
       </ul>

  </div>
</template>

<script>
  export default {
      data () {

        return {

        }
      },
      methods:{
        add(item){
           this.$store.commit('addShopping',item)
        }

      },
      computed:{
        list () {
           return this.$store.state.list;
        }

      }

  }
</script>

<style>
</style>
