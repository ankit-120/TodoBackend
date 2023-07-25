import express from 'express';
import { User } from '../models/userModel.js';
import { createUser, getAllUser, getUserById } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUser);

router.post('/', createUser);

router.get('/:id', getUserById);

export default router;
