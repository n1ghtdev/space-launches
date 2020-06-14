<template>
  <div class="countdown">
    <div v-for="item in items" :key="item">
      <div class>{{ countdownDate[item] }}</div>
      <div class>{{ item }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';
import useCountdown from './useCountdown';
import { getReadableDate } from '../utils/getReadableDate';

export default {
  name: 'Countdown',
  props: ['date'],
  setup(props) {
    const items = ['days', 'hours', 'minutes', 'seconds'];
    const countdown = useCountdown(new Date(props.date));
    const countdownDate = computed(() => getReadableDate(countdown.value));

    return {
      items,
      countdownDate,
    };
  },
};
</script>

<style lang="scss"></style>
