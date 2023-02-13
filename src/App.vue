<script>
import HeaderApp from './components/Header/HeaderApp.vue';

export default {
  name: "App",
  components: {
    HeaderApp,
  }
};
</script>

<template>

  <HeaderApp />

</template>

<style lang="scss">
.buttonBlack {
      height: 100%;

      button {
        height: 100%;
        display: flex;
        align-items: center;
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
