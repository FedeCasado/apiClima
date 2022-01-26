const app = require('../src/app');
const request = require('supertest')

describe('GET routes', () => {

  test('Devuelve un valor json ',async () => {
    const respuesta=  await request(app)
      .get('/v1/location')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
      // console.log(respuesta);
      
  });


  test('Devuelve un valor json ',async () => {
    const respuesta=  await request(app)
      .get('/v1/current')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
     // console.log(respuesta);
      
  });

  test('Devuelve un valor json ',async () => {
    const respuesta=  await request(app)
      .get('/v1/forecast')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
      console.log(respuesta);
      
  });
})





