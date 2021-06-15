<template>
  <div id="app">
    <!-- {{films}} -->
    <br />
    <br />
    <table id="montableau">
      <tr>
        <th style="width:100px; padding-right:25px;">Date</th>
        <th>Titre</th>
        <th>Histoire</th>
      </tr>

      <tr v-for="unfilm in films" :key="unfilm.name">
        <td>{{ unfilm.release_date }}</td>
        <td>{{ unfilm.title }}</td>
        <td>{{ unfilm.overview }}</td>
      </tr>
    </table>

    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Date
            </th>
            <th class="text-left">
              Titre
            </th>
            <th class="text-left">
              Histoire
            </th>
            <th class="text-left">
              Photos
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unfilm in films" :key="unfilm.name">
            <td>{{ unfilm.release_date }}</td>
            <td>{{ unfilm.title }}</td>
            <td>{{ unfilm.overview }}</td>
            <td><a href="https://www.themoviedb.org/t/p/w600_and_h900_bestv2 + {{unfilm.backdrop_path}}" alt="photo"></a></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      films: null
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/list/1?api_key=ad3aba60a11eb6e43170e9c6ec0d00e6&language=fr-FR"
      )
      .then(response => (this.films = response.data.items));
    console.log(this.films);
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
</style>
