import { catalogueConstants } from '../actions/constantes';

const initialState = {
  catalogues: [],
  catalogue: null,
  loading: false,
  error: null,
  catalogueCount: 0
};

const catalogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case catalogueConstants.CREATE_CATALOGUE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case catalogueConstants.CREATE_CATALOGUE_SUCCESS:
      return {
        ...state,
        catalogues: [...state.catalogues, action.payload],
        loading: false
      };

    case catalogueConstants.CREATE_CATALOGUE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case catalogueConstants.GET_ALL_CATALOGUES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case catalogueConstants.GET_ALL_CATALOGUES_SUCCESS:
        return {
            ...state,
            catalogues : action.payload, 
            loading: false
          };
    

    case catalogueConstants.GET_ALL_CATALOGUES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

      case catalogueConstants.GET_CATALOGUE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case catalogueConstants.GET_CATALOGUE_SUCCESS:
      return {
        ...state,
        catalogue: action.payload,
        loading: false
      };
    case catalogueConstants.GET_CATALOGUE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case catalogueConstants.UPDATE_CATALOGUE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case catalogueConstants.UPDATE_CATALOGUE_SUCCESS:
      return {
        ...state,
        catalogues: state.catalogues.map(p =>
          p._id === action.payload._id ? action.payload : p
        ),
        loading: false
      };

    case catalogueConstants.UPDATE_CATALOGUE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case catalogueConstants.DELETE_CATALOGUE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case catalogueConstants.DELETE_CATALOGUE_SUCCESS:
      return {
        ...state,
        catalogues: state.catalogues.filter(p => p._id !== action.payload),
        loading: false
      };

    case catalogueConstants.DELETE_CATALOGUE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };


      case catalogueConstants.COUNT_CATALOGUES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case catalogueConstants.COUNT_CATALOGUES_SUCCESS:
        return {
          ...state,
          catalogueCount: action.payload,
          loading: false
        };
  
      case catalogueConstants.COUNT_CATALOGUES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };

    default:
      return state;
  }
};

export default catalogueReducer;
