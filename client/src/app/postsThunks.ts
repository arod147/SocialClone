import { AppThunk } from "./store";
import * as api from '../api/index.js'
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "./postsSlice";


export const getPosts = () : AppThunk => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      dispatch(FETCH_ALL(data));
    } catch (error) {
      console.log(error);
    }
  };

export const createNewPost = (post: object) : AppThunk => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch(CREATE(data))
    } catch (error) {
     console.log(error)
    }
}

export const updatePost = (id: number, post: object) : AppThunk => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch(UPDATE(data));
    } catch (error) {
      console.log(error);
    }
  };
  
  export const likePost = (id: number) : AppThunk => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch(LIKE(data));
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deletePost = (id: number) : AppThunk => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch(DELETE(id));
    } catch (error) {
      console.log(error);
    }
  };