<script setup>
import { RouterLink, RouterView } from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { DropdownPlugin } from 'bootstrap-vue';
import { NavbarPlugin } from 'bootstrap-vue';
import Popper from 'vue-popperjs';
import HelloWorld from "@/components/HelloWorld.vue";
import { mergeData } from "vue-functional-data-merge";
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header> -->
  <RouterView />
</template>

<style>
/* @import "@/assets/base.css"; */
@import "@/assets/normalize.css";
@import "@/assets/main.css";
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
@import 'vue-popperjs/dist/vue-popper.css';
</style>

