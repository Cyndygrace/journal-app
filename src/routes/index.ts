import {Router} from 'express';
import users from './users/usersRoute';
const router = Router();

/* GET home page. */
router.get('/', function(_req, res) {
  res.status(200).json({message:'this is home'})
});

router.use('/users', users);

export default router;
