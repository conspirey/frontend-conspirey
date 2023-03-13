<script lang="ts" setup>
//IMPORtS
import userDropdown from './userDropdown.vue';
import data from '../data';
</script>
<script lang="ts">
export default {
    name: "NavBar",
    data() {
        return {
            user: {name: "user", id: "0"},
            showMenu: false,
            logged: false,
        }
    },
    mounted() {
        this.getUserData()
    },
    methods: {


        
        getUserData() {
            fetch((location.origin.includes("5")? location.protocol +"//localhost:3100" : location.origin) + "/api/user", {
                method: "GET",
                credentials: "include",
            }).then((res) => {
                res.json().then((js) => {
                    this.user = js
                    if(res.status >= 200 && res.status <= 299) {
                        this.logged = true
                    }
                }).catch((err) => {
                    console.log(err)
                })
            })
            
        },
        Logout() {
            let router = this.$router
            fetch((location.origin.includes("5")? location.protocol +"//localhost:3100" : location.origin) + "/auth/logout", {
                method: "POST",
                credentials: "include",
            }).then((res) => {
                if(res.status >= 200 && res.status <= 299) {
                    this.logged = false
                    router.push("/login")
                }
            })
            // if(this.logged) this.$router.push("/login")
        },
        setLengthContent() {

            let button = document.getElementById("username");

            // Get the button text width
            let buttonTextWidth = button?.offsetWidth;

            // Set the dropdown content width based on the button text width
            let dropdownContent = document.querySelector(".dropdown-content");
            let dropdownliButton = document.querySelector(".dropdown-li-button");
            (dropdownContent as any).style.width = buttonTextWidth + "px";
            (dropdownliButton as any).style.width = ((buttonTextWidth as number) / 6) *5.1  + "px";
        },
        hoverBTN() {
            this.setLengthContent()
        },
    },
}
</script>
<template>
<nav class=" py-2 px-6 flex items-center sm:justify-between border-b-2 border-white fixed top-0 left-0 w-full z-10 bg-[#202124]">
    <div class="main font-bold justify-start text-lg flex">
        <a href="/">Conspirey</a> 
    </div>
    <div class="right flex items-center p-2">

        <div v-if="!logged" class="mx-2 text-lg">
            <a class="border-2 p-2 rounded-md px-3  transition-all duration-300 hover:border-blue-900" href="/register">Register</a>
    
        </div>
        <div v-if="!logged" class="mx-2 text-lg">
            <a class="border-2 p-2 rounded-md px-3  transition-all duration-300 hover:border-blue-900" href="/login">login</a>
        </div> 
        <div v-if="logged" class="mx-2 text-lg">
            <a class="border-2 p-2 rounded-md px-3  transition-all duration-300 hover:border-blue-900 mr-4" href="/chat">Chat</a>
        </div> 
        <div class="dropdown" v-if="logged">
            <button class="dropbtn p-[5rem]" @mouseover="hoverBTN" id="username">{{ user.name }}</button>
            <ul class="dropdown-content bg-gray-700 rounded-md p-2">
                <li class=""><button v-on:click="Logout" class="dropdown-li-button p-1 px-[1rem] border-[1px]">Logout</button></li>

            </ul>
        </div>

    </div>
</nav>
  </template>

<style>

/* Style the button */
.dropdown-li-button {
    min-width: 5rem;
}
.dropbtn {
  background-color: #3D6DC8;
  color: white;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: auto;
  min-width: 6rem;
}

/* Style the dropdown content */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 6rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

}

/* Show the dropdown content on hover */
.dropdown:hover .dropdown-content {
  display: block;
}


</style>