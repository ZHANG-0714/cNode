<template>
<!-- 首页主体内容 -->
 <div>
     <el-card class="box-card">
        <div v-for="o in 4" :key="o"></div>
      </el-card>
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
.box-card {
  width: 1040px;
  height: 550px;
  margin-top: 20px;
}

</style>