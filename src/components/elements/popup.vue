<script lang="ts" setup>
//imports
import Swal from 'sweetalert2';
defineProps({
    "b-style": String,
    "b-text": String,
    "title": String
    
})
defineExpose()
</script>
<script lang="ts">
export default {
    name: "Popup element",
    methods: {
        onclick() {
           Swal.fire(this.title, ) 

        }
    },

    
}

</script> 
<template>
    <div class="pop">
        <div> <!-- dd-->
            {{ $refs }}
        </div>
    </div>
</template>

<style>
            
</style>