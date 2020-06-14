<template>
  <main class="launches">
    <Launch v-for="launch in launches" :key="launch.id" :launch="launch" />
  </main>
</template>
<script>
import { useState } from '@u3u/vue-hooks';
import Launch from '../components/Launch.vue';

export default {
  name: 'Launches',
  components: {
    Launch,
  },
  setup() {
    const { launches, loading, error } = useState('launches', [
      'launches',
      'loading',
      'error',
    ]);

    return {
      launches,
      loading,
      error,
    };
  },
};
</script>

<style lang="scss">
.launches {
  display: flex;
  flex-wrap: wrap;
}
</style>
