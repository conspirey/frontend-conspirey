<script setup lang="ts">
    import axios, { AxiosResponse } from "axios"
    import data from "../data"
    import router from "../routes/routes"
    import errMSG from "../errorMSG"
    import { ReqMake } from "../functions/request"
import { def } from "@vue/shared"
    
    async function REGBTN(ev: MouseEvent) {
        let user = document.getElementById("userR") as HTMLInputElement,
            password = document.getElementById("passR") as HTMLInputElement
        // let res1 = fetch(data.url + "auth/register", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         name: user.value,
        //         password: password.value
        //     }),
        //     credentials: "include",
        // }).then((res) => {
        //     if(res.status == 422) {
        //         console.log(10101010)
        //     }
        //     res.json().then((val) => {
        //         console.log(val)
        //     })
        // }).catch((res) => {
        //     res.json().then((val: any) => {
        //         console.log(val)
        //     })
        // })

        fetch(data.url + "cookie", {}).then((res) => { res.text().then((str) => console.log(str)) })
        let res = await axios.post(data.url + "auth/register", {
            name: user.value,
            password: password.value
        })
        let errL = {
            user: document.getElementById("userINVALID") as HTMLSpanElement,
            pass: document.getElementById("passINVALID") as HTMLSpanElement,
            reg: document.getElementById("regINVALID") as HTMLSpanElement,
        }
        let err = {
            "1": errL.user,
            "2": errL.pass,
            "3": errL.reg,
            "4": errL.reg,
        }
        console.log(await res.data)
        // res.then((res: AxiosResponse) => {
        //     if(res.status == 200) {
        //         router.push("/")
        //     } else {
        //         let errRList = (res.data.error as string).split("_")
        //         let errNum = errRList[errRList.length - 1]

        //         let eleSp = (err as any)[errNum] as HTMLSpanElement
        //         eleSp.textContent = res.data.error_message
        // }
        // })
        // res.catch((res) => {
        //     console.log(res.data)
        // })
}

</script>

<script lang="ts">
export default {
    data() {
        return {
            user: null
        }
    },
    methods: {
        async test() {
            ReqMake("http://localhost:3200/auth/register", {})
        },
        async RegBTN() {
            let user = document.getElementById("userR") as HTMLInputElement,
            password = document.getElementById("passR") as HTMLInputElement
        let res1 = fetch("http://localhost:3200/auth/register", {
            method: "POST",
            body: JSON.stringify({
                name: user.value,
                password: password.value
            }),
            credentials: "include",
        }).then((res) => {
            if(res.status == 422) {
            }
            res.json().then((val) => {
                console.log(val)
            })
        }).catch((res) => {
            // res.json().then((val: any) => {
            //     console.log(val)
            // })
        })

        },
        async Rb() {

            fetch("http://localhost:3200/test/", {
                method: "POST",
                credentials: "include",
                
            }).then((res) => {
                res.json().then((js) => {
                    this.user = js.name
                })
            })
            
            
        },
        async RG() {

            fetch("http://localhost:3200/test/", {
                method: "GET",
                credentials: "include",
    
            }).then((res) => {
                res.json().then((js) => {
                this.user = js.name
            })
        })


}
    }
}
</script>
<template>
    <div class="register">
        <button @click="RegBTN">test</button>
        USERNAME: {{ user }}
        <button @click="Rb">test text POST</button>
        <button @click="RG">test text GET</button>
            <div class="login border-2 p-4 rounded-lg">
            <div class="text">
                Register your Conspirey account
            </div>

            <br />
            <span id="userINVALID" class="text-sm text-red-500 font-bold"></span>
            <input id="userR" class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " type="text"  placeholder="Enter username..." />
            <span class="text-gray-500 text-sm">username has to be from 3-16 characters long, <br> can contain numbers, latin letters, _ symbol</span>
            <div class="di my-5"></div>
            <span id="passINVALID" class="text-sm text-red-500 font-bold"></span>
            <input id="passR" class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " type="password" placeholder="Enter password..." />
            <span class="text-gray-500 text-sm">password has to be from 8-32 characters</span> <br>
            <button @click="REGBTN" class="mt-4 border-2 border-white rounded-md p-2 hover:drop-shadow-lg" id="btnReg">Register Account</button>
            <span id="regINVALID" class="text-sm text-red-500 font-bold"></span>
            <div class="war">
                <span class="text-gray-500 text-sm">THERE ARE NO WAYS TO CHANGE PASSWORD</span>
            </div>
 
        </div>
    </div>
</template>