import express from 'express';

import { create } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create',create)

// router.get('/user/:userId', getUserPosts);

export default router;