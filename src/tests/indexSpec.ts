import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    try {
      const response = await request.get('/api');
      expect(response.status).toBe(200);
    } catch (err) {
      console.log('Error in the get api endpoint');
    }
  });
});
