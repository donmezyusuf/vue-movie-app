<template>
  <div data-app class="OuterContainer">
    <v-card color="red lighten-2" class="SearchbarContainer">
      <v-card-text class="PaddingFix">
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          @change="route(model)"
          v-on:keydown.enter="routeSearch(search)"
          color="white"
          hide-no-data
          hide-selected
          item-text="Title"
          item-value="imdbID"
          label="Search Movies"
          placeholder="Start typing to Search"
          prepend-icon="mdi-magnify"
          return-object
        ></v-autocomplete>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "Searchbar",
  data: () => ({
    entries: [],
    isLoading: false,
    model: null,
    search: null,
    timeout: null
  }),
  methods: {
    route(param) {
      router
        .push({
          name: "MovieDetails",
          params: { id: param.imdbID, movie: param }
        })
        .catch(() => {
          console.log("collision");
        });
    },
    routeSearch(searchText) {
      router
        .push({ name: "SearchResults", params: { text: searchText } })
        .catch(() => {});
    }
  },

  computed: {
    items() {
      return this.entries?.map(entry => {
        return Object.assign({}, entry, entry.Title);
      });
    }
  },

  watch: {
    async search(val) {
      this.isLoading = true;

      try {
        let response = await fetch(
          "https://www.omdbapi.com/?s=" + val + "&y=2020&apikey=c1c41663"
        );
        response = await response.json();
        this.count = response.totalResults;
        this.entries = response.Search;
      } catch (err) {
        console.warn(`We have an error here: ${err}`);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.SearchbarContainer {
  width: 65vw;
  max-width: 800px;
  height: 74px;
}

.PaddingFix {
  padding-top: 6px;
  padding-bottom: 0;
}

.OuterContainer {
  margin-left: 3.5vw;
}

@media only screen and (max-width: 600px) {
  .SearchbarContainer {
    width: 75vw;
  }
}
@media only screen and (min-width: 1000px) {
  .SearchbarContainer {
    width: 55vw;
  }
}
</style>
