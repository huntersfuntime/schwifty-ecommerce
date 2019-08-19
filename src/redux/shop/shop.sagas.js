import { takeEvery } from "redux-saga/effects";

import ShopActionsTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("Have been fired");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionsTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}
