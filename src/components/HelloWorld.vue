<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import io from 'socket.io-client'
import data from '../data';

const socket = io.connect('ws://localhost:3200', {transports: ["websocket"],   withCredentials: true})
// socket.on('echo', (data: any) => {
//   console.log(data);
// });
const btn = document.getElementById("echobtn") as HTMLButtonElement

function btnOnclick(ev: MouseEvent) {
  const field = document.getElementById("echoinp") as HTMLInputElement
  const list = document.getElementById("echolist") as HTMLUListElement
  socket.emit("echo", { text: field?.value }, function(response: any) {
    // const text: string = response.text;
    // let ele = document.createElement("li")
    // list.appendChild(ele)
    // ele.textContent = text;
  
  })
}
socket.on("echo", (data: any) => {
  const field = document.getElementById("echoinp") as HTMLInputElement
  const list = document.getElementById("echolist") as HTMLUListElement
  const text: string = data.text;
  let ele = document.createElement("li")
  list.appendChild(ele)
  ele.textContent = text;
  
})

const count = ref(0)

</script>
<script lang="ts">
export default {
  mounted() {
    fetch(data.url + "api/user", { credentials: "include"}).then(res => {
      if(!(res.status >= 200 && res.status <= 299)) {
        this.$router.push("/login")
      }
    })
  }
}
</script>

<template>
  <div>
    <br />
    <button v-on:click="btnOnclick"  id="echobtn">echo text</button>
    <br />
    <input type="text" value="hello" id="echoinp" />
    <br />
    <div class="d h-64 my-5 w-72 border-4 rounded-md">
      <h3>Chat with other conspireys</h3>
    <hr />
    <div class=" overflow-y-scroll h-[13.94rem] ">


      <div class="ldi">
        <ul  id="echolist"> </ul>
      </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}


</style>

