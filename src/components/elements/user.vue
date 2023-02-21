<script lang="ts" setup>
//imports
import {User} from "../type"
import data from "../../data"
import Swal from 'sweetalert2';
defineProps({
    bstyle: String,
    btext: String
})
</script>
<script lang="ts">
export default {
    name: "User element",
    mounted() {
        document.getElementById("ucard")?.classList.add(this.bstyle as string)
    },
    data() {
        return {
            user: {} as User,
            SucFD: false,
        }
    },
    methods: {
        async ShowMenu() {
            await this.UserData()
            Swal.fire({
                title: "User Info",
                html: this.user.id != ""? `${this.user.name} ${this.user.id}`: `Failed to fetch`
            })
        },

        async fetchUserData() {
            let response = await fetch(location.origin + "/api/user", {credentials: "include"})
            let json = await response.json()
            this.user = json

        }
    },

    
}

</script> 
<template>
        <button @click="ShowMenu()" id="ucard">{{ btext }}</button>
</template>

<style>
            
</style>