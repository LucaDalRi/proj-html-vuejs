<script> 
import MainSection1 from './MainSection1.vue';
import MainSection2 from './MainSection2.vue';
import MainSection3 from './MainSection3.vue';
import MainSection4 from './MainSection4.vue';

export default {
  name: 'MainApp',
  components: {
    MainSection1,
    MainSection2,
    MainSection3,
    MainSection4,
  }
}
</script>

<template>

  <MainSection1 />
  <MainSection2 />
  <MainSection3 />

</template>

<style lang="scss" scoped>

</style>