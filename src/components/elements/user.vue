<script lang="ts" setup>
//imports
import Swal from 'sweetalert2';
defineProps({
    "bstyle": String,
})
</script>
<script lang="ts">
export default {
    name: "User element",
    mounted() {
        document.getElementById("ucard")?.classList.add(this.bstyle)
    },
    methods: {
        
        fetchUserData() {

        }
    },

    
}

</script> 
<template>
    <div class="pop">
        <button id="ucard" >UserCard</button>
    </div>
</template>

<style>
            
</style>