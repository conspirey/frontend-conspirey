<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import io from 'socket.io-client'

const socket = io.connect('ws://localhost:8080', {transports: ["websocket"]})
// socket.on('echo', (data: any) => {
//   console.log(data);
// });
const btn = document.getElementById("echobtn") as HTMLButtonElement

function btnOnclick(ev: MouseEvent) {
  const field = document.getElementById("echoinp") as HTMLInputElement
  const list = document.getElementById("echolist") as HTMLUListElement
  socket.emit("echo", { text: field?.value }, function(response: any) {
    const text: string = response.text;
    let ele = document.createElement("li")
    list.appendChild(ele)
    ele.textContent = text;
  
  })
}

defineProps<{ msg: string }>()

const count = ref(0)

</script>

<template>
  <h1>{{ msg }}</h1>
  <br />
  <button v-on:click="btnOnclick"  id="echobtn">echo text</button>
  <br />
  <input type="text" value="hello" id="echoinp" />
  <br />
  <span>Echoed messages: </span>
  <div class="overflow-y-scroll h-32 my-5 w-96">

  
  <ul  id="echolist">
    
  </ul>
</div>
    
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

 @import url("../styles/tail.css");

</style>
