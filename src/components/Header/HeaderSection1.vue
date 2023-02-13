<script>
export default {
  name: 'HeaderSection1',
}
</script>

<template>

  <div class="containerHeaderSect1">
    <div class="section1">
      <div id="logoHeader">
        <img src="src\assets\logo-autocar11.png" alt="Logo Autocar">
      </div>
      <div id="linksHeader">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Vehicles</a></li>
          <li><a href="#">Dealers</a></li>
          <li><a href="#">Packages</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="buttonBlack">
        <button>
          <img src="src\assets\padlock.png" alt="Padlock Header">
          <span>My Account</span>
        </button>
      </div>
      <div class="buttonBlack">
        <button>
          <img src="src\assets\add.png" alt="Add Header">
          <span>Add Car</span>
        </button>
      </div>
      <div id="iconHeader">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div class="buttonBlack">
        <button>
          <img src="src\assets\headphones.png" alt="Headphones Header">
          <span>+1 (234) 567 89 10</span>
        </button>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.containerHeaderSect1 {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  .section1 {
    display: flex;
    height: 90%;
    width: 80%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    #logoHeader {
      width: 15%;
      height: 100%;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    #linksHeader {

      ul {
        display: flex;
        list-style: none;
        margin: 10px;

        li {
          margin: 7px;

          a {
            text-decoration: none;
            color: black;
            font-size: 1.2rem;
            font-weight: bold;
          }
        }
      }
    }

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

    #iconHeader {
      font-size: 2rem;
      margin: 0px 20px 0 20px;
    }
  }
}
</style>