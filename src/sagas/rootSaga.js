import { all, put, call, takeEvery } from "redux-saga/effects";

export const delay = ms => new Promise(res => setTimeout(res, ms));

function* increase() {
  yield console.log("This is increase saga!");
}

function* watchIncrease() {
  yield takeEvery("INCREASE", increase);
}

export function* increaseAsync() {
  console.log("increase async");
  yield call(delay, 1000);
  yield put({ type: "INCREASE" });
}

function* watchIncreaseAsync() {
  yield takeEvery("INCREASE_ASYNC", increaseAsync);
}

function* decreaseAsync() {
  yield call(delay, 1000);
  yield put({ type: "DECREASE" });
}

function* watchDecreaseAsync() {
  yield takeEvery("DECREASE_ASYNC", decreaseAsync);
}

export default function* rootSaga() {
  yield all([watchIncreaseAsync(), watchIncrease(), watchDecreaseAsync()]);
}
