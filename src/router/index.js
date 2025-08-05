import { createRouter , createWebHistory} from "vue-router";
import { useAuthStore } from "../stores/auth";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import UserListView from "@/views/UserListView.vue";
import AddNewUserView from '@/views/AddNewUserView.vue';
import EditUserView from '@/views/EditUserView.vue';
import { use } from "react";

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/users',
        name: 'UserListView',
        component: UserListView
    },
    {
        path: '/adduser',
        name: '/AddNewUserView',
        component: AddNewUserView
    },
    {
        path: '/edituser/:userId',
        name: 'EditUserView',
        component: EditUserView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
    if (to.path !== '/login' && !auth.token){
        next('/login')
    } else {
        next()
    }
})


export default router;