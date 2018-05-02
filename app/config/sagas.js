import { takeEvery } from "redux-saga/effects";

//1. swap currencies
//2. change base currencies
//3. initial appl load
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION
} from "../actions/currencies";

function* fetchLatestConversionRates() {
  yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
}
