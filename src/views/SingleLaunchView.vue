<template>
  <div class="wrapper" v-if="launch">
    <SingleLaunch :launch="launch" />
  </div>
  <div class="wrapper" v-else-if="loading">Loading...</div>
  <div class="wrapper" v-else>
    Something went wrong
    <router-link to="/" v-slot="{href, navigate}">
      <a :href="href" @click="navigate">go back</a>
    </router-link>
  </div>
</template>
<script>
import { useRouter, useActions, useGetters } from '@u3u/vue-hooks';
import { onMounted, watch, computed, reactive } from '@vue/composition-api';
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
    const state = reactive({ loading: false, error: false });

    async function getLaunch() {
      state.loading = true;
      try {
        await getLaunchById(launchId);
      } catch (error) {
        state.error = error.message;
      } finally {
        state.loading = false;
      }
    }

    onMounted(() => {
      if (!launch.value) {
        getLaunch();
      }
    });

    watch(
      () => state.error,
      (curr, prev) => {
        if (curr !== prev && curr) {
          window.location.href = '/';
        }
      }
    );

    return {
      launch,
      ...state,
    };
  },
};
</script>
<style lang="scss" scoped></style>
