import sharp from 'sharp';
import path from 'path';

async function resizeImage(filename: string, width: number, height: number) {
  const words: string[] = filename.split('.');
  try {
    await sharp(
      path.join(__dirname, `../../assets/full/${words[0]}.${words[1]}`)
    )
      .resize({
        width: width,
        height: height,
      })
      .toFile(
        path.join(
          __dirname,
          `../../assets/thumb/${words[0]}_${width}_${height}.${words[1]}`
        )
      );
  } catch (error) {
    console.log(error);
  }
}

export default resizeImage;
