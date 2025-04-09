<script setup lang="ts">
import RobotImage from "@/assets/robot.png";
import { useUserStore } from "@/stores/user";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const userStore = useUserStore();

const name = ref<string>("");
const email = ref<string>("");

const loading = ref<boolean>(false);
const error = ref<string>("");

const createUser = async () => {
  if (!name.value || !email.value) {
    error.value = "Name and email are required";
    return;
  }
  loading.value = true;
  error.value = "";

  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/register-user`,
      {
        name: name.value,
        email: email.value,
      }
    );
    userStore.setUser({
      userId: data.userId,
      name: data.name,
    });
    router.push("/chat");
  } catch (e) {
    error.value = "Something went wrong. Please try again later.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div
    class="h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
  >
    <div class="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
      <img :src="RobotImage" alt="logo" class="mx-auto mb-4 w-24 h-24" />

      <h1 class="text-2xl font-semibold mb-4 text-center">
        Welcome to Chat AI
      </h1>
      <input
        type="text"
        v-model="name"
        class="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg focus:outline-none"
        placeholder="Name"
      />
      <input
        type="email"
        v-model="email"
        class="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg focus:outline-none"
        placeholder="Email"
      />
      <button
        class="w-full p-2 bg-blue-500 rounded-lg"
        :disabled="loading"
        @click="createUser"
      >
        {{ loading ? "Logging in..." : "Start Chat" }}
      </button>
      <p v-if="error" class="text-red-400 text-center mt-2">{{ error }}</p>
    </div>
  </div>
</template>
