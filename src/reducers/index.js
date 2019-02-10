import {combineReducers} from 'redux';
import {
  STORE_JOBS, 
  SELECTED_JOB, 
  API_START, 
  API_END, 
  FETCH_JOBS_LIST
} from '../utils/constants';

export const INITIAL_STATE = {
  items: [],
  selectedJob: {},
  isFetchingData: false
};

export const jobsList = (state =  INITIAL_STATE, action) => {
  switch (action.type) {
    case API_START:
      if (action.payload === FETCH_JOBS_LIST) {
        return Object.assign({}, state, {
          isFetchingData: true
        });
      }
    break;
    case API_END:
      if (action.payload === FETCH_JOBS_LIST) {
        return Object.assign({}, state, {
          isFetchingData: false
        });
      }
    break;
    case STORE_JOBS:
      return Object.assign({}, state, {
        items: action.jobs
      })
    case SELECTED_JOB:
      return Object.assign({}, state, {
        selectedJob: action.selectedJob
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  jobsList
});

export default rootReducer;