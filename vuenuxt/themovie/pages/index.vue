<template>
  <div id="app">
    <!-- {{films}} -->
    <div class="control">
      <input v-model="message" placeholder="Saisssez votre recherche" />
      <button type="submit" class="button is-dark is-fullwidth">
        - Rechercher
      </button>
    </div>
    <br />
    <br />
    <table id="montableau">
      <tr>
        <th style="width:100px; padding-right:25px;">Date</th>
        <th>
          Titre
        </th>
        <th>Histoire</th>
        <th>Photo</th>
      </tr>

      <tr v-for="unfilm in films" :key="unfilm.name">
        <td>{{ unfilm.release_date }}</td>
        <td>
          <v-row justify="center" align="end">
            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click.stop="dialog = true"
                  @click:append-outer="getFilm(unfilm.id)"
                >
                  {{ unfilm.title }}
                  <br />
                  Description
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline"
                  >Description de {{ unfilm.title }}</v-card-title
                >
                <v-card-text>{{ unfilm.overview }}</v-card-text>
                <v-card-text>
                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                  >
                    <v-chip>Avis : </v-chip>

                    <v-chip>Durée du film : </v-chip>
                  </v-chip-group>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    text
                    @click.stop="dialog = false"
                    >Ok</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </td>
        <td width="700">{{ unfilm.overview }}</td>
        <td>
          <img
            class="fit-picture"
            :src="
              'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' +
                unfilm.backdrop_path
            "
            width="200"
            height="300"
            alt="Affiche film"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      films: null,
      message: null,
      selection: null,
      movieTemp: null,
      movie: null
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/list/1?api_key=ad3aba60a11eb6e43170e9c6ec0d00e6&language=fr-FR"
      )
      .then(response => (this.films = response.data.items));
    console.log(this.films);
  },
  methods: {
    async getFilm(index) {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${index}?api_key=ad3aba60a11eb6e43170e9c6ec0d00e6&language=fr-Fr`
        )
        .then(response => (this.movieTemp = response.data.items));
      console.log("c'est le film choisi", this.movie);
      this.movie = movieTemp.data.results;
    }
  }
};
</script>

<style>
table {
  border-spacing: 0px;
}
table,
th,
td {
  border: 1px solid white;
  color: cyan;
}

input {
  color: aqua;
}
</style>
