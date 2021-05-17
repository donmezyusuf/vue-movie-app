import router from "@/router";

export default function useRoute({routeName, routeParam}) {
    router.push({name: routeName, params: routeParam}).catch(() => {
    });
}