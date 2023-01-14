<script lang="ts" setup>
import UserCard from "./elements/user.vue"
</script>
<script lang="ts">
export default {
    mounted() {
        let el = document.getElementById("2")
        let ele = document.createElement("li")
        el?.appendChild(ele)
        ele.innerHTML += '<UserCard bstyle="text-green-500" btext="name" />'
    }
}
</script>
<template>
    <div class="pop">
        <UserCard bstyle="text-green-500" btext="name" />
        <ul id="2"></ul>
    </div>
</template>