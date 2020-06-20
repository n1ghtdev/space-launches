<template>
  <main class="launches" v-if="launches.length > 0">
    <Launch v-for="launch in launches" :key="launch.id" :launch="launch" />
  </main>
  <main class="launches" v-else></main>
</template>
<script>
import { useActions, useGetters } from '@u3u/vue-hooks';
import { onMounted, computed } from '@vue/composition-api';
import Launch from '../components/Launch.vue';

export default {
  name: 'Launches',
  components: {
    Launch,
  },
  setup() {
    const { getAll } = useGetters('launches', ['getAll']);
    const { getLaunches } = useActions('launches', ['getLaunches']);

    onMounted(() => {
      getLaunches();
    });

    return {
      launches: computed(() => getAll.value),
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
