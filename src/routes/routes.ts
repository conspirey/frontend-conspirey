import {createRouter, createWebHashHistory} from "vue-router"
import LoginPage from "../components/LoginPage.vue"
import RegisterPage from "../components/RegisterPage.vue"
import AppVue from "../components/Main.vue";
const route = createRouter({    
    routes: [
        {  
            path: "/", 
            name: "Home",
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
    history: createWebHashHistory("/my-app"),
    
})

export default route;