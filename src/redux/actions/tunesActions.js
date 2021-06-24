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
  
  let entri = "";
  let url = `https://itunes.apple.com/lookup?id=${id}`;
  if ((wrapperType, id)) {
    try {
      if (wrapperType == "collection") {
        entri = "&entity=song";
        url = url + entri;
        
      } else if (wrapperType == "track") {
        entri = "&entity=album";
        url = url + entri;
        
      } else if (wrapperType == "artist") {
        entri = "&entity=album";
        url = url + entri;
       
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
  const {
    tunes: { cardData },   
  } = getState();
  console.log(cardData);
  let index = cardData.findIndex(rank => rank.collectionId === item.collectionId|| rank.trackId === item.trackId);
  console.log(index);
  if(index=== -1){

    dispatch({ type: ActionTypes.ADD_ITEM_TO_CARD, payload: item });
  }
 
}
