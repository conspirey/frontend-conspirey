<script lang="ts" setup>
import UserCard from './user.vue';
defineProps({
    bstyle: String,
    btext: String,
    msg: String,
})
</script>
<script lang="ts">
export default {
    name: "User Card for live chatting",
}
</script>

<template>
    <div class="card">
        <UserCard :uid="'16021120989794304'" :bstyle="bstyle" :btext="btext" id="cardu"></UserCard>: {{ msg }}
    </div>
</template>