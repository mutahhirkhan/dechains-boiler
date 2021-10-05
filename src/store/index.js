import storage from "redux-persist/lib/storage";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import tasksReducer from "./../features/testApi/slice";
import signInReducer from "./../features/SignIn/slice";
import dashboardReducer from "./../features/dashboards/slice";
import createBlog from "./../features/createBlog/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["signIn"],
};

const reducers = combineReducers({
  signIn : signInReducer,
  dashboard : dashboardReducer,
  tasks: tasksReducer,
  createBlog:createBlog,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER,PERSIST],
    },
  }),
});

export let persistor = persistStore(store);
