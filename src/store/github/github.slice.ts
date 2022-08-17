import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const FAV_USER = 'favour'

export interface IFavourite {
    favourites: string[]
}

const initialState: IFavourite = {
    favourites: JSON.parse(localStorage.getItem(FAV_USER) ?? '[]')
}
const GitHubSlice = createSlice({
    name:'@github/slice',
    initialState,
    reducers: {
        addFavour: (state, action: PayloadAction<string>) => {
            state.favourites.push(action.payload)
            localStorage.setItem(FAV_USER, JSON.stringify(state.favourites))
        },
        deleteFavour: (state, action: PayloadAction<string>) => {
            state.favourites = state.favourites.filter((item) => item !== action.payload)
            localStorage.setItem(FAV_USER, JSON.stringify(state.favourites))
        },
        
    }
}) 

export const {addFavour, deleteFavour} = GitHubSlice.actions
export const GitHubSliceReducer =  GitHubSlice.reducer;

export const favourSelector = (state: any) => state.gitHubFavour;