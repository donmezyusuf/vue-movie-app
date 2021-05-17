import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "@/views/Homepage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage
  },
  {
    path: "/moviedetails/:id",
    name: "MovieDetails",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MovieDetails.vue")
  },
  {
    path: "/searchresults/:text",
    name: "SearchResults",
    props: true,
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/SearchResults.vue")
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
