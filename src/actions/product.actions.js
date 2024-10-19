import { productConstants } from './constantes';

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const createProduct = (productData) => (dispatch) => {
  dispatch({ type: productConstants.CREATE_PRODUCT_REQUEST });

  // Préparez le FormData
  const formData = new FormData();
  formData.append('name', productData.name);
  formData.append('description', productData.description);
  formData.append('type', productData.type);
  
  // Ajoutez les fichiers au FormData
  if (productData.files && productData.files.length) {
    productData.files.forEach(file => {
      formData.append('files', file);
    });
  }

  fetch(`${BASE_URL}/product/create`, {
    method: 'POST',
    body: formData, // Pas besoin de définir 'Content-Type' pour FormData, le navigateur le fera
  })
  .then((response) => response.json())
  .then((data) => dispatch({
    type: productConstants.CREATE_PRODUCT_SUCCESS,
    payload: data,
  }))
  .catch((error) => dispatch({
    type: productConstants.CREATE_PRODUCT_FAILURE,
    payload: error,
  }));
};


// Récupérer tous les produits
export const getAllProducts = () => (dispatch) => {
  dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
  fetch(`${BASE_URL}/product/products`)
    .then((response) => response.json())
    .then((data) => dispatch({
      type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
      payload: data,
    }))
    .catch((error) => dispatch({
      type: productConstants.GET_ALL_PRODUCTS_FAILURE,
      payload: error,
    }));
};

// Récupérer un produit par ID
export const getProductById = (id) => async (dispatch) => {
    dispatch({ type: productConstants.GET_PRODUCT_REQUEST });
    try {
      const response = await fetch(`${BASE_URL}/product/products/${id}`);
      const data = await response.json();
      dispatch({
        type: productConstants.GET_PRODUCT_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: productConstants.GET_PRODUCT_FAILURE,
        payload: error
      });
    }
  };

// Mettre à jour un produit
export const updateProduct = (id, productData) => (dispatch) => {
  dispatch({ type: productConstants.UPDATE_PRODUCT_REQUEST });

  const formData = new FormData();
  formData.append('name', productData.name);
  formData.append('description', productData.description);
  formData.append('price', productData.price);
  formData.append('liter', productData.liter);
  formData.append('type', productData.type);

  if (productData.files && productData.files.length) {
    productData.files.forEach(file => {
      formData.append('files', file);
    });
  }

  return fetch(`${BASE_URL}/product/update/${id}`, {
    method: 'PUT',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour du produit');
      }
      return response.json();
    })
    .then(data => {
      dispatch({
        type: productConstants.UPDATE_PRODUCT_SUCCESS,
        payload: data,
      });
      return data;
    })
    .catch(error => {
      dispatch({
        type: productConstants.UPDATE_PRODUCT_FAILURE,
        payload: error.message,
      });
      throw error;
    });
};



  

// Supprimer un produit
export const deleteProduct = (id) => (dispatch) => {
    dispatch({ type: productConstants.DELETE_PRODUCT_REQUEST });

    fetch(`${BASE_URL}/product/delete/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            // Si la réponse n'est pas OK, lancez une erreur pour passer au bloc 'catch'
            return response.json().then(data => {
                throw new Error(data.message);
            });
        }
        return response.json();
    })
    .then(data => {
        // Si la suppression est réussie, envoyez l'ID du produit supprimé à votre store Redux
        dispatch({
            type: productConstants.DELETE_PRODUCT_SUCCESS,
            payload: id,
        });
    })
    .catch((error) => {
        dispatch({
            type: productConstants.DELETE_PRODUCT_FAILURE,
            payload: error.message,
        });
    });
};

