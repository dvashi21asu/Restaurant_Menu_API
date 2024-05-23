// tests/menu.test.js
const request = require('supertest');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema');
const resolvers = require('../resolvers');

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: false,
}));

describe('GraphQL API', () => {
  it('should return all appetizers', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({ query: '{ appetizers { name description price } }' });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.appetizers).toBeInstanceOf(Array);
    expect(response.body.data.appetizers.length).toBeGreaterThan(0);
    expect(response.body.data.appetizers[0]).toHaveProperty('name');
    expect(response.body.data.appetizers[0]).toHaveProperty('description');
    expect(response.body.data.appetizers[0]).toHaveProperty('price');
  });

  it('should return all entrees', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({ query: '{ entrees { name description price } }' });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.entrees).toBeInstanceOf(Array);
    expect(response.body.data.entrees.length).toBeGreaterThan(0);
    expect(response.body.data.entrees[0]).toHaveProperty('name');
    expect(response.body.data.entrees[0]).toHaveProperty('description');
    expect(response.body.data.entrees[0]).toHaveProperty('price');
  });

  it('should return all sandwiches', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({ query: '{ sandwiches { name description price } }' });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.sandwiches).toBeInstanceOf(Array);
    expect(response.body.data.sandwiches.length).toBeGreaterThan(0);
    expect(response.body.data.sandwiches[0]).toHaveProperty('name');
    expect(response.body.data.sandwiches[0]).toHaveProperty('description');
    expect(response.body.data.sandwiches[0]).toHaveProperty('price');
  });

  it('should return all soup and salad combos', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({ query: '{ soupSaladCombos { name description price } }' });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.soupSaladCombos).toBeInstanceOf(Array);
    expect(response.body.data.soupSaladCombos.length).toBeGreaterThan(0);
    expect(response.body.data.soupSaladCombos[0]).toHaveProperty('name');
    expect(response.body.data.soupSaladCombos[0]).toHaveProperty('description');
    expect(response.body.data.soupSaladCombos[0]).toHaveProperty('price');
  });

  it('should return all fajitas', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({ query: '{ fajitas { name description price } }' });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.fajitas).toBeInstanceOf(Array);
    expect(response.body.data.fajitas.length).toBeGreaterThan(0);
    expect(response.body.data.fajitas[0]).toHaveProperty('name');
    expect(response.body.data.fajitas[0]).toHaveProperty('description');
    expect(response.body.data.fajitas[0]).toHaveProperty('price');
  });

  it('should return all tacos', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({ query: '{ tacos { name description price } }' });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.tacos).toBeInstanceOf(Array);
    expect(response.body.data.tacos.length).toBeGreaterThan(0);
    expect(response.body.data.tacos[0]).toHaveProperty('name');
    expect(response.body.data.tacos[0]).toHaveProperty('description');
    expect(response.body.data.tacos[0]).toHaveProperty('price');
  });

  it('should return all enchiladas', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({ query: '{ enchiladas { name description price } }' });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.enchiladas).toBeInstanceOf(Array);
    expect(response.body.data.enchiladas.length).toBeGreaterThan(0);
    expect(response.body.data.enchiladas[0]).toHaveProperty('name');
    expect(response.body.data.enchiladas[0]).toHaveProperty('description');
    expect(response.body.data.enchiladas[0]).toHaveProperty('price');
  });

  it('should return all quiche items', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({ query: '{ quiche { name description price } }' });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.quiche).toBeInstanceOf(Array);
    expect(response.body.data.quiche.length).toBeGreaterThan(0);
    expect(response.body.data.quiche[0]).toHaveProperty('name');
    expect(response.body.data.quiche[0]).toHaveProperty('description');
    expect(response.body.data.quiche[0]).toHaveProperty('price');
  });

  it('should return all green salads', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({ query: '{ greenSalads { name description price } }' });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.greenSalads).toBeInstanceOf(Array);
    expect(response.body.data.greenSalads.length).toBeGreaterThan(0);
    expect(response.body.data.greenSalads[0]).toHaveProperty('name');
    expect(response.body.data.greenSalads[0]).toHaveProperty('description');
    expect(response.body.data.greenSalads[0]).toHaveProperty('price');
  });
});
