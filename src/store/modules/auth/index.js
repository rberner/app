import * as actions from './actions';
import * as mutations from './mutations';

const state = {
  loggedIn: false,
  loading: false,
  error: null,
};

export default {
  state,
  actions,
  mutations,
};
