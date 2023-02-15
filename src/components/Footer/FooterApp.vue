<script>
export default {
  name: 'FooterApp',
}
</script>

<template>

  <div class="containerFooter">
    <div class="containerPrincipale">
      <div class="logoInfo">
        <div class="containerLogo">
          <img src="../../assets/logo-footer-autocar11.png" alt="Logo Footer">
        </div>
        <div class="containerInfo">
          <p><i class="fa-solid fa-location-dot"></i>New Jersey, USA</p>  
          <p><i class="fa-solid fa-phone-volume"></i> +1 (234) 567 89 10</p>
          <p><i class="fa-solid fa-envelope"></i> example@example.com</p>
        </div>
        <div class="socialIcon">

        </div>
      </div>
      <div class="newsletter">

      </div>
      <div class="myAccount">

      </div>
      <div class="quicklinks">

      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

*{
  border: 2px dashed red;
}

.containerFooter{
  height: 550px;
  background-color: #000000;
  color: white;
  padding-top: 60px;

  .containerPrincipale{
    width: 80%;
    height: 80%;
    margin: 0 auto;
    display: flex;
  
    .logoInfo{
      height: 100%;
      width: 25%;

      .containerLogo{
        height: 30%;

        img{
          height: 100%;
        }
      }

      .containerInfo{
        height: 50%;
      }
    }

    .newsletter{
      height: 100%;
      width: 35%;
    }

    .myAccount{
      height: 100%;
      width: 20%;
    }

    .quicklinks{
      height: 100%;
      width: 20%;
    }
  }
}

</style>