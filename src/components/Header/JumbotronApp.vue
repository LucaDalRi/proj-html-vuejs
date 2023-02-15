<script>
import { store } from '../Store/store.js';

export default {
  name: 'JumbotronApp',

  data() {
    return {
      store,
      activeImg: 0,
    }
  },

  methods: {

    leftClick() {
      this.activeImg--;
      if (this.activeImg < 0) {
        this.activeImg = 3
      }
    },

    rightClick() {
      this.activeImg++;
      if (this.activeImg > 3) {
        this.activeImg = 0
      }
    }

  },

  mounted() {

    setInterval(() => {
      this.activeImg--;
      if (this.activeImg < 0) {
        this.activeImg = 3
      }
    }, 5000);

  }
}
</script>

<template>

  <div class="containerJumbotron">
    <img :src="store.imgCarosello[activeImg].img" alt="Jumbotron Cars">
    <div class="arrow left" @click="leftClick()">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </div>
    <div class="arrow right" @click="rightClick()">
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </div>
    <div id="textJumbotron">
      <div>
        <h1>
          Buy And Sell Your Car At Its Value
        </h1>
      </div>
      <div>
        <h2>
          Find the right price and dealer
        </h2>
      </div>
      <div class="buttonBlack">
        <button>
          Learn More
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.containerJumbotron {
  height: 800px;
  display: flex;
  position: relative;
  margin-bottom: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .arrow {
    width: 60px;
    height: 60px;
    position: absolute;
    background-color: #000000;
    color: #aaaaaa;
    top: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
  }

  .right {
    right: 2%;
  }

  .left {
    left: 2%;
  }
}

#textJumbotron {
  position: absolute;
  left: 15%;
  top: 40%;
  width: 400px;
  height: 250px;
  color: #ffffff;

  h1,
  h2 {
    padding-bottom: 30px;
  }

  h1 {
    font-size: 2.3em;
  }

}

.buttonBlack {
  height: 30%;

  button {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: none;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.493);
  }
}
</style> 