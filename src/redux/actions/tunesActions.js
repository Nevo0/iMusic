import { ActionTypes } from "../action-types";
export const fetchSearch = () => async (dispatch, getState) => {
  dispatch({ type: ActionTypes.FETCH_DATA_REQUSET });
  const {
    tunes: { searchMedia },
    tunes: { searchText },
  } = getState();

  if (!(searchText.length === 0)) {
    if (searchMedia == "all") {
      return;
    }
    try {
      let url = `https://itunes.apple.com/search?term=${searchText}&entity=${searchMedia}`;

      const res = await fetch(url);
      const json = await res.json();

      dispatch({ type: ActionTypes.FETCH_DATA_SUCCESS, payload: json });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_DATA_FAILURE, error });
    }
  } else {
    dispatch({
      type: ActionTypes.FETCH_DATA_FAILURE,
      error: "RefernceError: Not enough data",
    });
  }
};

export const setSearchInfo =
  (setItem, Item = "all") =>
  async (dispatch, getState) => {
    dispatch({
      type: setItem,
      payload: Item,
    });
  };

export const fetchInfo = (wrapperType, id) => async (dispatch, getState) => {
  dispatch({ type: ActionTypes.FETCH_ID_REQUSET });
  const test = false;

  let entri = "";
  let url = `https://itunes.apple.com/lookup?id=${id}`;
  if ((wrapperType, id)) {
    try {
      if (wrapperType == "collection") {
        entri = "&entity=song";
        url = url + entri;
        if (test) {
          url = "http://localhost:3004/collection";
        }
      } else if (wrapperType == "track") {
        entri = "&entity=album";
        url = url + entri;
        if (test) {
          url = "http://localhost:3004/track";
        }
      } else if (wrapperType == "artist") {
        entri = "&entity=album";
        url = url + entri;
        if (test) {
          url = "http://localhost:3004/artist";
        }
      } else {
        entri = "";
        url = url + entri;
      }

      const res = await fetch(url);
      const json = await res.json();

      dispatch({ type: ActionTypes.FETCH_ID_SUCCESS, payload: json });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_ID_FAILURE, error });
    }
  } else {
    dispatch({
      type: ActionTypes.FETCH_ID_FAILURE,
      error: "RefernceError: Not enough data",
    });
  }
};
export const addItemToCard = (item) => async (dispatch, getState) => {
  console.log(item);
  dispatch({ type: ActionTypes.ADD_ITEM_TO_CARD, payload: item });
}
