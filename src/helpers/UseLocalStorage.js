import { ref } from "vue";

export function useLocalStorage(key, initialValue) {
  const state = ref(initialValue);

  try {
    const raw = localStorage.getItem(key);
    if (raw !== null) state.value = JSON.parse(raw);
  } catch {}

  function save(next) {
    state.value = next;
    try {
      localStorage.setItem(key, JSON.stringify(state.value));
    } catch {}
  }

  return { state, save };
}
