import { ActionTypes } from "../action-types";
const initState = {
  data: null,
  singleData: null,
  cardData: [],
  loading: false,
  isOpenModal: false,
  isCardOpenModal: false,
  error: null,
  searchText: "",
  searchMedia: "song",
};
export const itunesReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_REQUSET:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.FETCH_ID_REQUSET:
      return {
        ...state,
        error: null,
        isOpenModal: false,
      };
    case ActionTypes.FETCH_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        singleData: action.payload,
        isOpenModal: true,
      };
    case ActionTypes.FETCH_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        isOpenModal: false,
      };
    case ActionTypes.SET_INPUT_MEDIA:
      return {
        ...state,
        searchMedia: action.payload,
      };
    case ActionTypes.SET_INPUT_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpenModal: false,
        isCardOpenModal: false,
      };
      case ActionTypes.ADD_ITEM_TO_CARD:
      return {
        ...state,
        cardData: [...state.cardData, action.payload],        
        // cardData:{ ...state.cardData, ...action.payload},        
      };

    default:
      return state;
  }
};
