import axios from 'axios';
import {API_URL} from '../config';

//selectors
export const getAllMainCarouselImgs = ({mainCarouselImgs}) => {
  return mainCarouselImgs.data;
};

/* thunk creators */
export const fetchGetAllMainCarouselImgs = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    axios
      .get(`${API_URL}/mainCarousel`)
      .then(res => {
        dispatch(fetchImagesSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

// actions
const createActionName = actionName => `app/mainCarousel/${actionName}`;
const FETCH_START = createActionName('FETCH_START');
const FETCH_IMAGES_SUCCESS = createActionName('FETCH_IMAGES_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const fetchStarted = payload => ({payload, type: FETCH_START});
export const fetchImagesSuccess = payload => ({payload, type: FETCH_IMAGES_SUCCESS});
export const fetchError = payload => ({payload, type: FETCH_ERROR});

const mainCarouselImgsReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_START: {
      return {...statePart, loading: {active: true, error: false}};
    }
    case FETCH_IMAGES_SUCCESS: {
      return {...statePart, loading: {active: false, error: false, loadingDate: new Date().toUTCString()}, data: action.payload};
    }
    case FETCH_ERROR: {
      return {...statePart, loading: {active: false, error: action.payload}};
    }
    default:
      return statePart;
  }
};

export default mainCarouselImgsReducer;
