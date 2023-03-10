import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
import LoginPage from "../components/LoginPage.vue"
import RegisterPage from "../components/RegisterPage.vue"
import AppVue from "../components/Main.vue";
import testVue from "../components/test.vue";

import homePage from "../components/homePage.vue"
import HelloWorldVue from "../components/HelloWorld.vue";
const route = createRouter({
    routes: [
        {  
            path: "/", 
            name: "Home",
            component: homePage 
        },
        {  
            path: "/chat", 
            name: "Chat page",
            component: AppVue 
        },
        {  
            path: "/login",
            name: "Login", 
            component: LoginPage 
        },
        {  
            path: "/register",
            name: "Register", 
            component: RegisterPage 
        },
        
    ],
    history: createWebHistory(),
    
})

export default route;