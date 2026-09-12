import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import environment from "@/app/config/environment";

export const store = configureStore({
  reducer: {
    // TODO: add reducers here
    _placeholder: (state = null) => state,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    return environment.isDev ? middlewares.concat(logger) : middlewares;
  },
  devTools: environment.isDev,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
