import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface State {
    posts: any[]
}

const initialState: State = {
    posts: []
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        FETCH_ALL: (state, posts: PayloadAction<object[]>) => {
            state.posts = posts.payload
        },
        CREATE: (state, newPost: PayloadAction<object>) => {
            state.posts = [...state.posts, newPost.payload]
        },
        LIKE: (state, selectedPost: PayloadAction<any>) => {
            state.posts.map((post) => (post._id === selectedPost.payload._id ? selectedPost.payload : post))
        },
        UPDATE: (state, selectedPost: PayloadAction<any>) => {
            state.posts.map((post) => (post._id === selectedPost.payload._id ? selectedPost.payload : post))
        },
        DELETE: (state, selectedPost: PayloadAction<any>) => {
            state.posts.filter((post) => post._id !== selectedPost.payload);
        },

    }
});

export const {
    FETCH_ALL,
    CREATE,
    LIKE,
    UPDATE,
    DELETE
} = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export default postSlice.reducer