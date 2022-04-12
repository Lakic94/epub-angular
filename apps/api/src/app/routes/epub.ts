import { Router } from 'express';
import { get } from '../controllers/epub'
import multer from 'multer'

// const multer = require("multer");
const upload = multer().single('files')

// const upload = multer()

const router = Router();

router.post('/epub', (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      // An error occurred when uploading 
      console.log(err);
      res.send('error')
      return
    }
    console.log('ovde');
    next()
  })
}, get);

export default router;
