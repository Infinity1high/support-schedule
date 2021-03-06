import * as actions from './actions.js';
import {combineReducers} from 'redux';

const initState = {
  schedule: null,
  people: [],
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.LOAD_SCHEDULE_DATA:
      return {
        ...state,
        schedule: action.payload.schedule,
        people: action.payload.people,
      };
    case actions.LOAD_USER_DATA:
      return {
        ...state,
        people: action.payload,
      };
    case actions.CREATE_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedule: [...state.schedule, action.payload],
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  dataReducer,
});

export default reducers;
