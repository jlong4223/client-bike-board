import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../redux/reducers";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["userInfo"], // this is the reducer(s) that will be saved
};

const pReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

const persistor = persistStore(store);

export { persistor, store };
