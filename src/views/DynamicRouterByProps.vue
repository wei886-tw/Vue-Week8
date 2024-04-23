<template>
  <div>
    
  </div>
</template>

<script>
export default {
  props: ['id'],

  created() {
    console.log('id:', this.id)  
    const seed = this.id
    
  }
}
</script>