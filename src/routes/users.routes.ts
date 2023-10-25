import express from 'express';
import { deleteUser, getUserById, getUsers, patchUser, postUser } from '../controllers/user.controller'

const router = express.Router();

router.post( '/', postUser);
router.get( '/', getUsers);
router.patch( '/:id', patchUser);
router.delete( '/:id', deleteUser);
router.get( '/:id', getUserById);

export default router;