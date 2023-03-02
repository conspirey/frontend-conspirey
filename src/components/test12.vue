<script>
// Get the button element
window.onload = function() {
  // Get the button element
  var button = document.getElementById("username");

  // Get the button text width
  var buttonTextWidth = button.offsetWidth;

  // Set the dropdown content width based on the button text width
  var dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.style.width = buttonTextWidth + "px";
};
</script>
<template>
  <div class="dropdown">
    <button class="dropbtn" id="username">Username</button>
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
  //background-color: #f9f9f9;
  min-width: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

}

/* Show the dropdown content on hover */
.dropdown:hover .dropdown-content {
  display: block;
}


</style>