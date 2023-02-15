<script>
export default {
  name: 'MainSection3',
}
</script>

<template>

  <div class="containerSection3">
    <div class="containerTop">
      <div class="containerIcona">
        <img src="../../assets/thumbsUp.png" alt="Thumbs up Icon">
      </div>
      <div>
        <h2>
          What Are Our Customer Saying ?
        </h2>
        <p>
          Opinions from our happy customers.
        </p>
      </div>
    </div>
    <div class="containerCards">
      <div class="card">
        <p>
          We are a gallet vehicle dealer. Before we met this site, our sales were sluggish.
        </p>
        <div class="imgComments">
          <img src="../../assets/man1.png" alt="">
        </div>
        <p>
          Adam
        </p>
      </div>
      <div class="card">
        <p>
          We are a gallet vehicle dealer. Before we met this site, our sales were sluggish.
        </p>
        <div class="imgComments">
          <img src="../../assets/man2.png" alt="">
        </div>
        <p>
          Adam
        </p>
      </div>
      <div class="card">
        <p>
          We are a gallet vehicle dealer. Before we met this site, our sales were sluggish.
        </p>
        <div class="imgComments">
          <img src="../../assets/testimonial2-1.png" alt="">
        </div>
        <p>
          Adam
        </p>
      </div>
      <div class="card">
        <p>
          We are a gallet vehicle dealer. Before we met this site, our sales were sluggish.
        </p>
        <div class="imgComments">
          <img src="../../assets/testimonial4-1.png" alt="">
        </div>
        <p>
          Adam
        </p>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.containerSection3 {
  height: 850px;
  width: 100%;
  background-image: url(../../assets/comment-bg-autocar.jpg);

  .containerTop {
    width: 40%;
    margin: 0 auto;
    color: white;
    text-align: center;
    font-size: 1.2rem;
    padding-top: 50px;

    .containerIcona {
      display: flex;
      justify-content: center;
      height: 80px;
      margin-bottom: 30px;
    }

    h2 {
      margin-bottom: 10px;
    }
  }

  .containerCards {
    height: 450px;
    width: 80%;
    display: flex;
    margin: 0 auto;
    margin-top: 30px;

    .card {
      width: 25%;
      background-color: #ffffff;
      padding: 60px 40px;
      line-height: 30px;
      font-size: 1.2rem;
      color: #474747;
      text-align: center;
      border-radius: 20px;
      margin: 0px 20px;

      .imgComments {
        height: 150px;
        width: 200px;
        margin: 0 auto;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;

        img {
          height: 100%;

        }
      }
    }
  }
}
</style>