<script>
export default {
  name: 'MainSection1',
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
  </div>

</template>

<style lang="scss" scoped>
* {
  border: 2px dashed red;
}

.containerPrincipale {
  width: 80%;
  margin: 0 auto;

  .searchbar {
    display: flex;
    width: 100%;
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
    select{
      background-color: white;
    }
    button {
      font-weight: bold;
      font-size: 1em;
    }
  }
}
</style>