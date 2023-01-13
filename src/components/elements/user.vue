<script lang="ts" setup>
//imports
import {User} from "../type"
import data from "../../data"
import Swal from 'sweetalert2';
defineProps({
    "bstyle": String,
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
            await this.fetchUserData()
            Swal.fire("User Info",this.user.id != ""? `${this.user.name} ${this.user.id}`: `Failed to fetch`)
        },

        async fetchUserData() /*success */ {
            let response = await fetch(data.url + "api/user", {credentials: "include"})
            let json = await response.json()
            this.user = json
            // fetch(data.url + "api/user", {credentials: "include"}).then((res) => {
            //     if(res.status >= 200 && res.status <= 299) {
            //         res.json().then((js) => {
                        
            //             this.user = js
            //             this.SucFD = true   
            //         })

            //     }
            // }).catch(() => {
            //     this.SucFD = false
            // })
        }
    },

    
}

</script> 
<template>
    <div class="pop">
        <button @click="ShowMenu()" id="ucard">UserCard</button>
    </div>
</template>

<style>
            
</style>