import { ActionTypes } from "../action-types";
export const fetchSearch = () => async (dispatch, getState) => {
  dispatch({ type: ActionTypes.FETCH_DATA_REQUSET });
  const setup = true;
  const {
    tunes: { searchMedia },
    tunes: { searchText },
  } = getState();

  if (searchText && setup) {
    if (searchMedia == "all") {
      console.log("Search media is: " + searchMedia);
      return;
    }
    try {
      let url = `https://itunes.apple.com/search?term=${searchText}&entity=${searchMedia}`;
      url = "http://localhost:3004/mix";
      console.log(url);
      const res = await fetch(url);
      const json = await res.json();
      // console.log(json);

      dispatch({ type: ActionTypes.FETCH_DATA_SUCCESS, payload: json });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_DATA_FAILURE, error });
    }
  } else {
    // console.log("error");
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
