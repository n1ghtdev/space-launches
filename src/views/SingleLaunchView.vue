<template>
  <div class="wrapper" v-if="launch">
    <SingleLaunch :launch="launch" />
  </div>
  <div class="wrapper" v-else>Not Found</div>
</template>
<script>
import { useRouter, useStore, useActions, useGetters } from '@u3u/vue-hooks';
import { computed, ref } from '@vue/composition-api';
import SingleLaunch from '../components/SingleLaunch.vue';

export default {
  components: {
    SingleLaunch,
  },
  setup() {
    const { route } = useRouter();
    const launchId = route.value.params.id;
    const { getById } = useGetters('launches', ['getById']);
    return {
      launch: computed(() => getById.value(launchId)),
    };
  },
};
</script>
<style lang="scss" scoped></style>
