import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        si:0,
      user:{
        name:'',
        age:''
      },
      addList:[

      ],

      list : [
        {  name:'苹果',
           id:1,
           price:10,
           num:10
         },
         {
            name:'橘子',
             id:2,
             price:5,
             num:5
           },
         {
            name:'香蕉',
             id:3,
             price:8,
             num:500
           },
      ],

      list1 : [
        {
           id:1,
           num:10
         },
         {
             id:2,
             num:5
           },
         {
             id:3,
             num:500
           },
      ]


  },
  mutations: {
      updateUser(state,newUser){
          state.user.name=newUser.name;
          state.user.age=newUser.age;
      },
       addShopping (state,item) {
         //console.log(item)
         var st = state.list.find(ele => ele.id==item.id);

         if(st.num>0){
            st.num --;
         }
          
          
          //跟list拥有相同id 跟num 的镜像数组
        var i= state.list1[item.id-1].num

         console.log("ic==="+i)
        if (state.addList.some(ele => ele.id==item.id)) {
            var carItem = state.addList.find(ele => ele.id==item.id);

            console.log("ci"+(carItem.num))

            if(carItem.num < i){
                carItem.num ++ ;
            }

            //console.log("++")
        } else {
          var obj = {
            name:item.name,
            id:item.id,
            num:1,
            price:item.price
          }
          //console.log(obj)
          state.addList.push(obj)
        }



       }

  },
  actions: {
  },
  modules: {
  },
  getters: {
    total (state) {
      return state.addList.reduce((total,curList)=>{
            return total + curList.num*curList.price  //获取方式为：this.$store.getters.total
      },0)
    }

  }
})
