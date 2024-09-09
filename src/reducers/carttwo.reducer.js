// import { carttwoConstants } from '../actions/constantes';

// const initialState = {
//     carttwo: null,
//     loading: false,
//     error: null,
//     itemCount: 0
// };

// const carttwoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case carttwoConstants.ADD_TO_CARTTWO_REQUEST:
//         case carttwoConstants.GET_CARTTWO_REQUEST:
//         case carttwoConstants.UPDATE_CARTTWO_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//                 error: null
//             };
//         case carttwoConstants.ADD_TO_CARTTWO_SUCCESS:
//         case carttwoConstants.GET_CARTTWO_SUCCESS:
//             const itemCount = action.payload.items.reduce((sum, item) => sum + item.quantity, 0);
//             return {
//                 ...state,
//                 carttwo: action.payload,
//                 loading: false,
//                 itemCount: itemCount 
//             };

//         case carttwoConstants.UPDATE_CARTTWO_SUCCESS:
//             return {
//                 ...state,
//                 carttwo: action.payload,
//                 loading: false
//             };
//         case carttwoConstants.ADD_TO_CARTTWO_FAILURE:
//         case carttwoConstants.GET_CARTTWO_FAILURE:
//         case carttwoConstants.UPDATE_CARTTWO_FAILURE:
//             return {
//                 ...state,
//                 error: action.payload,
//                 loading: false
//             };
//         default:
//             return state;
//     }
// };

// export default carttwoReducer;



// const initialState = {
//     cartId: localStorage.getItem('cartId') || '',
//     carttwo: null,
//     carts: [],
//     loading: false,
//     error: null,
//     itemCount: 0, // Vous pouvez conserver itemCount ici si cela fait partie de votre gestion d'état
//     userInfo: {}  // Ajout de userInfo pour stocker les informations de l'utilisateur
// };

// const carttwoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case carttwoConstants.ADD_TO_CARTTWO_REQUEST:
//         case carttwoConstants.GET_CARTTWO_REQUEST:
//         case carttwoConstants.UPDATE_CARTTWO_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//                 error: null
//             };
//         case carttwoConstants.ADD_TO_CARTTWO_SUCCESS:
//             return {
//                 ...state,
//                 carttwo: action.payload, // Assurez-vous que le payload contient la structure attendue
//                 loading: false
//             };
//         case carttwoConstants.GET_CARTTWO_SUCCESS:
//             return {
//                 ...state,
//                 carttwo: action.payload, // payload devrait être l'objet complet du panier, incluant items et userInfo si disponibles
//                 itemCount: action.payload.items.length, // Exemple de mise à jour du itemCount
//                 loading: false
//             };
//         case carttwoConstants.UPDATE_CARTTWO_SUCCESS:
//             return {
//                 ...state,
//                 carttwo: action.payload,
//                 userInfo: action.payload.userInfo,
//                 itemCount: 0, // Mise à jour spécifique de userInfo après l'update
//                 loading: false
//             };
//         case carttwoConstants.ADD_TO_CARTTWO_FAILURE:
//         case carttwoConstants.GET_CARTTWO_FAILURE:
//         case carttwoConstants.UPDATE_CARTTWO_FAILURE:
//             return {
//                 ...state,
//                 error: action.payload,
//                 loading: false
//             };

//             case carttwoConstants.CLEAR_CART:
//                 return {
//                     ...state,
//                     carttwo: null,
//                     itemCount: 0,
//                     userInfo: {} 
//                 };

//                 case carttwoConstants.NEW_CART_CREATED:
//                     return {
//                         ...state,
//                         cartId: action.payload,
//                         items: []  // Reset the cart items when a new cart is created
//                     };

//                     case carttwoConstants.GET_ALL_CARTS_REQUEST:
//                         return {
//                             ...state,
//                             loading: true,
//                             error: null
//                         };
//                     case carttwoConstants.GET_ALL_CARTS_SUCCESS:
//                         return {
//                             ...state,
//                             loading: false,
//                             carts: action.payload
//                         };
//                     case carttwoConstants.GET_ALL_CARTS_FAILURE:
//                         return {
//                             ...state,
//                             loading: false,
//                             error: action.payload
//                         };
    
//         default:
//             return state;
//     }
// };

// export default carttwoReducer;



import { carttwoConstants } from '../actions/constantes';

const initialState = {
    cartId: localStorage.getItem('cartId') || '',
    carttwo: null,
    carts: [],
    loading: false,
    error: null,
    itemCount: 0,
    userInfo: {}
};

const carttwoReducer = (state = initialState, action) => {
    switch (action.type) {
        case carttwoConstants.ADD_TO_CARTTWO_REQUEST:
        case carttwoConstants.GET_CARTTWO_REQUEST:
        case carttwoConstants.UPDATE_CARTTWO_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case carttwoConstants.ADD_TO_CARTTWO_SUCCESS:
            return {
                ...state,
                carttwo: action.payload,
                loading: false
            };
        case carttwoConstants.GET_CARTTWO_SUCCESS:
            return {
                ...state,
                carttwo: action.payload,
                itemCount: action.payload.items.reduce((sum, item) => sum + item.quantity, 0),
                loading: false
            };
        case carttwoConstants.UPDATE_CARTTWO_SUCCESS:
            return {
                ...state,
                carttwo: action.payload,
                userInfo: action.payload.userInfo,
                itemCount: action.payload.items.reduce((sum, item) => sum + item.quantity, 0),
                loading: false
            };
        case carttwoConstants.ADD_TO_CARTTWO_FAILURE:
        case carttwoConstants.GET_CARTTWO_FAILURE:
        case carttwoConstants.UPDATE_CARTTWO_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case carttwoConstants.CLEAR_CART:
            return {
                ...state,
                carttwo: null,
                itemCount: 0,
                userInfo: {}
            };
        case carttwoConstants.NEW_CART_CREATED:
            return {
                ...state,
                cartId: action.payload,
                items: []
            };
        case carttwoConstants.GET_ALL_CARTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case carttwoConstants.GET_ALL_CARTS_SUCCESS:
            return {
                ...state,
                loading: false,
                carts: action.payload
            };
        case carttwoConstants.GET_ALL_CARTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default carttwoReducer;



