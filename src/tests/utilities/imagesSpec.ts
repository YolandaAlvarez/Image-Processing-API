import fs from 'fs';
import path from 'path';
import resizeImage from '../../utilities/images';

describe('functions testing the operations using images', () => {
  describe('test resizing an image', () => {
    const imageName = 'encenadaport.jpg';
    const imageOutName = 'encenadaport_100_100.jpg';
    const imagePath = path.join(__dirname, `../../../assets/full/${imageName}`);
    const imageOutPath = path.join(
      __dirname,
      `../../../assets/thumb/${imageOutName}`
    );

    beforeAll(() => {
      try {
        if (fs.existsSync(imagePath)) {
          resizeImage(imageName, 100, 100);
        }
      } catch (err) {
        console.error('Error occurred during Sharp image resize step...');
      }
    });

    it(`resizeImage generated ${imageOutName}`, () => {
      expect(fs.existsSync(imageOutPath)).toBeTruthy();
    });
  });
});
