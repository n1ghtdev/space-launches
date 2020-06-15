<template>
  <div class="wrapper" v-if="launch">
    <SingleLaunch :launch="launch" />
  </div>
  <div class="wrapper" v-else>Not Found</div>
</template>
<script>
import { useRouter, useActions, useGetters } from '@u3u/vue-hooks';
import { computed } from '@vue/composition-api';
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

    if (!launch.value) {
      getLaunchById(launchId);
    }

    return {
      launch,
    };
  },
};
</script>
<style lang="scss" scoped></style>
