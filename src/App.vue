<template>
  <div id="app">
    <div id="nav">
      <div class="InnerContainer">
        <router-link to="/"
          ><button class="HomeButton">Homepage</button>
        </router-link>
        <Searchbar />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Searchbar from "@/components/Searchbar";

export default {
  components: {
    Searchbar
  },
  mounted() {
    document.title = "Movie App";
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: flex;
  width: 100%;
  min-height: 100px;
  align-items: center;
  background-color: #00695c;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .HomeButton {
    width: 140px;
    height: 34px;
    color: white;
    background-color: #00897b;
    border-radius: 3px;
    &:hover {
      color: wheat;
    }
  }

  .InnerContainer {
    display: flex;
    align-items: center;
    margin: auto;
  }

  @media only screen and (max-width: 600px) {
    .HomeButton {
      width: 60px;
      line-break: anywhere;
      height: 50px;
    }
  }
}
</style>
