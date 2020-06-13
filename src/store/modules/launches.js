export default {
  namespaced: true,
  state: {
    loading: false,
    error: '',
    launches: [],
  },
  actions: {
    async getLaunches({ state }) {
      try {
        state.loading = true;
        const response = await fetch(
          'https://launchlibrary.net/1.3/launch/next/9',
        );
        const launches = await response.json();
        state.launches = launches;
      } catch (error) {
        state.error = error.message;
      } finally {
        state.loading = false;
      }
    },
  },
};
