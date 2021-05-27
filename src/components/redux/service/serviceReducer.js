import {
  CLEAR_ERROR,
  FETCH_ERROR,
  FETCH_SERVICES,
  FETCH_SUCCESS,
  FETCH_SERVICE_DETAILS,
  FETCH_SERVICE_DETAILS_SUCCESS,
  FETCH_SERVICE_DETAILS_ERROR,
} from "../constants/Constants";

const initialState = {
  loading: false,
  services: [],
  service: {},
  error: null,
};
export const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload.getServices,
        filteredServiceCount: action.payload.filteredServiceCount,
        servicesCount: action.payload.servicesCount,
        resDataPerPage: action.payload.resDataPerPage,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const serviceDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICE_DETAILS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SERVICE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        service: action.payload.getService,
      };
    case FETCH_SERVICE_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
