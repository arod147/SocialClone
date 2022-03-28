import { AppThunk } from "./store";
import * as api from '../api/index.js'
import { CREATE } from "./postsSlice";

export const createNewPost = (post: object) : AppThunk => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch(CREATE(data))
    } catch (error) {
     console.log(error)
    }
}