<template>
  <div class="Container">
    <h2 class="Banner">
      Welcome to Movie Database!
    </h2>
    <v-container
      v-on:click="route(movie)"
      class="MovieListContainer"
      v-for="movie in this.movies"
      :key="movie.imdbID"
    >
      <v-card class="Card">
        <v-img class="ImgContainer" v-bind:src="movie.Poster"></v-img>
        <v-card-title style="font-weight: 500">{{ movie.Title }}</v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data: () => ({
    movies: {}
  }),

  methods: {
    route(param) {
      router
        .push({
          name: "MovieDetails",
          params: { id: param.imdbID, movie: param }
        })
        .catch(() => {});
    }
  },

  mounted() {
    fetch("http://www.omdbapi.com/?s=sky&y=2020&apikey=c1c41663")
      .then(res => res.json())
      .then(res => {
        this.movies = res.Search;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.Container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 100vh;
  margin-bottom: 2vh;
}
.MovieListContainer {
  width: 320px;
  margin-top: 2.5vh;
}
.ImgContainer {
  height: 320px;
  width: 240px;
  margin-top: 8px;
}
.Card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.Banner {
  margin-top: 12px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 12px;
}
</style>
