<template>
  <div>
    <img width="300" height="150" :src="ArtSource" v-bind:alt="ArtAlt" />
    <div>
      <h3>{{ ArtName }}</h3>
      <p v-if="ArtEnStock">En stock</p>
      <p v-else>En rupture de stock</p>
      <div>
        <label for="add-item-quantity">Quantité : {{ ArtQuantity }}</label>
        <input
          v-model.number="ArtQuantity"
          id="add-item-quantity"
          type="number"
        />
        <button @click="addToShoppingCart(ArtQuantity)">
          Ajouter au panier d'achat
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlesItem",

props:["ArtName", "ArtQuantity", "ArtSource", "ArtAlt", "ArtEnStock", "addToShoppingCart"]
}
;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->




<style>
</style>
