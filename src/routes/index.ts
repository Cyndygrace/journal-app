import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(_req: express.Request, res: express.Response) {
  res.send({message: 'this is home'})
});

export default router;
