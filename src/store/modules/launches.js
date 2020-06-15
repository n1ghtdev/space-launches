export default {
  namespaced: true,
  state: {
    launches: [],
  },
  mutations: {
    setLaunches(state, launches) {
      state.launches = [...state.launches, ...launches];
    },
    setLaunch(state, launch) {
      state.launches.push(launch);
    },
  },
  actions: {
    async getLaunchById(store, id) {
      const response = await fetch(
        `https://launchlibrary.net/1.3/launch/${id}`
      );
      const json = await response.json();
      store.commit('setLaunches', json.launches);
    },
    async getLaunches(store) {
      const response = await fetch(
        'https://launchlibrary.net/1.3/launch/next/9'
      );
      const json = await response.json();
      store.commit('setLaunches', json.launches);
    },
  },
  getters: {
    getById: state => id =>
      state.launches.find(launch => launch.id === Number(id)),
  },
};
