import express, { Request, Response, Router } from 'express';
import resizeImage from '../../utilities/images';
import path from 'path';
import fs from 'fs';

const images: Router = express.Router();

images.get('/', async (req: Request, res: Response) => {
  const filename: string = req.query.filename as string;
  const imageName: string[] = String(filename).split('.');
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  const inputImage: string = path.join(
    __dirname,
    `../../../assets/full/${filename}`
  );
  const outputImage: string = path.join(
    __dirname,
    `../../../assets/thumb/${imageName[0]}_${width}_${height}.jpg`
  );

  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    res.status(400).send('Error in height or width!');
  } else {
    if (fs.existsSync(inputImage)) {
      try {
        if (fs.existsSync(outputImage)) {
          res.status(200).sendFile(outputImage);
        } else {
          await resizeImage(filename, width, height);
          res.status(200).sendFile(outputImage);
        }
      } catch (err) {
        res
          .status(500)
          .send('Error occurred during Sharp image resize step...');
      }
    } else {
      res.status(400).send(`The image ${filename} does not exist!`);
    }
  }
});

export default images;
