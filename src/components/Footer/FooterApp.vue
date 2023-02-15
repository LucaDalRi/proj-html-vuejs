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
          <p><i class="fa-solid fa-location-dot"></i><a href="#">New Jersey, USA</a></p>
          <p><i class="fa-solid fa-phone-volume"></i><a href="#">+1 (234) 567 89 10</a></p>
          <p><i class="fa-solid fa-envelope"></i><a href="mailto:#">example@example.com</a></p>
        </div>
        <div class="socialIcon">
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
        </div>
      </div>
      <div class="newsletter">
        <h2>
          Join Our newsletter
        </h2>
        <p>
          Subscribe to be informed about our service and products.
        </p>
        <div class="containerEmail">
          <input type="email" id="emailNewsletter" placeholder="Your Email Here">
          <button>Subscribe <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <div class="myAccount">
        <h2>
          My Account
        </h2>
        <ul>
          <li><a href="#">My Account</a></li>
          <li><a href="#">Checkuot</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Packages</a></li>
          <li><a href="#">Add Car</a></li>
        </ul>
      </div>
      <div class="quicklinks">
        <h2>
          Quick Links
        </h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Refound & Returns</a></li>
        </ul>
      </div>
    </div>
    <div class="credits">
      <p>
        © 2023 Autocar - All Rights Reserved.
      </p>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.containerFooter {
  height: 550px;
  background-color: #000000;
  color: white;
  padding-top: 60px;

  .containerPrincipale {
    width: 80%;
    height: 80%;
    margin: 0 auto;
    display: flex;

    .logoInfo {
      height: 100%;
      width: 25%;

      .containerLogo {
        height: 30%;

        img {
          height: 100%;
        }
      }

      .containerInfo {
        height: 50%;
        color: rgb(221, 220, 220);

        p {
          height: 35%;
          font-size: 1.3em;
          padding-top: 15px;
        }

        i {
          vertical-align: middle;
          margin-right: 15px;
          font-size: 1.3em;
        }
      }
    }

    .newsletter {
      height: 100%;
      width: 35%;

      h2 {
        font-size: 2em;
        margin: 15px 0px;
      }

      p {
        font-size: 1.2em;
        color: rgb(221, 220, 220);

      }

      .containerEmail {
        height: 50%;
        margin-top: 40px;

        input {
          width: 90%;
          height: 70px;
          padding-left: 40px;
          font-size: 1.1em;
        }

        button {
          width: 90%;
          margin-top: 10px;
          height: 70px;
          background-color: white;
          color: gray;
          font-size: 1.2em;
        }
      }
    }

    .myAccount {
      height: 100%;
      width: 20%;
      padding: 15px 30px;

      h2 {
        font-size: 2em;
        margin-bottom: 20px;
      }

      ul {
        list-style-type: square;
        padding-left: 15px;

        li {
          padding: 8px 0px;
        }
      }
    }

    .quicklinks {
      height: 100%;
      width: 20%;
      padding: 15px 30px;

      h2 {
        font-size: 2em;
        margin-bottom: 20px;
      }

      ul {
        list-style-type: square;
        padding-left: 15px;

        li {
          padding: 8px 0px;
        }
      }
    }

    .socialIcon {
      height: 20%;
      display: flex;
      align-items: center;
      color: rgb(221, 220, 220);

      i {
        margin-right: 30px;
        padding: 0px 15px;
        font-size: 2.5em;
      }
    }
  }

  .credits {
    text-align: center;
    padding: 30px 0px;
  }
}
</style>