<script setup lang="ts">
import { useRoute } from "vue-router";
const { params } = useRoute();
</script>

<template>
  <h1>User View: {{ params }}</h1>
</template>
