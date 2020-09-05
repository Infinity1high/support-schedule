import uniqBy from 'lodash/uniqBy';
import flatten from 'lodash/flatten';
export const LOAD_SCHEDULE_DATA = 'LOAD_SCHEDULE_DATA';
export const LOAD_SCHEDULE_FAIL = 'LOAD_SCHEDULE_FAIL';
export const LOAD_USER_DATA = 'LOAD_USER_DATA';
export const LOAD_USER_FAILED = 'LOAD_USER_FAILED';
export const CREATE_SCHEDULE_SUCCESS = 'CREATE_SCHEDULE_SUCCESS';
export const CREATE_SCHEDULE_FAILED = 'CREATE_SCHEDULE_FAILED';


const URL = 'http://192.168.43.122:8082/api';
export const colors = ['#489475','#2D93AD','#B8D291','#7D7C84', '#F78D50', '#FA5B15', '#59396E','#D53B3E', '#F4E64A', '#0C5221'];

export function loadSchedule() {
  return (dispatch) => {
    fetch(`${URL}/schedule`)
      .then(res => res.json())
      .then((res) => {
        const users = uniqBy(flatten(res[0].shifts.map(it => [it.morning, it.evening])), it => it.name);
        const userWithColor = users.map((it, index) => ({...it, color: colors[index]}));
        console.log(userWithColor, dispatch)
        dispatch({
          type: LOAD_SCHEDULE_DATA,
          payload: {schedule: res, people: userWithColor}
        });
      })
      .catch((err) => dispatch({ type: LOAD_SCHEDULE_FAIL, payload: { err }}))
  };
}

export function createNewSchedule() {
  return (dispatch) => {
    fetch(`${URL}/schedule`, {method: "POST"})
      .then(res => res.json())
      .then((res) => {
        dispatch({
          type: CREATE_SCHEDULE_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => dispatch({ type: LOAD_SCHEDULE_FAIL, payload: { err }}))
  };
}

export function loadUsers() {
  return (dispatch) => {
    fetch(`${URL}/users`)
      .then(res => {
        return res.json()})
      .then((res) => {
          const users = res.map((it, index) => ({...it, color: colors[index]}));
          dispatch({
            type: LOAD_USER_DATA,
            payload: users
          });
        })
          .catch((err) => dispatch({ type: LOAD_USER_FAILED, payload: { err }}))
      };
}