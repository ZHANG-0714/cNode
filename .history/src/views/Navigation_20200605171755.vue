<template>
<!-- 导航栏 -->
 <div>
     <div class="nav">
       <div>
         <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
       </div>
     </div>

     <router-view></router-view>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.nav{
    width: 100%;
    height: 80px;
    background-color: #444444;
}

</style>