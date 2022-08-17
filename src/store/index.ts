import { GitHubSliceReducer } from './github/github.slice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { githubApi } from './github/github.api';



const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        gitHubFavour: GitHubSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware)
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export {store}

setupListeners(store.dispatch)