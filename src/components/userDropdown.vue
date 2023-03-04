<script lang="ts" setup>

</script>
<script lang="ts">
export default {
  data() {
    return {
      username: "user",
      logged: false,
      user: {}
    }
  },
  async mounted() {
    let button = document.getElementById("username");

    let data = await fetch((location.origin.includes("5")? location.protocol +"//localhost:3100" : location.origin) + "/api/user", {credentials: "include"})
    let json = await data.json()
    console.log(!(data.status >= 400 && data.status <= 499))
    if(!(data.status >= 400 && data.status <= 499)) this.username = json.name; this.logged = true;
  },
  methods: {
    getUserData() {
            fetch((location.origin.includes("5")? location.protocol +"//localhost:3100" : location.origin) + "/api/user", {
                method: "GET",
                credentials: "include",
            }).then((res) => {
                res.json().then((js) => {
                    this.user = js
                    console.log(js)
                    if(res.status >= 200 && res.status <= 299) {
                        this.logged = true
                    }
                }).catch((err) => {
                    console.log(err)
                })
            })
            
        },
    getLogged(): boolean {
      return localStorage.getItem("logged") == "true"
    },
    setLogged(log: string) {
      localStorage.setItem("logged", log)
    },
    Logout() {
            fetch((location.origin.includes("5")? location.protocol +"//localhost:3100" : location.origin) + "/auth/logout", {
                method: "POST",
                credentials: "include",
            }).then((res) => {
                if(res.status >= 200 && res.status <= 299) {
                    this.logged = false
                }
            })
            if(this.getLogged()) this.$router.push("/login")
        },
    hoverBTN() {
      this.setLengthContent()
    },
    setLengthContent() {

      let button = document.getElementById("username");

      // Get the button text width
      let buttonTextWidth = button?.offsetWidth;

      // Set the dropdown content width based on the button text width
      let dropdownContent = document.querySelector(".dropdown-content");
      (dropdownContent as any).style.width = buttonTextWidth + "px";
    }
  }
}
</script>
<template >
  <div class="dropdown" v-if="logged">
    <button class="dropbtn p-[5rem]" @mouseover="hoverBTN" id="username">{{ username }}</button>
    <ul class="dropdown-content bg-gray-700 rounded-md p-2">
      <li class=""><button v-on:click="Logout" class="p-1 px-[1rem] border-[1px]">Logout</button></li>

    </ul>
    <!-- <div class="dropdown-content bg-gray-700 rounded-md p-2">
      <button class="px-2">Logout</button>
    </div> -->
  </div>



</template>
<style>

/* Style the button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: auto;
  min-width: 6rem;
}

/* Style the dropdown content */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 6rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

}

/* Show the dropdown content on hover */
.dropdown:hover .dropdown-content {
  display: block;
}


</style>