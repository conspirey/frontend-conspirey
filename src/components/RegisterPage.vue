<script setup lang="ts">
    import axios, { AxiosResponse } from "axios"
    import data from "../data"
    import router from "../routes/routes"
    import errMSG from "../errorMSG"
    import { ReqMake } from "../functions/request"
import { def } from "@vue/shared"


</script>

<script lang="ts">
type strDataErr = "user" | "pass" | "reg"
export default {
    data() {
        return {
            user: null
        }
    },
    mounted() {
        fetch((location.origin.includes("5")? location.protocol +"//localhost:3100" : location.origin) + "/api/user", { credentials: "include"}).then((res) => {
            
            if(res.status >= 200 && res.status <= 299) {
                console.log(res.status)
                this.$router.push("/")
            }
        })
    },
    methods: {
        async test() {
            ReqMake("http://localhost:3200/auth/register", {})
        },
        async RegBTN() {
            let user = document.getElementById("userR") as HTMLInputElement,
            password = document.getElementById("passR") as HTMLInputElement
        let res1 = fetch((location.origin.includes("5")? location.protocol +"//localhost:3100" : location.origin) +"/auth/register", {
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
                for (const datErr in errL) {
                    errL[(datErr as strDataErr)].textContent = ""
                }
                if(res.status >= 200 && res.status <= 299) {
                    router.push("/chat")
                } else {
                    let errRList = (val.error as string).split("_")
                    let errNum = (errRList[errRList.length - 1]).split("")[0]
                    let ErrText = val.error_message.split(":")[0]
                    console.log(errNum)
                    let eleSp = (err as any)[errNum] as HTMLSpanElement
                    
                    eleSp.textContent = ErrText
                    
                }
            })
            


            // res.json().then((val: any) => {
            //     console.log(val)
            // })
        })

        }




    }
}
</script>
<template>
    <div class="register">
            <a href="/login" class="text-xl">Login</a>
            <div class="login border-2 p-4 rounded-lg">
            <div class="text font-bold text-lg ">
                Register your Conspirey account
            </div>

            <span id="userINVALID" class="text-sm text-red-500 font-bold"></span>
            <br />
            <input id="userR" class="
            lg:text-lg
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
            <!-- <div class="di"></div> -->
            <br />
            <span id="passINVALID" class="text-sm text-red-500 font-bold"></span>
            <br />
            <input id="passR" class="
            lg:text-lg
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
            <button @click="RegBTN" class="mt-4 border-2 border-white rounded-md p-2 hover:drop-shadow-lg" id="btnReg">Register Account</button>
            <br />
            <span id="regINVALID" class="text-sm text-red-500 font-bold"></span>
            <br />
            <div class="war">
                <span class="text-gray-500 text-sm">THERE ARE NO WAYS TO CHANGE PASSWORD</span>
            </div>
 
        </div>
    </div>
</template>