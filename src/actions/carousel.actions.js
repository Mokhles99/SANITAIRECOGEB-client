import { carouselConstants } from './constantes';

// Action to create a carousel
export const createCarousel = (carouselData) => (dispatch) => {
  dispatch({ type: carouselConstants.CREATE_CAROUSEL_REQUEST });

  const formData = new FormData();
  if (carouselData.files && carouselData.files.length) {
    carouselData.files.forEach((file) => {
      formData.append('files', file);
    });
  }

  fetch('http://localhost:8082/carousel/create', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: carouselConstants.CREATE_CAROUSEL_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: carouselConstants.CREATE_CAROUSEL_FAILURE,
        payload: error,
      })
    );
};

// Action to get all carousels
export const getAllCarousels = () => (dispatch) => {
  dispatch({ type: carouselConstants.GET_ALL_CAROUSELS_REQUEST });

  fetch('http://localhost:8082/carousel/carousels')
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: carouselConstants.GET_ALL_CAROUSELS_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: carouselConstants.GET_ALL_CAROUSELS_FAILURE,
        payload: error,
      })
    );
};

// Action to get a carousel by ID
export const getCarouselById = (id) => async (dispatch) => {
  dispatch({ type: carouselConstants.GET_CAROUSEL_REQUEST });

  try {
    const response = await fetch(`http://localhost:8082/carousel/carousels/${id}`);
    const data = await response.json();
    dispatch({
      type: carouselConstants.GET_CAROUSEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: carouselConstants.GET_CAROUSEL_FAILURE,
      payload: error,
    });
  }
};

// Action to update a carousel
export const updateCarousel = (id, carouselData) => (dispatch) => {
  dispatch({ type: carouselConstants.UPDATE_CAROUSEL_REQUEST });

  const formData = new FormData();
  if (carouselData.files && carouselData.files.length) {
    carouselData.files.forEach((file) => {
      formData.append('files', file);
    });
  }

  fetch(`http://localhost:8082/carousel/update/${id}`, {
    method: 'PUT',
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw new Error(data.message || 'Failed to update carousel');
        });
      }
      return response.json();
    })
    .then((data) =>
      dispatch({
        type: carouselConstants.UPDATE_CAROUSEL_SUCCESS,
        payload: data,
      })
    )
    .catch((error) =>
      dispatch({
        type: carouselConstants.UPDATE_CAROUSEL_FAILURE,
        payload: error.toString(),
      })
    );
};

// Action to delete a carousel
export const deleteCarousel = (id) => (dispatch) => {
  dispatch({ type: carouselConstants.DELETE_CAROUSEL_REQUEST });

  fetch(`http://localhost:8082/carousel/delete/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      }
      return response.json();
    })
    .then((data) =>
      dispatch({
        type: carouselConstants.DELETE_CAROUSEL_SUCCESS,
        payload: id,
      })
    )
    .catch((error) =>
      dispatch({
        type: carouselConstants.DELETE_CAROUSEL_FAILURE,
        payload: error.message,
      })
    );
};

// Action to count carousels
export const countCarousels = () => (dispatch) => {
  dispatch({ type: carouselConstants.COUNT_CAROUSELS_REQUEST });

  fetch('http://localhost:8082/carousel/count')
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: carouselConstants.COUNT_CAROUSELS_SUCCESS,
        payload: data.carouselCount,
      })
    )
    .catch((error) =>
      dispatch({
        type: carouselConstants.COUNT_CAROUSELS_FAILURE,
        payload: error,
      })
    );
};
