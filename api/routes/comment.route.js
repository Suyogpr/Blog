import express from 'express';
import { addComment, getCommentsByPost } from '../controllers/comment.controller.js';

const router = express.Router();

router.post('/:id', addComment);
router.get('/:id', getCommentsByPost);

export default router;
