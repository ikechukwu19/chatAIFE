<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const emit = defineEmits(["send"]);
const message = ref<string>("");

const sendMessage = () => {
  if (!message.value.trim()) return;
  emit("send", message.value);
  message.value = "";
};
</script>

<template>
  <div class="p-4 bg-gray-800 flex">
    <input
      type="text"
      class="flex-1 p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
      v-model="message"
      placeholder="Send a message..."
      @keyup.enter="sendMessage"
    />
    <button @click="sendMessage" class="py-2 px-4 bg-blue-500 rounded-lg">
      Send
    </button>
  </div>
</template>
