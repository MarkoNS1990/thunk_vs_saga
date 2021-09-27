import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUsersSuccess, FETCH_USERS_BEGIN } from "../users/usersActions";

function* workGetUsersFetch() {
  const response = yield call(
    fetch,
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = yield response.json();
  yield put(fetchUsersSuccess(users));
}

function* mySaga() {
  yield takeEvery(FETCH_USERS_BEGIN, workGetUsersFetch);
}

export default mySaga;
