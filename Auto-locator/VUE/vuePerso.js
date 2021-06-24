// DONNEES PRODUITS////////
const produits = [
    { id: 1, departement:"Somme (80)", description: "Porsche 911R", type:"Roadster", marque: "Porsche", prix: "35", img: "IMG/Porsche-911R-35e.jpg"},
    { id: 2, departement:"Gers (32)", description: 'Porsche 914', type:"Roadster", marque: "Porsche", prix: "45", img: "IMG/Porsche-914-45e5.jpg"},
    { id: 3, departement:"Nord (59)", description: 'Porsche 997 Cabriolet', type:"Roadster Cabriolet", marque: "Porsche", prix: "44", img: "IMG/Porsche-997-Cabriolet-44e9.jpg" },
    { id: 4, departement:"Aveyron (12)", description: 'Porsche Cayenne GTS', type:"Roadster 4x4", marque: "Porsche", prix: "24", img: "IMG/Porsche-Cayenne-GTS-24e9.jpg" },
    { id: 5, departement:"Indre (36)", description: 'Subaru Impreza WRX', type:"Berline", marque: "Subaru", prix: "30", img: "IMG/Subaru-Impreza-WRX-30e.jpg"},
    { id: 6, departement:"Loiret (45)", description: 'Audi R6 BiTurbo', type:"Berline Break", marque: "Audi", prix: "16", img: "IMG/Audi-A6-BiTurbo-16e.jpg"},
    { id: 7, departement:"Nord (59)", description: 'Audi A6 Quattro', type:"Berline", marque: "Audi", prix: "11", img: "IMG/Audi-A6-Quattro-11e5.jpg" },
    { id: 8, departement:"Indre (36)", description: 'Ferrari 328 GTB', type:"Roadster Classic", marque: "Ferrari", prix: "89", img: 'IMG/Ferrari-328-GTB-89e9.jpg'},
    { id: 9, departement:"Ain (01)", description: 'Ferrari 458', type:"Roadster Cabriolet", marque: "Ferrari", prix: "149", img: "IMG/Ferrari-458-149e.jpg"},
    { id: 10, departement:"Gers (32)", description: 'Ferrari 488 Challenge', type:"Roadster Concept", marque: "Ferrari", prix: "196", img: "IMG/Ferrari-488-Challenge-196e35.jpg"},
    { id: 11, departement:"Cantal (15)", description: 'Ferrari 488 GTB', type:"Roadster", marque: "Ferrari", prix: "172", img: "IMG/Ferrari-488-GTB-172e9.jpg"},
    { id: 12, departement:"Loiret (45)", description: 'Ferrari California', type:"Roadster", marque: "Ferrari", prix: "95", img: "IMG/Ferrari-california-95e.jpg" },
    { id: 13, departement:"Aisne (02)", description: 'Lamborghini Gallardo', type:"Roadter Cabriolet", marque: "Lamborghini", prix: "90", img: "IMG/Lamborghini-Gallardo-90e9.jpg"},
    { id: 14, departement:"Pas-de-Calais (62)", description: 'Lamborghini Murcielago', type:"Roadster", marque: "Lamborghini", prix: "185", img: "IMG/Lamborghini-Murcielago-185e.jpg" },
    { id: 15, departement:"Gers (32)", description: 'Audi Q7', type:"4x4", marque: "Audi", prix: "39", img: "IMG/Audi-Q7-38e4.jpg"},
    { id: 16, departement:"Cantal (15)", description: 'Ferrari F430 Replica', type:"Roadster", marque: "Ferrari", prix: "40", img: "IMG/ferrari-F430-Replica-40e.jpg" },
    { id: 17, departement:"Pas-de-Calais (62)", description: 'Renault Grand Scenic', type:"Espace", marque: "Renault", prix: "89", img: 'IMG/Renault-grand-Scenic-18e2.png'},
    { id: 18, departement:"Ardennes (08)", description: 'Volkswagen GOLF SW', type:"Break", marque: "Volkswagen", prix: "129", img: "IMG/Volkswagen-GOLF-SW-12e9.jpg"},
    { id: 19, departement:"Pas-de-Calais (62)", description: 'Volkswagen Coccinelle', type:"Roadster", marque: "Volkswagen", prix: "118", img: "IMG/Volkswagen-Coccinelle-11e8.jpg"},
    { id: 20, departement:"Ain (01)", description: 'Volkswagen GOLF TDI', type:"Citadine", marque: "Volkswagen", prix: "131", img: "IMG/Volkswagen-GOLF-13e1.jpg"},
    { id: 21, departement:"Dordogne (24)", description: 'Citroen C3', type:"Citadine", marque: "Citroen", prix: "79", img: "IMG/Citroen-C3-7e9.jpg" },
    { id: 22, departement:"Pas-de-Calais (62)", description: 'Citroen C ZERO', type:"Citadine", marque: "Citroen", prix: "46", img: "IMG/Citroen-C-ZERO-4e6.jpg"},
    { id: 23, departement:"Aisne (02)", description: 'Mercedes Class CLS', type:"Berline", marque: "Mercedes", prix: "199", img: "IMG/Mercedes-Class-CLS-59e9.jpg"},
    { id: 24, departement:"Nord (59)", description: 'Mercedes Class A', type:"Berline", marque: "Mercedes", prix: "188", img: "IMG/Mercedes-Classe-CLA-18e8.jpg"},
    { id: 25, departement:"Cantal (15)", description: 'Porsche 911 Carrera 4 Coupé', type:"Roadster Concept", marque: "Porsche", prix: "85", img: "IMG/Porsche-911-Carrera-4-Coupé-85e.jpeg"},
    { id: 26, departement:"Loiret (45)", description: 'Porsche 911 Carrera 4S', type:"Coupé Roadster", marque: "Porsche", prix: "144", img: "IMG/Porsche-911-Carrera-4s.JPG"},
    { id: 27, departement:"Nord (59)", description: 'Porsche 911 Targa 4S', type:"Coupé Roadster", marque: "Porsche", prix: "120", img: "IMG/Porsche-911-Targa-4S-120e.jpeg"},
    { id: 28, departement:"Indre (36)", description: 'Porsche 944', type:"Coupé Classic", marque: "Porsche", prix: "13", img: "IMG/Porsche-944-12e9.jpeg"},
    { id: 29, departement:"Ardèche (07)", description: 'Porsche Boxter', type:"Break Coupé", marque: "Porsche", prix: "44", img: "IMG/Porsche-Boxter-3p4i-43e5.jpeg"},
    { id: 30, departement:"Ain (01)", description: 'Porsche Cayman', type:"Break", marque: "Porsche", prix: "40", img: "IMG/Porsche-Cayman-39e6.jpeg"},
    { id: 31, departement:"Alpes-Maritimes (06)", description: 'Porsche Panamera', type:"Break Roadster", marque: "Porsche", prix: "39", img: "IMG/Porsche-Panamera-39e.jpeg"},
    { id: 32, departement:"Aisne (02)", description: 'Porsche Panamera Tiptronic', type:"Break Roadster", marque: "Porsche", prix: "31", img: "IMG/Porsche-Panamera-Tiptronic-30e5.jpeg"},
    { id: 33, departement:"Alpes-Maritimes (06)", description: 'Tesla MODEL S', type:"Coupé Electrique", marque: "Tesla", prix: "58", img: "IMG/Tesla-MODEL-S-58e.jpeg"},
    { id: 34, departement:"Ardèche (07)", description: 'Tesla Model S RAVEN', type:"Coupé Electrique", marque: "Tesla", prix: "100", img: "IMG/Tesla-Model-S-RAVEN-100e.jpg"},
    { id: 35, departement:"Ardennes (08)", description: 'Tesla Model Standard', type:"Coupé Electrique", marque: "Tesla", prix: "39", img: "IMG/Tesla-Model-Standard-39e.jpg"},
    { id: 36, departement:"Aveyron (12)", description: 'Tesla Model X', type:"Coupé Electrique", marque: "Tesla", prix: "70", img: "IMG/Tesla-Model-X-70e.jpeg"},
  ];
  //PRIX MINI CONSTATE=11€ ,PRIX MAXI CONSTATE=199€

  //DONNES CATEGORIES//////////////////////////////////////////////////////////////////////////////////
  // MARQUES ///////////////////////////////
  const marques = ["Porsche","Audi","Ferrari","Lamborghini","Subaru","Renault","Mercedes","Volkswagen","Tesla"];
  // TYPES  ///////////////////////////////
  const types = ["Roadster","Cabriolet","4x4","Berline","Break","Classic","Citadine","Espace","Concept","Coupé","Electrique"];
  // DEPARTEMENTS  ////////////////////////
  const departements = ["Ain (01)","Aisne (02)","Alpes-Maritimes (06)","Ardèche (07)","Ardennes (08)","Aveyron (12)",
  "Cantal (15)","Dordogne (24)","Gers (32)","Indre (36)","Loiret (45)","Nord (59)","Pas-de-Calais (62)","Somme (80)"];
    
//NOTIFICATIONS FAVORIS///////////////////////////////////////////////////////////////////////////////
window.addEventListener("load", () => {//au chargement de la page
    let checkbox = document.getElementsByTagName('input'); 
    let notif = document.getElementById('favori-notif'); 
    const checkboxCheck = () => {// Vérifie si une input est déja checkée dans la page 
      for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
          return true;
        }
      }
      return false;
    }  
    const setNotif = () => {// Paramétrage de la notification favoris actif
      if (checkboxCheck ()){
        notif.style.visibility = 'visible';
        notif.style.opacity = '1';
      } else {
        notif.style.visibility = 'hidden';
        notif.style.opacity = '0';
      }
    }
    setNotif();// Verification de la notification favoris actif
    document.addEventListener('click', setNotif);// Verification de la notification favoris actif à chaque clic dans la page
  });

//COMPOSANTS PAGE HOME/////////////////////////////////////////////////////////////////////////////
  const Accueil = {
    template: '#accueil',    
    name: 'Accueil',
    //les données associées :
    /////////////////////////////////////////////////////////////////////////
    data: () => {
      return {
        produits,
        marques,
        types,
        departements,
        searchKey: '',
        searchMarque: '',
        searchType: '',
        searchDepartement: '',
        prixMini:'10',
        prixMaxi:'200',
        liked: [],
        panier: [],
        erreurs: [],
        AdresseMail: '',
        motDePasse:'',

      }
    },
    //Utilisez des computed à la place des methods quand votre fonction ne prend pas de paramètre
    // et que celle-ci utilise une donnée réactive en interne.
    /////////////////////////////////////////////////////////////////////////
    computed: {
      // EXEMPLE DE FILTRE SEPARE
      //  filteredListKey(){
      //    return this.produits.filter((produit) => {
      //      return produit.description.toLowerCase().includes(this.searchKey.toLowerCase());
      //    });
      //  },
      // ENSEMBLE DE FILTRES APPLIQUES
      filteredListTotal(){
        return this.produits.filter((produit) => {
          return produit.departement.toLowerCase().includes(this.searchDepartement.toLowerCase())
          && produit.type.toLowerCase().includes(this.searchType.toLowerCase())
          && produit.marque.toLowerCase().includes(this.searchMarque.toLowerCase())
          && produit.description.toLowerCase().includes(this.searchKey.toLowerCase())
          && produit.prix >= parseInt(this.prixMini)
          && produit.prix <= parseInt(this.prixMaxi);
        });
      },
      getLikeCookies(){
        let cookieValue = JSON.parse($cookies.get('like'));
        cookieValue == null ? this.liked = [] : this.liked = cookieValue; 
      },
      CalculTotalPanier(){     
        let total = 0;
        for (let item in this.panier) {
          total = total + (this.panier[item].quantity * this.panier[item].prix);
        }
        return total;
      },
      CalculTotalQuantite(){
        let itemTotal = 0;
        for (let item in this.panier) {
          itemTotal = itemTotal + (this.panier[item].quantity);
        }
        return itemTotal;
      },
    },
    /////////////////////////////////////////////////////////////////////////
    methods: {
      EnvoiLikeCookie(){
        //à chaque événement sur les "input"
        document.addEventListener('input', () => {
          //délai pour permettre l'enregistrement des cookies
          setTimeout(() => {
            let cookieValue = this.liked;
            cookieValue = JSON.stringify(cookieValue)
            $cookies.set('like', cookieValue); 
          }, 300);
        })
      },
      AjouterAuPanier(produit){
        // Vérifie si produit déja dans le panier
        for (let i = 0; i < this.panier.length; i++) {
          if (this.panier[i].id === produit.id) {
            return this.panier[i].quantity++ 
          }
        }
        this.panier.push({
          id: produit.id,
          img: produit.img,
          description: produit.description,
          prix: produit.prix,
          quantity: 1
        })
      },
      PanierMoinsUn(produit, id){
        if (produit.quantity == 1) {
          this.ViderPanier(id);
        } else {
          produit.quantity--;
        }
      },
      //on récupère l'ID de l'élément clické, puis, le premier paramètre 'this.panier' le conteneur cible
      //en second paramètre 'id' la cible de la suppression
      ViderPanier(id){
        this.$delete(this.panier, id)   
      },
      //CONNEXION et verification
      checkForm:function(e) {
        this.erreurs = [];
        if(!this.AdresseMail) {
          this.erreurs.push("Adresse mail requise.");
        } else if(!this.ValidEmail(this.AdresseMail)) {
          this.erreurs.push("Adresse mail valide requise.");        
        }
        if(!this.motDePasse) this.erreurs.push("Mot de passe requit.");
        if(!this.erreurs.length) return true;
        e.preventDefault();
      },
      ValidEmail:function(AdresseMail) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(AdresseMail);
      },
      OuvrirPanier(){
        document.querySelector('#shopping-cart').className = "shopping-cart classPanierOuvert";
        // document.getElementById('shopping-cart').className = document.getElementById('shopping-cart').className.replace(/(?:^|s)classPanierOuvert(?!S)/g, '');
        return document.getElementById('shopping-cart').className;
      },
      FermerPanier(){
        document.querySelector('#shopping-cart').className = "shopping-cart classPanierFerme";
        // document.getElementById('shopping-cart').className = document.getElementById('shopping-cart').className.replace(/(?:^|s)classPanierFerme(?!S)/g, '');
        return document.getElementById('shopping-cart').className;
      },

    },
    //Le hook mounted vous permet d'avoir un total accès au composant réactif,
    // aux modèles et au DOM rendu (via this.$el).
    /////////////////////////////////////////////////////////////////////////
    mounted: function(){
      this.getLikeCookies;
    }  
  }

  //COMPOSANTS DES AUTRES PAGES/////////////////////////////////////////////////////////////////////////
  const WishList = {
    template: '<h1>WishList</h1>',
    name: 'WishList',
  }
  const UserSettings = {
    template: '<h1>Paramètres Clients :</h1>',
    name: 'UserSettings'
  }
  const ShoppingCart = {
    template: '<h1>Panier sélectionné :</h1>',
    name: 'ShoppingCart'
  }
  
  //ROUTEUR DE PAGES POUR LA NAVIGATION//////////////////////////////////////////////////////////////
  const router = new VueRouter({
    routes: [   
      { path: '/', component: Accueil, name:'Accueil' },
      { path: '/user-settings', component: UserSettings, name:'UserSettings' },
      { path: '/wish-list', component: WishList, name:'WishList' },
      { path: '/shopping-cart', component: ShoppingCart, name:'ShoppingCart'}
    ]
  })

//INSTANCIATION DE LA VUE CONSTANTE////////////////////////////////////////////////////////////////
 const appVue = new Vue({
     router
 }).$mount("#appVue");  // on repère l'ID de l'HTML
 //vue.$mount("#appVue") ---> autre façon de repérer de façon asynchrone





