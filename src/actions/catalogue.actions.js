import { catalogueConstants } from './constantes';

export const createCatalogue = (catalogueData) => (dispatch) => {
  dispatch({ type: catalogueConstants.CREATE_CATALOGUE_REQUEST });

  // Préparez le FormData
  const formData = new FormData();

  // Ajoutez les fichiers au FormData
  if (catalogueData.files && catalogueData.files.length) {
    catalogueData.files.forEach(file => {
      formData.append('files', file);
    });
  }

  fetch('http://localhost:8082/catalogue/create', {
    method: 'POST',
    body: formData, // Pas besoin de définir 'Content-Type' pour FormData, le navigateur le fera
  })
  .then((response) => response.json())
  .then((data) => dispatch({
    type: catalogueConstants.CREATE_CATALOGUE_SUCCESS,
    payload: data,
  }))
  .catch((error) => dispatch({
    type: catalogueConstants.CREATE_CATALOGUE_FAILURE,
    payload: error,
  }));
};


// Récupérer tous les produits
export const getAllCatalogues = () => (dispatch) => {
  dispatch({ type: catalogueConstants.GET_ALL_CATALOGUES_REQUEST });
  fetch('http://localhost:8082/catalogue/catalogues')
    .then((response) => response.json())
    .then((data) => dispatch({
      type: catalogueConstants.GET_ALL_CATALOGUES_SUCCESS,
      payload: data,
    }))
    .catch((error) => dispatch({
      type: catalogueConstants.GET_ALL_CATALOGUES_FAILURE,
      payload: error,
    }));
};

// Récupérer un produit par ID
export const getCatalogueById = (id) => async (dispatch) => {
    dispatch({ type: catalogueConstants.GET_CATALOGUE_REQUEST });
    try {
      const response = await fetch(`http://localhost:8082/catalogue/catalogues/${id}`);
      const data = await response.json();
      dispatch({
        type: catalogueConstants.GET_CATALOGUE_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: catalogueConstants.GET_CATALOGUE_FAILURE,
        payload: error
      });
    }
  };

export const updateCatalogue = (id, catalogueData) => (dispatch) => {
  dispatch({ type: catalogueConstants.UPDATE_CATALOGUE_REQUEST });

  const formData = new FormData();

  

  if (catalogueData.files && catalogueData.files.length) {
      console.log("Files to upload:", catalogueData.files); // Log file details
      catalogueData.files.forEach(file => {
          formData.append('files', file);
      });
  }

  console.log("FormData to be sent:", Object.fromEntries(formData)); // Display FormData entries

  fetch(`http://localhost:8082/catalogue/update/${id}`, {
      method: 'PUT',
      body: formData,
  })
  .then(response => {
      console.log("Server response:", response);
      if (!response.ok) {
          return response.json().then(data => {
              console.log("Server error data:", data);
              throw new Error(data.message || 'Failed to update catalogue');
          });
      }
      return response.json();
  })
  .then(data => {
      console.log("Update success:", data);
      dispatch({
          type: catalogueConstants.UPDATE_CATALOGUE_SUCCESS,
          payload: data,
      });
  })
  .catch(error => {
      console.error("Update failure:", error);
      dispatch({
          type: catalogueConstants.UPDATE_CATALOGUE_FAILURE,
          payload: error.toString(),
      });
  });
};



  

// Supprimer un produit
export const deleteCatalogue = (id) => (dispatch) => {
    dispatch({ type: catalogueConstants.DELETE_CATALOGUE_REQUEST });

    fetch(`http://localhost:8082/catalogue/delete/${id}`, {
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
            type: catalogueConstants.DELETE_CATALOGUE_SUCCESS,
            payload: id,
        });
    })
    .catch((error) => {
        dispatch({
            type: catalogueConstants.DELETE_CATALOGUE_FAILURE,
            payload: error.message,
        });
    });
};


export const countCatalogues = () => (dispatch) => {
  dispatch({ type: catalogueConstants.COUNT_CATALOGUES_REQUEST });
  fetch('http://localhost:8082/catalogue/count')
    .then((response) => response.json())
    .then((data) => dispatch({
      type: catalogueConstants.COUNT_CATALOGUES_SUCCESS,
      payload: data.catalogueCount,
    }))
    .catch((error) => dispatch({
      type: catalogueConstants.COUNT_CATALOGUES_FAILURE,
      payload: error,
    }));
};