<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import * as ioS from 'socket.io-client'
import data from '../data';
import UserCard from './elements/user.vue';
import { User, Message } from "./type"


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
      serverTimeron: false,
      user: { id: "", admin: false, name: "" },
      io: io,
    }
  },
  mounted() {

    console.log((location.origin.includes("5") ? location.protocol + "//localhost:3100" : location.origin) + "/api/user")
    fetch((location.origin.includes("5") ? location.protocol + "//localhost:3100" : location.origin) + "/api/user", { credentials: "include" }).then(res => {
      if (!(res.status >= 200 && res.status <= 299)) {
        this.$router.push("/login");
      }
    }).catch((reason) => {
      this.$router.push("/login");
    });
    this.getUserData()
    const socket = this.io.connect((location.origin.includes("5") ? location.protocol + "//localhost:3100" : location.origin) + "/"/*.replace("https://", "").replace("http://","")/ + "/socket.io/"*/, { transports: ["websocket"], withCredentials: true })
    this.socket = socket
    socket.on("connect_error", (err: any) => {
      console.log(`connect_error due to ${err.message}`);
    });
    socket.on("echo", (data: any) => {
      const field = document.getElementById("echoinp") as HTMLInputElement
      const list = document.getElementById("echolist") as HTMLUListElement
      const text: string = data.text;
      const id: string = data.user.id;
      const name: string = data.user.name;
      console.log(data)
      this.messages.push({ name: name, text: text, id: id, type: data.type })
      // let ele = document.createElement("li")
      // list.appendChild(ele)

      // ele.textContent = `${name}: ${text}`;

    })
  },
  methods: {
    onMenuChange() {
      const sel = (document.getElementById("selmenu") as HTMLSelectElement)
      if (sel.value == "server_timer") this.serverTimeron = true
      else this.serverTimeron = false
    },
    getUserData() {
      fetch((location.origin.includes("5") ? location.protocol + "//localhost:3100" : location.origin) + "/api/user", {
        method: "GET",
        credentials: "include",
      }).then((res) => {
        res.json().then((js) => {
          this.user = js
        }).catch((err) => {
          console.log(err)
        })
      })

    },

    async btnOnClick1(ev: MouseEvent) {
      let endpoint: string = `/api/message?type=`
      if (this.user.admin) {
        const type = (document.getElementById("selmenu") as HTMLSelectElement).value
        endpoint += type
      } else {
        endpoint += "basic"
      }
      const field = document.getElementById("echoinp") as HTMLInputElement
        const body = {
          text: field?.value,
          server_message: {}
        }
        if(this.user.admin) {
          if(this.serverTimeron) {
            const delay = (document.getElementById("delay") as HTMLInputElement).value
            const timer = (document.getElementById("timer") as HTMLInputElement).value
            body.server_message = {
              delay: parseInt(delay),
              timer: parseInt(timer)
            }
          }
        }
      const req = fetch((location.origin.includes("5") ? location.protocol + "//localhost:3100" : location.origin) + endpoint, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(body),
      })
      field.value = ""
    },
    async EnterKey1(ev: KeyboardEvent) {
      if (ev.key == "Enter") {
        let endpoint: string = `/api/message?type=`
        if (this.user.admin) {
          const type = (document.getElementById("selmenu") as HTMLSelectElement).value
          endpoint += type
        } else {
          endpoint += "basic"
        }
        const field = document.getElementById("echoinp") as HTMLInputElement
        const body = {
          text: field?.value,
          server_message: {}
        }
        if(this.user.admin) {
          if(this.serverTimeron) {
            const delay = (document.getElementById("delay") as HTMLInputElement).value
            const timer = (document.getElementById("timer") as HTMLInputElement).value
            body.server_message = {
              delay: parseInt(delay),
              timer: parseInt(timer)
            }
          }
        }
        
        const req = fetch((location.origin.includes("5") ? location.protocol + "//localhost:3100" : location.origin) + endpoint, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(body),
        })
        field.value = ""
      }
    },




  },
}
</script>

<template>
  <div class="flex flex-wrap justify-center items-center h-[60vh]">
    <br />
    <div class="actions grid w-[80vw] md:w-[40vw]">
      <button v-on:click="btnOnClick1" id="echobtn">echo text</button>
      <br>
      <select id="selmenu" @change="onMenuChange()" v-if="user.admin">
        <option value="basic">Basic</option>
        <option value="server">Server</option>
        <option value="server_timer">ServerTimer</option>
      </select>
      <br />
      <div v-if="serverTimeron" class="servertimer grid">
        <div class="timerdi" id="timerdi">
          Timer <input type="number" id="timer" min="1" max="100">
        </div>
        
        <div class="delaydi">
          Delay: <input type="number" min="0" max="10000" id="delay">
        </div>

      </div>
      <input type="text" value="hello" id="echoinp" v-on:keyup="EnterKey1" />
    </div>

    <br />
    <div class="par grid place-items-center">
      <div class="my-5 border-4 rounded-md md:w-[60vw] w-[80vw]">
        <h3>Chat with other conspireys</h3>
        <hr />
        <div class="overflow-y-scroll h-[20rem] ">


          <div class="ldi text-left m-2 ml-4">
            <ul>
              <li v-for="{ name, text, id, type } in messages" class="">
                <div v-if="type == 'basic'">
                  <UserCard :uid="id" bstyle="text-green-500" :btext="name" />: {{ text }}
                </div>
                <div v-if="type == 'server'" class="server text-red-600">
                  Server: {{ text }}
                </div>
              </li>
            </ul>
            <ul id="echolist"></ul>
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

