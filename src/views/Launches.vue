<template>
  <main class="launches">
    <Launch v-for="launch in launches" :key="launch.id" :launch="launch" />
  </main>
</template>
<script>
import { useState, useActions } from '@u3u/vue-hooks';
import { onMounted } from '@vue/composition-api';
import Launch from '../components/Launch.vue';

export default {
  name: 'Launches',
  components: {
    Launch,
  },
  setup() {
    const { getLaunches } = useActions('launches', ['getLaunches']);
    const { launches, loading, error } = useState('launches', [
      'launches',
      'loading',
      'error',
    ]);

    onMounted(() => {
      getLaunches();
    });

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
