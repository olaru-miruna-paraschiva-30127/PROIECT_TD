<template>
<div v-if="!userStore.getters.isLoggedIn" class="d-grid gap-2 col-6 mx-auto" id="app">
 <router-link to="/" class="navbar-brand"></router-link>
    <LogNew />
  </div>

  <div v-else id="app">
    <nav class="nav" >

      <router-link to="/parrots" class="navbar-brand"></router-link>
      <div class="navbar-nav mr-auto">
      <br>
     <div class="nav">
          <router-link to="/" class="nav">Parrots</router-link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <router-link to="/add" class="nav">Add</router-link>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <router-link to="/" @click="onSubmit" class="nav">Log Out</router-link>

        </div>
        <br>

      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import userStore from '@/stores/user'
import LogNew from '@/components/LogNew.vue'
export default defineComponent({
                 name: 'App',
                 components: { LogNew },
                 setup() {

    const onSubmit = () => {
      userStore.logout()

    }
                   return { userStore, onSubmit }
                 }
               });
</script>
<style>
.nav{
color: #ffffff;
    background-color:#009879;
     display: inline-block;
}
.line{
 display: block;
}
</style>