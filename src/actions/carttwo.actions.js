import { carttwoConstants } from './constantes'

import { generateCartId } from '../utils/cartUtils'

import axios from 'axios'; // Importez axios

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const createNewCart = () => {
    const newCartId = generateCartId();
    localStorage.setItem('cartId', newCartId);
    return {
        type: carttwoConstants.NEW_CART_CREATED,
        payload: newCartId
    };
};

export const addToCarttwo = (cartId, productId, quantity = 1) => async (dispatch) => {
    dispatch({ type: carttwoConstants.ADD_TO_CARTTWO_REQUEST });

    console.log(`Adding to cart - Cart ID: ${cartId}, Product ID: ${productId}, Quantity: ${quantity}`);

    if (typeof productId !== 'string' || productId.length !== 24) {
        console.error("Invalid product ID format.");
        dispatch({ type: carttwoConstants.ADD_TO_CARTTWO_FAILURE, payload: "Invalid product ID format" });
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}/carttwo/${cartId}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
            throw new Error(`HTTP error! status: ${response.status}, Message: ${errorData.message}`);
        }

        const data = await response.json();
        console.log("Product added successfully:", data);
        dispatch({ type: carttwoConstants.ADD_TO_CARTTWO_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error in addToCarttwo:", error);
        dispatch({ type: carttwoConstants.ADD_TO_CARTTWO_FAILURE, payload: error.message });
    }
};


export const getCarttwo = (cartId) => async (dispatch) => {
    dispatch({ type: carttwoConstants.GET_CARTTWO_REQUEST });
    try {
        const response = await fetch(`${BASE_URL}/carttwo/${cartId}/getCarttwo`, {
            method: 'GET'
        });
        const data = await response.json();
        dispatch({ type: carttwoConstants.GET_CARTTWO_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: carttwoConstants.GET_CARTTWO_FAILURE, payload: error.message });
    }
};



export const updateCartWithUserInfo = (cartId, userInfo) => async (dispatch) => {
    dispatch({ type: carttwoConstants.UPDATE_CARTTWO_REQUEST });

    try {
        const response = await fetch(`${BASE_URL}/carttwo/${cartId}/userinfo`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userInfo })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        dispatch({ type: carttwoConstants.UPDATE_CARTTWO_SUCCESS, payload: data });
        
        // Clear cart items both in state and local storage after successful update
        dispatch({ type: carttwoConstants.CLEAR_CART });
        localStorage.removeItem('cartItems');
        
    } catch (error) {
        console.error("Error in updating cart with user info:", error);
        dispatch({ type: carttwoConstants.UPDATE_CARTTWO_FAILURE, payload: error.message });
    }
};



export const removeItemFromCart = (cartId, itemId) => async (dispatch) => {
    dispatch({ type: carttwoConstants.REMOVE_ITEM_FROM_CART_REQUEST });
    try {
        const response = await fetch(`${BASE_URL}/carttwo/${cartId}/items/${itemId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`Failed to delete the item: status ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: carttwoConstants.REMOVE_ITEM_FROM_CART_SUCCESS, payload: data });
        console.log("Item removed successfully:", data);
    } catch (error) {
        console.error("Error in removing item from cart:", error);
        dispatch({ type: carttwoConstants.REMOVE_ITEM_FROM_CART_FAILURE, payload: error.message });
    }
};

export const updateItemQuantity = (cartId, itemId, quantity) => async (dispatch) => {
    dispatch({ type: carttwoConstants.UPDATE_ITEM_QUANTITY_REQUEST });
    console.log(`Request to update quantity: ${quantity} for item: ${itemId} in cart: ${cartId}`);

    if (typeof quantity !== 'number' || quantity < 1) {
        console.log("Invalid quantity provided:", quantity);
        dispatch({
            type: carttwoConstants.UPDATE_ITEM_QUANTITY_FAILURE,
            payload: "Invalid quantity. Quantity must be a positive number."
        });
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}/carttwo/${cartId}/items/${itemId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log(`Error updating item quantity:`, errorData.message);
            throw new Error(`Failed to update item quantity: ${errorData.message}`);
        }

        const updatedCart = await response.json();
        console.log("Updated cart after quantity change:", updatedCart);
        dispatch({ type: carttwoConstants.UPDATE_ITEM_QUANTITY_SUCCESS, payload: updatedCart });
    } catch (error) {
        console.error("Error in updateItemQuantity:", error);
        dispatch({ type: carttwoConstants.UPDATE_ITEM_QUANTITY_FAILURE, payload: error.toString() });
    }
};




export const clearCart = () => {
    return {
        type: carttwoConstants.CLEAR_CART
    };
};

export const getAllCarts = () => async (dispatch) => {
    dispatch({ type: carttwoConstants.GET_ALL_CARTS_REQUEST });
    try {
        const response = await fetch(`${BASE_URL}/carttwo/all`);
        const data = await response.json();
        if (response.ok) {
            dispatch({ type: carttwoConstants.GET_ALL_CARTS_SUCCESS, payload: data });
        } else {
            throw new Error(data.message || "Failed to fetch carts");
        }
    } catch (error) {
        dispatch({ type: carttwoConstants.GET_ALL_CARTS_FAILURE, payload: error.message });
    }
};

