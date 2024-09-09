import { aboutConstants } from './constantes';

export const createAbout = (aboutData) => (dispatch) => {
  dispatch({ type: aboutConstants.CREATE_ABOUT_REQUEST });

  // Préparez le FormData
  const formData = new FormData();

  // Ajoutez les fichiers au FormData
  if (aboutData.files && aboutData.files.length) {
    aboutData.files.forEach(file => {
      formData.append('files', file);
    });
  }

  fetch('http://localhost:8082/about/create', {
    method: 'POST',
    body: formData, // Pas besoin de définir 'Content-Type' pour FormData, le navigateur le fera
  })
  .then((response) => response.json())
  .then((data) => dispatch({
    type: aboutConstants.CREATE_ABOUT_SUCCESS,
    payload: data,
  }))
  .catch((error) => dispatch({
    type: aboutConstants.CREATE_ABOUT_FAILURE,
    payload: error,
  }));
};


// Récupérer tous les produits
export const getAllAbouts = () => (dispatch) => {
  dispatch({ type: aboutConstants.GET_ALL_ABOUTS_REQUEST });
  fetch('http://localhost:8082/about/abouts')
    .then((response) => response.json())
    .then((data) => dispatch({
      type: aboutConstants.GET_ALL_ABOUTS_SUCCESS,
      payload: data,
    }))
    .catch((error) => dispatch({
      type: aboutConstants.GET_ALL_ABOUTS_FAILURE,
      payload: error,
    }));
};

// Récupérer un produit par ID
export const getAboutById = (id) => async (dispatch) => {
    dispatch({ type: aboutConstants.GET_ABOUT_REQUEST });
    try {
      const response = await fetch(`http://localhost:8082/about/abouts/${id}`);
      const data = await response.json();
      dispatch({
        type: aboutConstants.GET_ABOUT_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: aboutConstants.GET_ABOUT_FAILURE,
        payload: error
      });
    }
  };

export const updateAbout = (id, aboutData) => (dispatch) => {
  dispatch({ type: aboutConstants.UPDATE_ABOUT_REQUEST });

  const formData = new FormData();

  

  if (aboutData.files && aboutData.files.length) {
      console.log("Files to upload:", aboutData.files); // Log file details
      aboutData.files.forEach(file => {
          formData.append('files', file);
      });
  }

  console.log("FormData to be sent:", Object.fromEntries(formData)); // Display FormData entries

  fetch(`http://localhost:8082/about/update/${id}`, {
      method: 'PUT',
      body: formData,
  })
  .then(response => {
      console.log("Server response:", response);
      if (!response.ok) {
          return response.json().then(data => {
              console.log("Server error data:", data);
              throw new Error(data.message || 'Failed to update about');
          });
      }
      return response.json();
  })
  .then(data => {
      console.log("Update success:", data);
      dispatch({
          type: aboutConstants.UPDATE_ABOUT_SUCCESS,
          payload: data,
      });
  })
  .catch(error => {
      console.error("Update failure:", error);
      dispatch({
          type: aboutConstants.UPDATE_ABOUT_FAILURE,
          payload: error.toString(),
      });
  });
};



  

// Supprimer un produit
export const deleteAbout = (id) => (dispatch) => {
    dispatch({ type: aboutConstants.DELETE_ABOUT_REQUEST });

    fetch(`http://localhost:8082/about/delete/${id}`, {
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
            type: aboutConstants.DELETE_ABOUT_SUCCESS,
            payload: id,
        });
    })
    .catch((error) => {
        dispatch({
            type: aboutConstants.DELETE_ABOUT_FAILURE,
            payload: error.message,
        });
    });
};


export const countAbouts = () => (dispatch) => {
  dispatch({ type: aboutConstants.COUNT_ABOUTS_REQUEST });
  fetch('http://localhost:8082/about/count')
    .then((response) => response.json())
    .then((data) => dispatch({
      type: aboutConstants.COUNT_ABOUTS_SUCCESS,
      payload: data.aboutCount,
    }))
    .catch((error) => dispatch({
      type: aboutConstants.COUNT_ABOUTS_FAILURE,
      payload: error,
    }));
};