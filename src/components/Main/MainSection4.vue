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
}
</style>