import { formulaireConstants } from './constantes';

// Create Formulaire
export const createFormulaire = (formulaireData) => (dispatch) => {
  dispatch({ type: formulaireConstants.CREATE_FORMULAIRE_REQUEST });
  fetch('http://localhost:8082/formulaire/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formulaireData),
  })
    .then((response) => response.json())
    .then((data) => dispatch({
      type: formulaireConstants.CREATE_FORMULAIRE_SUCCESS,
      payload: data,
    }))
    .catch((error) => dispatch({
      type: formulaireConstants.CREATE_FORMULAIRE_FAILURE,
      payload: error,
    }));
};

// Get all Formulaires
export const getAllFormulaires = () => (dispatch) => {
    dispatch({ type: formulaireConstants.GET_ALL_FORMULAIRES_REQUEST });
    fetch('http://localhost:8082/formulaire/forms')
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: formulaireConstants.GET_ALL_FORMULAIRES_SUCCESS,
                payload: data.formulaireList  // Assurez-vous que cela correspond à la structure des données retournées par l'API
            });
        })
        .catch((error) => {
            dispatch({
                type: formulaireConstants.GET_ALL_FORMULAIRES_FAILURE,
                payload: error
            });
        });
};

export const getFormulaire = (id) => (dispatch) => {
  dispatch({ type: formulaireConstants.GET_FORMULAIRE_REQUEST });

  fetch(`http://localhost:8082/formulaire/formulaires/${id}`, {
      method: 'GET',
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
      }
      return response.json();
  })
  .then((data) => {
      dispatch({
          type: formulaireConstants.GET_FORMULAIRE_SUCCESS,
          payload: data.formulaire, // Assurez-vous d'accéder au formulaire depuis la réponse
      });
  })
  .catch((error) => {
      dispatch({
          type: formulaireConstants.GET_FORMULAIRE_FAILURE,
          payload: error.toString(),
      });
  });
};


// Update Formulaire
export const updateFormulaire = (id, formulaireData) => (dispatch) => {
  dispatch({ type: formulaireConstants.UPDATE_FORMULAIRE_REQUEST });

  fetch(`http://localhost:8082/formulaire/forms/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formulaireData),
  })
  .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
  })
  .then((data) => dispatch({
      type: formulaireConstants.UPDATE_FORMULAIRE_SUCCESS,
      payload: data.formulaire, // Utilisation de data.formulaire basé sur la réponse de votre backend
  }))
  .catch((error) => dispatch({
      type: formulaireConstants.UPDATE_FORMULAIRE_FAILURE,
      payload: error.toString(),
  }));
};


// Delete Formulaire
export const deleteFormulaire = (id) => (dispatch) => {
  dispatch({ type: formulaireConstants.DELETE_FORMULAIRE_REQUEST });

  fetch(`http://localhost:8082/formulaire/forms/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du formulaire');
      }
      return response.json();
    })
    .then(() => {
      dispatch({
        type: formulaireConstants.DELETE_FORMULAIRE_SUCCESS,
        payload: id,
      });
    })
    .catch((error) => {
      dispatch({
        type: formulaireConstants.DELETE_FORMULAIRE_FAILURE,
        payload: error.message,
      });
    });
};
