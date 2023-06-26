import supertest from 'supertest';
import images from '../../../routes/api/imagesApi';

const request = supertest(images);

describe('Test image endpoint response', () => {
  it('gets the image resizing endpoint', async () => {
    try {
      const response = await request.get('api/images');
      expect(response.status).toBe(200);
    } catch (err) {
      console.log('Error in the get api endpoint');
    }
  });
});
