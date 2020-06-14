<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { useActions } from '@u3u/vue-hooks';
import { onMounted } from '@vue/composition-api';

export default {
  setup() {
    const { getLaunches } = useActions('launches', ['getLaunches']);

    onMounted(() => {
      getLaunches();
    });
  },
};
</script>

<style lang="scss">
@import 'styles/main';
</style>
