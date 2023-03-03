
<script lang="ts">
export default {
  data() {
    return {
      username: "user"
    }
  },
  async mounted() {
    let button = document.getElementById("username");

    let data = await fetch("http://localhost:3100/api/user", {credentials: "include"})
    let json = await data.json()
    this.username = json.name as string
  },
  methods: {
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
<template>
  <div class="dropdown">
    <button class="dropbtn p-[5rem]" @mouseover="hoverBTN" id="username">{{ username }}</button>
    <div class="dropdown-content bg-gray-700 rounded-lg">
      <p>Hidden content here</p>
    </div>
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
}

/* Style the dropdown content */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

}

/* Show the dropdown content on hover */
.dropdown:hover .dropdown-content {
  display: block;
}


</style>