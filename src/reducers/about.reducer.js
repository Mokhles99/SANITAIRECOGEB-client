import { aboutConstants } from '../actions/constantes';

const initialState = {
  abouts: [],
  about: null,
  loading: false,
  error: null,
  aboutCount: 0
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case aboutConstants.CREATE_ABOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case aboutConstants.CREATE_ABOUT_SUCCESS:
      return {
        ...state,
        abouts: [...state.abouts, action.payload],
        loading: false
      };

    case aboutConstants.CREATE_ABOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case aboutConstants.GET_ALL_ABOUTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case aboutConstants.GET_ALL_ABOUTS_SUCCESS:
        return {
            ...state,
            abouts : action.payload, 
            loading: false
          };
    

    case aboutConstants.GET_ALL_ABOUTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

      case aboutConstants.GET_ABOUT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case aboutConstants.GET_ABOUT_SUCCESS:
      return {
        ...state,
        about: action.payload,
        loading: false
      };
    case aboutConstants.GET_ABOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case aboutConstants.UPDATE_ABOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case aboutConstants.UPDATE_ABOUT_SUCCESS:
      return {
        ...state,
        abouts: state.abouts.map(p =>
          p._id === action.payload._id ? action.payload : p
        ),
        loading: false
      };

    case aboutConstants.UPDATE_ABOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case aboutConstants.DELETE_ABOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case aboutConstants.DELETE_ABOUT_SUCCESS:
      return {
        ...state,
        abouts: state.abouts.filter(p => p._id !== action.payload),
        loading: false
      };

    case aboutConstants.DELETE_ABOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };


      case aboutConstants.COUNT_ABOUTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case aboutConstants.COUNT_ABOUTS_SUCCESS:
        return {
          ...state,
          aboutCount: action.payload,
          loading: false
        };
  
      case aboutConstants.COUNT_ABOUTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };

    default:
      return state;
  }
};

export default aboutReducer;
