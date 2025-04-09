import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "user",
  () => {
    const userId = ref<null | string>();
    const name = ref<null | string>();
    function setUser(data: { userId: string; name: string }) {
      userId.value = data.userId;
      name.value = data.name;
    }
    function logOut() {
      userId.value = null;
      name.value = null;
    }

    return { userId, name, setUser, logOut };
  },
  {
    persist: true,
  }
);
