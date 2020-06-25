<template>
  <main class="launches" v-if="loading"></main>
  <main class="launches" v-else-if="!loading && !error">
    <Launch v-for="launch in launches" :key="launch.id" :launch="launch" />
  </main>
</template>
<script>
import { useActions, useGetters } from '@u3u/vue-hooks';
import { onMounted, computed, ref } from '@vue/composition-api';
import Launch from '../components/Launch.vue';

export default {
  name: 'Launches',
  components: {
    Launch,
  },
  setup() {
    const { getAll } = useGetters('launches', ['getAll']);
    const { getLaunches } = useActions('launches', ['getLaunches']);

    const loading = ref(false);
    const error = ref(false);

    async function loadLaunches() {
      loading.value = true;
      try {
        await getLaunches();
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    }

    onMounted(() => {
      loadLaunches();
    });

    return {
      launches: computed(() => getAll.value),
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
