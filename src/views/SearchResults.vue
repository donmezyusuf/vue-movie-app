<template>
  <div v-if="this.movies" class="Container">
    <v-card-title class="ResultInfo">
      Search Results: {{ this.count }} result found... but it only shows 10
      result because of API limitations.
    </v-card-title>
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
  name: "SearchResult",
  props: {
    text: String
  },
  data: () => ({
    count: 0,
    movies: []
  }),
  setup() {
    function route(param) {
      router
        .push({
          name: "MovieDetails",
          params: { id: param.imdbID, movie: param }
        })
        .catch(() => {
          console.log("collision");
        });
    }
    return { route };
  },

  async mounted() {
    let query = this.$route.params.text;
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?s=" + query + "&y=2020&apikey=c1c41663"
      );
      response = await response.json();
      this.count = response.totalResults;
      this.movies = response.Search;
    } catch (err) {
      console.warn(`We have an error here: ${err}`);
    } finally {
      this.isLoading = false;
    }
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
.ResultInfo {
  font-size: 1.4rem;
  width: 100%;
}
</style>
