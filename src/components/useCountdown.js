import { onMounted, onUnmounted, ref } from '@vue/composition-api';

export default function useCountdown(date) {
  const delay = 1000;
  const countdown = ref(0);
  let interval;

  onMounted(() => {
    interval = window.setInterval(() => {
      const now = new Date();
      const distance = date - now;

      if (distance < 0) {
        window.clearInterval(interval);
        countdown.value = 0;
      }

      countdown.value = distance;
    }, delay);
  });

  onUnmounted(() => {
    window.clearInterval(interval);
  });

  return countdown;
}
