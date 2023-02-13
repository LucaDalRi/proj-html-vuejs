<script>
import HeaderApp from './components/Header/HeaderApp.vue';
import MainApp from './components/Main/MainApp.vue';

export default {
  name: "App",
  components: {
    HeaderApp,
    MainApp,
  }
};
</script>

<template>

  <HeaderApp />
  <MainApp />

</template>

<style lang="scss">
.buttonBlack {
  height: 100%;

  button {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    padding: 0 10px 0 10px;
    font-size: 1.3em;
    border-radius: 6px;

    img {
      height: 60%;
      filter: invert(100%);
      margin-right: 5px;
    }
  }
}
</style>
