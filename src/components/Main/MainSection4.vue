<script>
export default {
  name: 'MainSection4',
}
</script>

<template>

  <div class="containerSection4">
    <div class="containerTop">
      <div class="containerIcona">
        <img src="../../assets/thumbsUp2.png" alt="Thumbs up Icon">
      </div>
      <div>
        <h2>
          Recent Articles
        </h2>
        <p>
          Useful information about cars
        </p>
      </div>
    </div>
    <div class="containerCards">
      <div class="card">
        <div class="containerImg">
          <img src="../../assets/news-autocar-1-373x223.jpg" alt="">
        </div>
        <p>
          06.07.2022 - Auto Car
        </p>
        <h2>
          Why is BMW loved ?
        </h2>
        <p>
          BMWs have a different line with their designs and almost [...]
        </p>
        <div class="buttonBlack">
          <button>
            <h3>
              More
            </h3>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="containerImg">
          <img src="../../assets/news-autocar-2-373x223.jpg" alt="">
        </div>
        <p>
          06.07.2022 - Auto Car
        </p>
        <h2>
          How solid is Audi ?
        </h2>
        <p>
          According to EURO NCAP data with different test organization [...]
        </p>
        <div class="buttonBlack">
          <button>
            <h3>
              More
            </h3>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="containerImg">
          <img src="../../assets/news-autocar-6-373x223.jpg" alt="">
        </div>
        <p>
          06.07.2022 - Auto Car
        </p>
        <h2>
          What brand is Skoda ?
        </h2>
        <p>
          Skoda is one of the most leading automotive manufacters on the [...]
        </p>
        <div class="buttonBlack">
          <button>
            <h3>
              More
            </h3>
          </button>
        </div>
      </div>
      <div class="card">
        <div class="containerImg">
          <img src="../../assets/news-autocar-5-373x223.jpg" alt="">
        </div>
        <p>
          06.07.2022 - Auto Car
        </p>
        <h2>
          Is the Auris diesel ?
        </h2>
        <p>
          You will have a quiter vehicles that burn less than [...]
        </p>
        <div class="buttonBlack">
          <button>
            <h3>
              More
            </h3>
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.containerSection4 {
  height: 850px;
  width: 100%;
  padding-top: 30px;

  .containerTop {
    width: 40%;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
    padding-top: 50px;

    .containerIcona {
      display: flex;
      justify-content: center;
      height: 80px;
      margin-bottom: 30px;
      clip-path: circle();
    }

    h2 {
      margin-bottom: 10px;
    }
  }

  .containerCards{
    width: 80%;
    margin: 30px auto;
    display: flex;
    justify-content: space-evenly;
    

    .card{
      height: 480px;
      width: 22%;
      padding: 20px;
      text-align: center;
      box-shadow: 1px 0px 12px -6px #000000;
      border-radius: 5px;

      .containerImg{
        width: 100%;

        img{
          height: 100%;
          width: 100%;
          object-fit: contain;
        }

      }
      .buttonBlack{
        height: 20%;
        
        button{
          width: 60%;
          margin: 0 auto;
        }
      }

      h2{
        padding: 15px 0;
      }

      p{
        font-size: 1.1em;
        padding-bottom: 15px;
      }
    }
  }
}
</style>