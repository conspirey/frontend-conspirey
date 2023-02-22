<script lang="ts" setup>
//IMPORtS

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
                    console.log(js)
                    if(res.status >= 200 && res.status <= 299) {
                        this.logged = true
                    }
                }).catch((err) => {
                    console.log(err)
                })
            })
            
        },
        Logout() {
            fetch((location.origin.includes("5")? location.protocol +"//localhost:3100" : location.origin) + "/auth/logout", {
                method: "POST",
                credentials: "include",
            }).then((res) => {
                if(res.status >= 200 && res.status <= 299) {
                    this.logged = false
                }
            })
            if(this.logged) this.$router.push("/login")
        },
    },
}
</script>
<template>
<nav class="border-2 rounded-md p-4  flex text-center  ">
    <div class="main font-bold text-lg">
        <a href="/">Conspirey</a> 
    </div>
    <!-- <button @click="getUserData()">DATA</button> -->
    <div v-if="logged" class="mx-2 text-lg"> 
    Welcome {{ user?.name }}
    </div>
    <div v-if="logged" class="mx-2 text-lg"> 
        <button @click="Logout()">Logout</button>
    </div>
  <div v-if="!logged" class="mx-2 text-lg">
    <a href="/register">Register</a>
    
  </div>
    <div v-if="!logged" class="mx-2 text-lg">
    <a href="/login">login</a>
    
  </div>
</nav>
  </template>