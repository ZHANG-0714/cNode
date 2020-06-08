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
         id:'',
         every :''
     }
   },
   methods: {

   },
   mounted() {
       this.id = this.$route.query.id
       this.every = this.item
       console.log(this.every)
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