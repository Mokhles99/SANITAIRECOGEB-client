// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {thunk} from 'redux-thunk';
// import formulaireReducer from './reducers/formulaire.reducer';  // Vérifiez que ce chemin est correct
// import productReducer from './reducers/product.reducer';  // Vérifiez que ce chemin est correct


// const rootReducer = combineReducers({
//   formulaire: formulaireReducer,
//   product: productReducer
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import formulaireReducer from './reducers/formulaire.reducer';
import productReducer from './reducers/product.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './reducers/cart.reducer';
import carttwoReducer from './reducers/carttwo.reducer';
import aboutReducer from "./reducers/about.reducer";
import catalogueReducer from "./reducers/catalogue.reducer";
import carouselReducer from "./reducers/carousel.reducer";
const rootReducer = combineReducers({
  formulaire: formulaireReducer,
  product: productReducer,
  cart:cartReducer,
  carttwo:carttwoReducer,
  about:aboutReducer,
  catalogue:catalogueReducer,
  carousel:carouselReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['product','formulaire'] // vous pouvez choisir les réducteurs que vous voulez persister
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
