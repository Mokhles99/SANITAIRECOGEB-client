import {cartConstants} from  './constantes';


export const addToCarttwo = (productId, quantity) => async (dispatch) => {
    console.log('Sending request to add to cart:', { productId, quantity });
    dispatch({ type: carttwoConstants.ADD_TO_CARTTWO_REQUEST });
    try {
        const response = await fetch('http://localhost:8082/carttwo/cart/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity })
        });
        // Additional logging   for commit 
        console.log('Response status:', response.status);
        const data = await response.json();
        dispatch({ type: carttwoConstants.ADD_TO_CARTTWO_SUCCESS, payload: data });
    } catch (error) {
        console.error('Failed to add to cart:', error);
        dispatch({ type: carttwoConstants.ADD_TO_CARTTWO_FAILURE, payload: error.message });
    }
};


export const getCart = (id) => async (dispatch) => {
    dispatch({ type: cartConstants.GET_CART_REQUEST });
    try {
        const response = await fetch(`http://localhost:8082/cart/cart/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch cart");
        }
        const data = await response.json();

        // Update local storage with the latest cart data
        localStorage.setItem('cart', JSON.stringify(data));

        // Dispatch the success action with the cart and itemCount
        dispatch({
            type: cartConstants.GET_CART_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({ type: cartConstants.GET_CART_FAILURE, payload: error.message });
    }
};


export const updateCart = (id, cartData) => async (dispatch) => {
    dispatch({ type: cartConstants.UPDATE_CART_REQUEST });
    try {
        const response = await fetch(`http://localhost:8082/cart/updatecart/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cartData)
        });
        const data = await response.json();
        dispatch({ type: cartConstants.UPDATE_CART_SUCCESS, payload: data });
        localStorage.setItem('cart', JSON.stringify(data)); // Update localStorage
    } catch (error) {
        dispatch({ type: cartConstants.UPDATE_CART_FAILURE, payload: error.message });
    }
};

export const updateCartUserInfo = (cartId, userInfo) => async (dispatch) => {
    dispatch({ type: cartConstants.UPDATE_CART_REQUEST });
    try {
        const response = await fetch(`http://localhost:8082/cart/update/${cartId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userInfo })
        });
        const data = await response.json();
        dispatch({ type: cartConstants.UPDATE_CART_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: cartConstants.UPDATE_CART_FAILURE, payload: error.message });
    }
};


export const deleteCart = (id) => async (dispatch) => {
    dispatch({ type: cartConstants.DELETE_CART_REQUEST });
    try {
        const response = await fetch(`http://localhost:8082/cart/deletecart/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            dispatch({ type: cartConstants.DELETE_CART_SUCCESS, payload: id });
            localStorage.removeItem('cart'); // Remove from localStorage
        } else {
            throw new Error('Failed to delete the cart');
        }
    } catch (error) {
        dispatch({ type: cartConstants.DELETE_CART_FAILURE, payload: error.message });
    }
};
