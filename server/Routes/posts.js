import express from 'express';
import { createPost, deletePost, getPost, getPosts, likePost, updatePost } from '../Controllers/posts.js';

const postRoutes = express.Router();

 postRoutes.get('/', getPosts);
 postRoutes.post('/', createPost);
 postRoutes.get('/:id', getPost);
 postRoutes.patch('/:id', updatePost);
 postRoutes.delete('/:id', deletePost);
 postRoutes.patch('/:id/likePost', likePost);

export default postRoutes;