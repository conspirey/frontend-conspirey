<script lang="ts">
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuList = document.getElementById('mobile-menu-list');

  mobileMenu?.addEventListener('click', () => {
    (mobileMenuList as any).style.display = mobileMenuList?.style.display === 'none' ? 'block' : 'none';
  });
</script>
<template>
   <nav class="bg-blue-500 py-4 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-10">
  <div class="flex items-center">
    <img class="h-8 w-auto mr-2" src="logo.png" alt="Logo">
    <h1 class="text-white text-lg font-bold">Conspirey</h1>
  </div>
  <div class="flex items-center justify-end">
    <a href="#" class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
    <a href="#" class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
    <a href="#" class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
    <button href="#" class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</button>
  </div>
</nav>


</template>
<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
}

a {
    color: white;
    text-decoration: none;
}

ul {
    list-style: none;
}

.container {
    background-color: black;
}

.row {
    width: 80%;
    margin: auto;
}

.logo {
    font-size: 1.5rem;
}

.navbar {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
}

.navbar .main-menu {
    display: flex;
}

.main-menu li a {
    display: inline-block;
    padding: 10px 20px;
}

li a:hover {
    background-color: blue;
}

.menu-btn {
    display: none;
}

.section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://i.postimg.cc/vZrkVwB5/joe-woods-4-Zaq5x-Y5-M-c-unsplash.jpg) no-repeat center center/cover;
}

.row-content h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    text-align: center;
}

.row-content p {
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.6;
}

@media screen and (max-width: 768px) {
    .main-menu {
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        height: 100%;
        flex-direction: column;
        background-color: #252525;
        transition: 0.5s all ease;
        /* visibility: hidden; */
        display: none;
        align-items: center;
        transform: translateX(-800px);
        padding-top: 60px;
    }

    .main-menu.show {
        transform: translateX(0px);
        transition: 0.5s all ease;
    }

    .main-menu li a {
        margin-bottom: 10px;
        display: block;
    }

    .menu-btn {
        display: block;
        position: absolute;
        color: white;
        top: 10px;
        right: 30px;
        font-size: 2rem;
    }
}</style>