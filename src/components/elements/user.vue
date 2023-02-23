<script lang="ts" setup>
//imports
import {User} from "../type"
import data from "../../data"
import Swal from 'sweetalert2';
defineProps({
    bstyle: String,
    btext: String,
    uid: String,
    text: String,
})
</script>
<script lang="ts">
export default {
    name: "User element",
    mounted() {
        // document.getElementById("ucard")?.classList.add(this.bstyle as string)
    },
    data() {
        return {
            user: {} as User,
            SucFD: false,
        }
    },
    methods: {
        async ShowMenu() {
            await this.fetchUserData()
            Swal.fire({
                title: "User Info",
                html: this.user.id != ""? `${this.user.name} ${this.user.id}`: `Failed to fetch`
            })
        },

        async fetchUserData() {
            console.log(this.uid)
            let uid = this.uid? this.uid : ""
            let response = await fetch((location.origin.includes("5")? location.protocol +"//localhost:3100" : location.origin) + "/api/user?id="+uid, {credentials: "include"})
            let json = await response.json()
            this.user = json
            console.log(uid, this.text)
            console.log(this.user)

        }
    },

    
}

</script> 
<template>
        <button @click="ShowMenu()" :class="bstyle" id="ucard">{{ btext }}</button>
</template>

<style>
            
</style>