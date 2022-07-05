import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, PRODUCT_LIST_SUCCESS, SEARCH_PRODUCT } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:4000/product");
  let result = yield data.json();
  yield put({ type: PRODUCT_LIST_SUCCESS, data: result });
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:4000/product?q=${data.query}`);
  result = yield result.json();
  yield put({ type: PRODUCT_LIST_SUCCESS, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);

}

export default productSaga;

// After async operation then generator function return result
// 1. Call Saga function from Action
// 2. Make Function in Saga for APi
// 3. Send Result from saga to action
// 4. pass data to reducer
// 5. get data in main component
