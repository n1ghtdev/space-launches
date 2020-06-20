export default {
  namespaced: true,
  state: {
    launches: {},
    byId: [],
  },
  getters: {
    getAll: state => state.byId.map(id => state.launches[id]),
    getById: state => id => state.launches[id],
  },
  mutations: {
    setLaunches(state, launches) {
      for (const launch of launches) {
        state.launches[launch.id] = launch;
        if (state.byId.indexOf(launch.id) === -1) {
          state.byId.push(launch.id);
        }
      }
    },
    setLaunch(state, launch) {
      state.launches = { ...state.launches, [launch.id]: launch };
      state.byId.push(launch.id);
    },
  },
  actions: {
    async getLaunchById(store, id) {
      if (!store.state.launches[id]) {
        const response = await fetch(
          `https://launchlibrary.net/1.3/launch/${id}`
        );
        const json = await response.json();
        store.commit('setLaunch', json.launches.shift());
      }
    },
    async getLaunches(store) {
      const response = await fetch(
        'https://launchlibrary.net/1.3/launch/next/9'
      );
      const json = await response.json();
      store.commit('setLaunches', json.launches);
    },
  },
};
