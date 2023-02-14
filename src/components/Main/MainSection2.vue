<script>
export default {
  name: 'MainSection2',
}
</script>

<template>

  <div class="containerSection2">
    <div class="containerImg-Info">
      <div class="imgCar">
        <img src="../../assets/aoutcar-about-1.png" alt="Bmw 8">
      </div>
      <div class="info infoCircle1">
        <h3>
          <p>24</p> Years Of Experience
        </h3>
      </div>
      <div class="info infoCircle2">
        <h3>
          <p>240</p> Special Expert Team
        </h3>
      </div>
    </div>
    <div class="containerText">
      <div class="container1">
        <h2>
          Want to buy or sell a vehicle?
        </h2>
        <p>
          You can put your vehicle for sale by registering on our website. Whether you are a dealer os sell personally.
          Sell your vehicle in the most profitable way.
          With this system, wich has millions of members, you will be able to buy and sell vehicle quickly.
        </p>
        <div class="divider">
          <img src="../../assets/divider.jpg" alt="Divider">
        </div>
      </div>
      <div class="container2">
        <div class="icona">
          <img src="../../assets/IconaAuto.webp" alt="Icona Model Vehicles">
        </div>
        <div class="text">
          <h2>
            Model Vehicles
          </h2>
          <p>
            We are sure that you will find vehicles of suitable models on our website.
          </p>
        </div>
      </div>
      <div class="container2">
        <div class="icona">
          <img src="../../assets/icona2nd.png" alt="">
        </div>
        <div class="text">
          <h2>
            2nd Hand Vehicles
          </h2>
          <p>
            You can put your used vehicles for sale by adding them to our website.
          </p>
        </div>
      </div>
      <div class="buttonBlack">
        <button>Get to know us <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.containerSection2 {
  margin-top: 30px;
  height: 800px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  .containerImg-Info {
    width: 60%;
    height: 100%;
    background-image: url('../../assets/circle-auto-car-1.png');
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .imgCar {
      margin-left: 60px;

      img {
        height: 600px;
        width: 650px;
      }
    }

    .info {
      color: #ffffff;
      background-color: #000000;
      width: 170px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      clip-path: circle();

      p {
        font-size: 2.2em;
      }

      h3 {
        text-align: center;
        height: 100%;
        padding-top: 50px;
      }
    }

    .infoCircle1 {
      top: 130px;
      left: 240px;
    }

    .infoCircle2 {
      right: 150px;
      bottom: 130px;
    }
  }

  .containerText {
    height: 80%;
    width: 40%;

    .buttonBlack {
      height: 80px;
      margin-top: 30px;
      
      button{
        padding: 0px 30px;
        font-size: 1.1em;

        i{
          margin-left: 10px;
        }
      }
    }
  }

  .container1 {

    h2 {
      font-size: 2em;
      margin-bottom: 20px;
    }

    p {
      color: #474747;
      line-height: 22px;
      font-size: 1.1em;
      margin-bottom: 20px;
    }
  }

  .container2 {
    display: flex;
    align-items: center;
    margin-top: 30px;

    .icona {
      width: 15%;
      height: 80px;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        filter: saturate(10%);
      }
    }

    h2 {
      padding: 5px 0px;
    }

    p {
      padding: 15px 0px;
      color: #474747;
    }
  }
}
</style>