<script>
import { store } from '../Store/store.js';

export default {
  name: 'MainSection1',
  data() {
    return {
      store,
    }
  },
}
</script>

<template>

  <div class="containerPrincipale">
    <div class="searchbar">
      <input type="text" id="keywords" placeholder="Keywords">
      <input type="text" id="location" placeholder="Locations">
      <select id="categories">
        <option value="" selected>All Categories</option>
        <option value="">Cabrio</option>
        <option value="">Coupè</option>
        <option value="">Hatchback</option>
        <option value="">Pick Up</option>
        <option value="">Sedan</option>
        <option value="">SUV</option>
      </select>
      <select id="brand">
        <option value="" selected>Brand</option>
        <option value="">BMW</option>
        <option value="">Seat</option>
        <option value="">Volkswagen</option>
      </select>
      <select id="fuel">
        <option value="" selected>Fuel Type</option>
        <option value="">Gasoline</option>
        <option value="">Diesel</option>
        <option value="">Electric</option>
      </select>
      <select id="transmission">
        <option value="" selected>Transmission</option>
        <option value="">Automatic</option>
        <option value="">Manual</option>
      </select>
      <select id="status">
        <option value="" selected>Status</option>
        <option value="">Avaible</option>
        <option value="">Reserved</option>
      </select>
      <div class="buttonBlack">
        <button>Search</button>
      </div>
    </div>
    <div class="carsTypesContainer">
      <div class="carTypeCard">
        <div class="carImg">
          <img src="../../assets/cabrio.jpg" alt="Cabrio Img">
        </div>
        <p>Cabrio</p>
        <p>3 Listings</p>
      </div>
      <div class="carTypeCard">
        <div class="carImg">
          <img src="../../assets/coupe.jpg" alt="coupe Img">
        </div>
        <p>Coupe</p>
        <p>0 Listings</p>
      </div>
      <div class="carTypeCard">
        <div class="carImg">
          <img src="../../assets/hatchback.jpg" alt="hatchback Img">
        </div>
        <p>Hatchback</p>
        <p>2 Listings</p>
      </div>
      <div class="carTypeCard">
        <div class="carImg">
          <img src="../../assets/pickup.jpg" alt="pickup Img">
        </div>
        <p>Pick Up</p>
        <p>0 Listings</p>
      </div>
      <div class="carTypeCard">
        <div class="carImg">
          <img src="../../assets/sedan.jpg" alt="sedan Img">
        </div>
        <p>Sedan</p>
        <p>1 Listings</p>
      </div>
      <div class="carTypeCard">
        <div class="carImg">
          <img src="../../assets/suv.jpg" alt="suv Img">
        </div>
        <p>SUV</p>
        <p>3 Listings</p>
      </div>


    </div>
    <div class="containerCarsCards">
      <div class="carCard" v-for="(car, i) in store.cars">
        <div class="carImg">
          <img :src="store.cars[i].immagine" alt="">
        </div>
        <div class="carInfo1">
          <p>{{ store.cars[i].nome }} <i class="fa-solid fa-circle-check"></i></p>
          <p>{{ store.cars[i].categoria }}</p>
        </div>
        <div class="carInfo2">
          <span>
            <i class="fa-solid fa-dollar-sign"></i> {{ store.cars[i].costo }}
          </span>
          <span>
            <i class="fa-solid fa-car"></i> {{ store.cars[i].brand }}
          </span>
          <span>
            <i class="fa-solid fa-gas-pump"></i> {{ store.cars[i].alimentazione }}
          </span>
          <span>
            <i class="fa-solid fa-heart"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="buttonBlack">
      <button>
        <span>
          Show All Cars
        </span>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.containerPrincipale {
  width: 80%;
  margin: 0 auto;

  .searchbar {
    display: flex;
    width: 98%;
    margin: 0 auto;
    justify-content: space-between;

    input,
    select,
    button {
      height: 70px;
      width: 150px;
      text-align: center;
      border-radius: 5px;
    }

    input,
    select,
    option {
      background-color: white;
      border: 1px solid lightgray;
      color: rgb(128, 124, 124);
    }

    button {
      font-weight: bold;
      font-size: 1em;
    }
  }

  .carsTypesContainer {
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;

    .carTypeCard {
      width: calc(100% / 6);
      height: 100%;
      box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.05);

      .carImg {
        height: 70%;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }

      p {
        height: 15%;
        text-align: center;
        font-size: 1.2em;
        color: #aaaaaa;
      }
    }
  }

  .containerCarsCards {
    display: flex;
    flex-wrap: wrap;
    color: gray;
    margin-top: 30px;

    .carCard {
      width: 25%;
      height: 400px;
      padding: 20px;
      box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.05);
      margin-bottom: 30px;

      .carImg {
        height: 70%;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }

      .carInfo1 {
        font-size: 1.2em;
        height: 23%;
        line-height: 30px;
        padding-top: 10px;
      }

      .carInfo2 {
        height: 7%;

        span {
          margin-right: 10px;

        }

        .fa-heart {
          float: right;
        }
      }
    }
  }

  .buttonBlack {
    display: flex;
    justify-content: center;

    button {
      height: 70px;
      width: 220px;
      font-size: 1.1em;

      span {
        margin-right: 10px;
      }
    }
  }
}
</style>