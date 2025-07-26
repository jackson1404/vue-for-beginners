import { createRouter , createWebHistory} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import UserListView from "@/views/UserListView.vue";
import AddNewUserView from '@/views/AddNewUserView.vue';

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;