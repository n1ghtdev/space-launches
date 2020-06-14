<template>
  <div class="launch">
    <header class="header">
      <div class="date">{{ launch.windowstart }}</div>
      <Countdown :date="launch.windowstart" />
    </header>
    <article class="content">
      <h1 class="title">{{ launch.name }}</h1>
      <div v-for="pad in launch.location.pads" class="pad" :key="pad.id">{{ pad.name }}</div>
      <ul class="missions">
        <li v-for="mission in launch.missions" :key="mission.id">
          <div>{{ mission.name }}</div>
          <p>{{ mission.description }}</p>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import Countdown from './Countdown.vue';

export default {
  components: {
    Countdown,
  },
  props: {
    launch: Object,
  },
};
</script>

<style lang="scss"></style>
