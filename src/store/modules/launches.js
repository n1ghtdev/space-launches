import { fetchLaunches, fetchLaunchById } from '../../api';

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
    // eslint-disable-next-line consistent-return
    async getLaunchById(store, id) {
      const data = await fetchLaunchById(id);
      store.commit('setLaunch', data.launches.shift());
      return data;
    },
    async getLaunches(store) {
      const data = await fetchLaunches();
      store.commit('setLaunches', data.launches);
      return data;
    },
  },
};
