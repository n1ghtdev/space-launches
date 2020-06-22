<template>
  <div class="wrapper" v-if="loading">Loading...</div>
  <div class="wrapper" v-else-if="launch">
    <SingleLaunch :launch="launch" />
  </div>
</template>
<script>
import { useRouter, useActions, useGetters } from '@u3u/vue-hooks';
import { onMounted, watch, computed, ref } from '@vue/composition-api';
import SingleLaunch from '../components/SingleLaunch.vue';

export default {
  components: {
    SingleLaunch,
  },
  setup() {
    const { route } = useRouter();
    const launchId = route.value.params.id;
    const { getLaunchById } = useActions('launches', ['getLaunchById']);
    const { getById } = useGetters('launches', ['getById']);
    const launch = computed(() => getById.value(launchId));

    const loading = ref(false);
    const error = ref(false);

    async function getLaunch() {
      loading.value = true;
      try {
        await getLaunchById(launchId);
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    }

    onMounted(() => {
      if (!launch.value) {
        getLaunch();
      }
    });

    watch(
      () => error.value,
      (curr, prev) => {
        if (curr !== prev && curr) {
          window.location.href = '/';
        }
      }
    );

    return {
      launch,
      loading,
    };
  },
};
</script>
<style lang="scss" scoped></style>
