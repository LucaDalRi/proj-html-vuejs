<script>
import HeaderApp from './components/Header/HeaderApp.vue';
import MainApp from './components/Main/MainApp.vue';
import FooterApp from './components/Footer/FooterApp.vue';

export default {
  name: "App",
  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  }
};
</script>

<template>

  <HeaderApp />
  <MainApp />
  <FooterApp />

</template>

<style lang="scss">
button {
  height: 100%;
  background-color: #000000;
  color: #ffffff;
  padding: 0 10px 0 10px;
  font-size: 1.3em;
  border-radius: 6px;
}

a {
  text-decoration: none;
  color: unset;
}
</style>
