import express from 'express';
import { getUsers, patchUser, postUser } from '../controllers/user.controller'

const router = express.Router();

router.post( '/', postUser);
router.get( '/', getUsers);
router.patch( '/:id', patchUser);

export default router;