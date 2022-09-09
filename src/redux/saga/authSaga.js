import { call, put, takeEvery } from "redux-saga/effects";

function* loginSaga() {
  yield;
  try {
  } catch (error) {
    console.log(error);
  }
}

function* authSaga() {
  yield takeEvery("auth/login", loginSaga);
}

export default authSaga;
