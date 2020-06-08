<template>
<!-- 详情页 -->
 <div>

 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         id:''
     }
   },
   methods: {
       getData(){
           axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
           .then(res =>{
               console.log(res.data)
           }).catch(err =>{
               console.log(err)
           })
       }

   },
   mounted() {
       this.id = this.$route.query.id
       console.log(this.id)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>