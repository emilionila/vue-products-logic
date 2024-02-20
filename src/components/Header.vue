<template>
  <header>
    <div class="container header">
      <div class="area_logo_header">
        <router-link to="/" class="logo-link">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/640px-Logo_NIKE.svg.png" alt="logo" class="logo" />
        </router-link>
      </div>
      <nav class="area_nav_header">
        <ul class="list_nav_header">
          <li>
            <router-link to="/add" class="nav-link">Create</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Header',
})
</script>

<style scoped>
li {
  list-style: none;
}

.container {
  padding: 0 40px;
  margin: 0 auto;
}

.header {
  color: #fff;
  background: #dddddd;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.area_logo_header .logo {
  display: block;
}

.list_nav_header {
  display: flex;
  gap: 20px;
  align-items: center;
}

.logo-link {
  max-width: 100%
}

.logo {
  height: 40px;
}

.nav-link {
  font-family: "Montserrat", sans-serif;
  color: black;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
