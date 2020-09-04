export const LOAD_SCHEDULE_DATA = 'LOAD_SCHEDULE_DATA';
export const LOAD_SCHEDULE_FAIL = 'LOAD_SCHEDULE_FAIL';
export const LOAD_USER_DATA = 'LOAD_USER_DATA';
export const LOAD_USER_FAILED = 'LOAD_USER_FAILED';



const URL = 'https://localhost/8082/api';
export const colors = ['#489475','#2D93AD','#B8D291','#7D7C84', '#F78D50', '#FA5B15', '#59396E','#D53B3E', '#F4E64A', '#0C5221'];

export function loadSchedule() {
  return (dispatch) => {
    fetch(`${URL}/schedule`)
      .then(res => res.json()),
      .then((res) => {
        dispatch({
          type: LOAD_SCHEDULE_DATA,
          payload: res
        });
      })
      .catch((err) => dispatch({ type: LOAD_SCHEDULE_FAIL, payload: { err }}))
  };
}

export function loadUsers() {
  return (dispatch) => {
    fetch(`${URL}/users`)
      .then(res => res.json()),
  .then((res) => {
    console.log(res)
      const users = res.map((it, index) => ({...it, color: colors[index]}));
      dispatch({
        type: LOAD_USER_DATA,
        payload: users
      });
    })
      .catch((err) => dispatch({ type: LOAD_SCHEDULE_FAIL, payload: { err }}))
  };
}