// Import the createStore function from Vuex
import { createStore } from 'vuex';

// Create and export the Vuex store
export default createStore({
  // The state is where the application's data is stored
  state: {
    // The 'user' state property holds the user data retrieved from the local storage,
    // or it is set to null if there's no user data in the local storage.
    user: JSON.parse(localStorage.getItem('user')) || null,
  },

  // Mutations are functions that modify the state.
  mutations: {
    // The 'SET_USER' mutation sets the 'user' state property to the provided user object.
    SET_USER(state, user) {
      state.user = user;
    },
  },

  // Actions are functions that can call mutations to modify the state.
  actions: {
    // The 'setUser' action commits the 'SET_USER' mutation with the provided user object as the payload.
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
  },

  // Getters are functions that retrieve data from the state.
  getters: {
    // The 'user' getter returns the current user object from the state.
    user(state) {
      return state.user;
    },
  },
});
