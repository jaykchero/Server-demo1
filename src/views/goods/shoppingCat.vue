<template>
  <div>
    <h2>购物车页面</h2>
    <ul>
    	<li v-for="(item,index) in list" :key="index">
        商品名:{{item.name}}
        价格:{{item.price}}
        数量:{{item.num}}
        单品总计: {{item.price*item.num}}
      </li>
    </ul>

   <div>
      <h2>总计：{{total}}</h2>
    </div>

  </div>
</template>

<script>
  export default {
    date () {
      return {
        sum:''
      }
    },
    computed:{
      list () {
        return this.$store.state.addList;
      },
      total () {
        return this.$store.getters.total
      }


    },
    created() {

    }




  }
</script>

<style>
</style>
