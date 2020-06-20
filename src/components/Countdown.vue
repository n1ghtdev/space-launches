<template>
  <div class="countdown">
    <div class="item" v-for="item in items" :key="item">
      <div class="item-value">{{ countdownDate[item] }}</div>
      <div class="item-label">{{ item }}</div>
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

<style lang="scss">
.countdown {
  display: flex;
}
.item {
  text-align: center;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
}
.item-value {
  font-size: 32px;
  font-weight: bold;
}
.item-label {
  font-size: 12px;
  text-transform: uppercase;
}
</style>
