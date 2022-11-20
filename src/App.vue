<script setup lang="ts">
import {RouterView} from 'vue-router';
import Navbar from './components/Navbar.component.vue';
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content}` : `AUTH` }}</template>
  </metainfo>
  <Navbar/>
  <RouterView />

</template>
