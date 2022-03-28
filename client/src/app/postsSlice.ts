import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface State {
    posts: object[]
}

const initialState: State = {
    posts: []
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        CREATE: (state, newPost: PayloadAction<object>) => {
            state.posts = [...state.posts, newPost]
        }
    }
});

export const {
    CREATE
} = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export default postSlice.reducer