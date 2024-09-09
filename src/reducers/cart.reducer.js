import { cartConstants } from '../actions/constantes';

const initialState = {
    cartItems: [],
    loading: false,
    error: null,
    itemCount: 0,  // Add itemCount to track total number of items
    cartTotal: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartConstants.ADD_TO_CART_REQUEST:
            return {
                ...state,
                loading: true
            };
        case cartConstants.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                itemCount: state.itemCount + action.payload.quantity,
                cartTotal: state.cartTotal + (action.payload.price * action.payload.quantity),
                loading: false
            };
        case cartConstants.ADD_TO_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case cartConstants.GET_CART_REQUEST:
            return {
                ...state,
                loading: true
            };
        case cartConstants.GET_CART_SUCCESS:
            // Update cart items, total and itemCount based on fetched data
            return {
                ...state,
                cartItems: action.payload.cart.items,
                cartTotal: action.payload.cart.total,
                itemCount: action.payload.itemCount,
                loading: false
            };
        case cartConstants.GET_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case cartConstants.UPDATE_CART_REQUEST:
            return {
                ...state,
                loading: true
            };
        case cartConstants.UPDATE_CART_SUCCESS:
            // Recalculate itemCount and total when updating
            return {
                ...state,
                cartItems: action.payload.items,
                itemCount: action.payload.items.reduce((total, item) => total + item.quantity, 0),
                cartTotal: action.payload.items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
                loading: false
            };
        case cartConstants.UPDATE_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case cartConstants.DELETE_CART_REQUEST:
            return {
                ...state,
                loading: true
            };
        case cartConstants.DELETE_CART_SUCCESS:
            // Reset items and totals on successful deletion
            return {
                ...state,
                cartItems: [],
                itemCount: 0,
                cartTotal: 0,
                loading: false
            };
        case cartConstants.DELETE_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default cartReducer;
