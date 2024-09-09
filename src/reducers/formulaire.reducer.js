import { formulaireConstants } from '../actions/constantes';

const initialState = {
  formulaires: [],
  formulaire: null,
  loading: false,
  error: null
};

const formulaireReducer = (state = initialState, action) => {
  switch (action.type) {
    case formulaireConstants.CREATE_FORMULAIRE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case formulaireConstants.CREATE_FORMULAIRE_SUCCESS:
      return {
        ...state,
        formulaires: [...state.formulaires, action.payload],
        loading: false
      };

    case formulaireConstants.CREATE_FORMULAIRE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case formulaireConstants.GET_ALL_FORMULAIRES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case formulaireConstants.GET_ALL_FORMULAIRES_SUCCESS:
        return {
            ...state,
            formulaires : action.payload, 
            loading: false
          };
    

    case formulaireConstants.GET_ALL_FORMULAIRES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case formulaireConstants.GET_FORMULAIRE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case formulaireConstants.GET_FORMULAIRE_SUCCESS:
      return {
        ...state,
        formulaire: action.payload,
        loading: false
      };

    case formulaireConstants.GET_FORMULAIRE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case formulaireConstants.UPDATE_FORMULAIRE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case formulaireConstants.UPDATE_FORMULAIRE_SUCCESS:
      return {
        ...state,
        formulaires: state.formulaires.map(f =>
          f._id === action.payload._id ? action.payload : f
        ),
        loading: false
      };

    case formulaireConstants.UPDATE_FORMULAIRE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case formulaireConstants.DELETE_FORMULAIRE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case formulaireConstants.DELETE_FORMULAIRE_SUCCESS:
      return {
        ...state,
        formulaires: state.formulaires.filter(f => f._id !== action.payload),
        loading: false
      };

    case formulaireConstants.DELETE_FORMULAIRE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default formulaireReducer;
