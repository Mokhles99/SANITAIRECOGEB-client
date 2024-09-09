import { productConstants } from '../actions/constantes';

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case productConstants.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false
      };

    case productConstants.CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case productConstants.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
        return {
            ...state,
            products : action.payload, 
            loading: false
          };
    

    case productConstants.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

      case productConstants.GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case productConstants.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false
      };
    case productConstants.GET_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case productConstants.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case productConstants.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map(p =>
          p._id === action.payload._id ? action.payload : p
        ),
        loading: false
      };

    case productConstants.UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case productConstants.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case productConstants.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(p => p._id !== action.payload),
        loading: false
      };

    case productConstants.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default productReducer;
