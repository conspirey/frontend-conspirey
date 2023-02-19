<script setup lang="ts">
import { defineComponent, ref} from 'vue'
import * as ioS from 'socket.io-client'
import data from '../data';
import UserCard from './elements/usermsg.vue';
import {User, Message} from "./type"


// socket.on('echo', (data: any) => {
//   console.log(data);
// });
const btn = document.getElementById("echobtn") as HTMLButtonElement

// function btnOnclick1(ev: MouseEvent) {
//   const field = document.getElementById("echoinp") as HTMLInputElement
//   socket.emit("echo", { text: field?.value }, function(response: any) {
//   })
// }

// function EnterKey(ev: KeyboardEvent) {
//   console.log(ev.key)
//   if(ev.key == "Enter") {
//   const field = document.getElementById("echoinp") as HTMLInputElement
//   socket.emit("echo", { text: field?.value }, function(response: any) {
//   })
// }
// }

// function EnterKey(ev: KeyboardEvent) {
//   console.log(ev.key)
//   if(ev.key == "Enter") {
//   const field = document.getElementById("echoinp") as HTMLInputElement
//   socket.emit("echo", { text: field?.value }, function(response: any) {
//   })
// }
// }
// socket.on("echo", (data: any) => {
//   const field = document.getElementById("echoinp") as HTMLInputElement
//   const list = document.getElementById("echolist") as HTMLUListElement
//   const text: string = data.text;
//   const name: string = data.user.name;
//   let ele = document.createElement("li")
//   list.appendChild(ele)
  
//   ele.textContent = `${name}: ${text}`;
  
// })

const count = ref(0)

</script>
<script lang="ts">

export default {
  data() {
    const io = ioS as any
    const an: any = null
    return {
      messages: [] as any,
      socket: null as any,
      io: io,
    }
  },
    mounted() {
        fetch(data.url + "api/user", { credentials: "include" }).then(res => {
            if (!(res.status >= 200 && res.status <= 299)) {
                this.$router.push("/login");
            }
        }).catch((reason) => {
            this.$router.push("/login");
        });
        let url: string = data.url
        url = url.slice(0, -1); 
        console.log( url)
        const socket = this.io.connect(url + "socket/"/*.replace("https://", "").replace("http://","")/ + "/socket.io/"*/, {transports: ["websocket"],   withCredentials: true})
        this.socket = socket
        socket.on("connect_error", (err: any) => {
          console.log(`connect_error due to ${err.message}`);
        });
        socket.on("echo", (data: any) => {
          const field = document.getElementById("echoinp") as HTMLInputElement
          const list = document.getElementById("echolist") as HTMLUListElement
          const text: string = data.text;
          const name: string = data.user.name;
          this.messages.push({name: name, text: text})
          // let ele = document.createElement("li")
          // list.appendChild(ele)
  
          // ele.textContent = `${name}: ${text}`;
  
          })
    },
    methods: {
      btnOnclick(ev: MouseEvent) {
        const field = document.getElementById("echoinp") as HTMLInputElement
        this.socket.emit("echo", { text: field?.value }, function(response: any) {})
      },
      EnterKey(ev: KeyboardEvent) {
        if(ev.key == "Enter") {
          const field = document.getElementById("echoinp") as HTMLInputElement
          this.socket.emit("echo", { text: field?.value }, function(response: any) {})
        }
      }


    },
}
</script>

<template>
  <div>
    <br />
    <button v-on:click="btnOnclick"  id="echobtn">echo text</button>
    <br />
    <input type="text" value="hello" id="echoinp" v-on:keyup="EnterKey" />
    <br />
    <div class="par grid place-items-center">
    <div class="d my-5 w-[25rem] sm:w-[35rem] lg:w-[50rem] md:w-[40rem] border-4 rounded-md">
      <h3>Chat with other conspireys</h3>
    <hr />
    <div class="overflow-y-scroll h-[20rem] ">


      <div class="ldi text-left m-2 ml-4">
        <ul v-for="{name, text} in messages">
        <li>{{ name }}: {{ text }}</li>
        </ul>
        <ul  id="echolist"></ul>
      </div>

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

