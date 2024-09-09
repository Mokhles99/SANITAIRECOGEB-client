import { carouselConstants } from '../actions/constantes';

const initialState = {
  carousels: [],
  carousel: null,
  loading: false,
  error: null,
  carouselCount: 0
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case carouselConstants.CREATE_CAROUSEL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case carouselConstants.CREATE_CAROUSEL_SUCCESS:
      return {
        ...state,
        carousels: [...state.carousels, action.payload],
        loading: false
      };

    case carouselConstants.CREATE_CAROUSEL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case carouselConstants.GET_ALL_CAROUSELS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case carouselConstants.GET_ALL_CAROUSELS_SUCCESS:
        return {
            ...state,
            carousels : action.payload, 
            loading: false
          };
    

    case carouselConstants.GET_ALL_CAROUSELS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

      case carouselConstants.GET_CAROUSEL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case carouselConstants.GET_CAROUSEL_SUCCESS:
      return {
        ...state,
        carousel: action.payload,
        loading: false
      };
    case carouselConstants.GET_CAROUSEL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case carouselConstants.UPDATE_CAROUSEL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case carouselConstants.UPDATE_CAROUSEL_SUCCESS:
      return {
        ...state,
        carousels: state.carousels.map(p =>
          p._id === action.payload._id ? action.payload : p
        ),
        loading: false
      };

    case carouselConstants.UPDATE_CAROUSEL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case carouselConstants.DELETE_CAROUSEL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case carouselConstants.DELETE_CAROUSEL_SUCCESS:
      return {
        ...state,
        carousels: state.carousels.filter(p => p._id !== action.payload),
        loading: false
      };

    case carouselConstants.DELETE_CAROUSEL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };


      case carouselConstants.COUNT_CAROUSELS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case carouselConstants.COUNT_CAROUSELS_SUCCESS:
        return {
          ...state,
          carouselCount: action.payload,
          loading: false
        };
  
      case carouselConstants.COUNT_CAROUSELS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };

    default:
      return state;
  }
};

export default carouselReducer;
