<template>
  <v-card class="Container">
    <div class="PosterContainer">
      <v-img class="Poster" v-bind:src="this.movie.Poster" alt="Poster"></v-img>
    </div>
    <div class="MovieInfo">
      <v-card-title style="font-size: 1.5rem">{{
        this.movie.Title
      }}</v-card-title>
      <v-card-text>Release Year: {{ this.movie.Year }}</v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "MovieDetails",
  data: () => ({
    movie: {}
  }),
  props: {
    movie: Object
  },
  mounted() {
    this.movie = this.$route.params.movie;
  }
};
</script>

<style lang="scss" scoped>
.Container {
  margin: 12px 12px 0 12px;
  padding: 16px;
  display: flex;
  border: 0.6px solid lightgrey;
}
.Poster {
  display: flex;
  width: 260px;
  height: 360px;
}
.PosterContainer {
  align-self: center;
}
.MovieInfo {
  margin-left: 12px;
}
@media only screen and (max-width: 600px) {
  .Container {
    flex-direction: column;
  }
}
</style>
