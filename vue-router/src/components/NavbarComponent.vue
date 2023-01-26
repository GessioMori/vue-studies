<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { MenuIcon, XCircleIcon } from "lucide-vue-next";

const isMenuOpen = ref(false);

const route = useRoute();

console.log(route.fullPath);

const getMenuClass = () => {
  if (isMenuOpen.value) {
    return "absolute top-20 overflow-auto w-full justify-center z-2";
  }
  return "p-4 hidden w-full md:block md:w-auto";
};

const getListClass = () => {
  if (isMenuOpen.value) {
    return "flex flex-col p-24 h-[calc(100vh-theme(space.20))] justify-around bg-neutral-900 text-2xl whitespace-nowrap";
  }
  return "flex space-x-8 items-center";
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const onClickLink = () => {
  isMenuOpen.value = false;
};

const getRandom = () => {
  const id = Math.floor(Math.random() * 1000);
  return `/user/${id}`;
};

const activeClass = "underline underline-offset-4";
</script>

<template>
  <nav class="flex justify-between items-center h-20">
    <span class="font-bold text-xl mx-4">Vue Router</span>
    <div class="inline-flex md:hidden gap-4">
      <button @click="toggleMenu()" class="mx-4">
        <XCircleIcon v-if="isMenuOpen" :size="32" />
        <MenuIcon v-else :size="32" />
      </button>
    </div>
    <div :class="getMenuClass()">
      <ul :class="getListClass()">
        <li className="flex justify-center">
          <RouterLink to="/1" :activeClass="activeClass" @click="onClickLink()"
            >Link 1</RouterLink
          >
        </li>
        <li className="flex justify-center">
          <RouterLink to="/2" :activeClass="activeClass" @click="onClickLink()"
            >Link 2</RouterLink
          >
        </li>
        <li className="flex justify-center">
          <RouterLink to="/3" :activeClass="activeClass" @click="onClickLink()"
            >Link 3</RouterLink
          >
        </li>
        <li className="flex justify-center">
          <RouterLink
            :to="getRandom()"
            :activeClass="activeClass"
            @click="onClickLink()"
            >User</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
