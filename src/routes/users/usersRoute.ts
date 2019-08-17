import {Router} from 'express';
import {createUser} from './userController';
const router = Router();

/* GET users listing. */
router.post('/', createUser);


export default router;
