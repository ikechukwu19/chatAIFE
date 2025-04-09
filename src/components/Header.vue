<script setup lang="ts">
import RobotImage from "@/assets/robot.png";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useUserStore();

const logout = () => {
  store.logOut();
  router.push("/");
};
</script>

<template>
  <div
    class="py-4 px-6 bg-gray-800 shadow-md flex items-center justify-between"
  >
    <img :src="RobotImage" alt="chat ai" class="w-8 h-8" />
    <h1 class="text-xl font-semibold">Chat AI</h1>
    <button @click="logout" class="text-gray-400 hover:text-white">
      Logout
    </button>
  </div>
</template>
