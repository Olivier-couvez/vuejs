<template>
  <div id="app">
   
  <h1>{{garageName}} </h1>
			<p >
				Bienvenue dans au {{garageName}} ! 				
				Apple pie jelly beans chupa chups topping gingerbread marzipan. Jelly cake tootsie roll chocolate cake danish biscuit.
				Cupcake cake apple pie ice cream donut sweet roll candy. Pudding oat cake topping. 
				Pudding wafer cake ice cream jujubes marzipan cake. Pie macaroon pastry jelly-o jelly candy. 
			</p>
			<section >
				<h2 >Articles</h2>
				<div v-for=" article in simpleArticles " :key="article.name">


          <ArticlesItem  
          v-bind:ArtName="article.name" 
          :ArtAlt="article.image.alt"
          :ArtSource="article.image.source"
          :ArtQuantity="article.quantity"
          :inStock="article.inStock"
          :addToShoppingCart="addToShoppingCart"
          />


				</div>
			</section>

			<aside >
				<h2>Panier d'achat: {{shoppingCart}} articles</h2>
			</aside>

            <h2 >Contactez nous</h2>
			<p>Adresse : {{address}} </p>
			<p >Téléphone : {{phone}}</p>
			<p>Email : {{email}}</p>
			<p>Horaires :</p>
			<ul>
				<li>L-V: 08:00 à 19:00</li>
				<li>Samedi: 09:00 à 19:00</li>
			</ul>
			<footer >
				<p>{{footerCopyright}}</p>
			</footer>
	

  </div>
</template>

<script>

import ArticlesItem from './components/ArticlesItem.vue'

export default {
  name: 'App',
  components: {
  ArticlesItem
  },
  data(){
    return {
 
					address: "18 avenue de la roue, Lille, France",
					email: "hello@garagedurant.fr",
					phone: "01 59 59 59 59",
					garageName :"Garage Durant",
					shoppingCart: 0,
					simpleArticles: [
						{
							name: "Freins Céramique",
							image: {
								source: "https://www.piecesauto-pro.fr/magazine/wp-content/uploads/2020/01/Keramische-Bremsbel%C3%A4ge-1.jpg",
								alt: "Des freins céramique"
							},
							inStock: true,
							quantity: 1
						},
						{
							name: "Essuis Glace Bosh",
							image: {
								source: "https://media.centrakor.com/catalog/product/cache/image/800x800/0ee134d6d987b4a4dd752d2524c88dff/b/a/balai-essuie-glace-12-pouces-30cm-247535_247535_DEB_WEB.JPG",
								alt: "Essuis Glace Bosh"
							},
							inStock: true,
							quantity: 1
						},
						{
							name: "Huile Moteur",
							image: {
								source: "https://www.oreca-store.com/blog/wp-content/uploads/2019/05/20952739_l-1288x724.jpg",
								alt: "Huile Moteur"
							},
							inStock: false,
							quantity: 1
						}
					]
    }
          
				},
                computed:{
                    footerCopyright(){
                        const currentYear = new Date().getFullYear();

                        return `Copyright ${this.garageName} ${currentYear}`
                    }
                },
				methods:{
					addToShoppingCart(amount){
						this.shoppingCart += amount
					}
				}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
