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
    methods: {


        
        getUserData() {
            fetch(data.url + "api/user", {
                method: "POST",
                credentials: "include",
            }).then((res) => {
                res.json().then((js) => {
                    this.user = js
                    if(res.status >= 200 && res.status <= 299) {
                        this.logged = true
                    }
                })
            })
        }
    },
}
</script>
<template>
<nav class="border-2 rounded-md p-4 w-[80vw] mx-4 flex text-center  ">
    <div class="main font-bold text-lg">
        Conspirey 
    </div>
    <button @click="getUserData()">DATA</button>
    <div v-if="logged" class="mx-2 text-lg"> 
    Welcome {{ user?.name }}
    </div>

  <div v-if="!logged" class="mx-2 text-lg">
    <a href="/register">Register</a>
    
  </div>
    <div v-if="!logged" class="mx-2 text-lg">
    <a href="/login">login</a>
    
  </div>
</nav>
  </template>