// schema.js
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    appetizers: [MenuItem]
    entrees: [MenuItem]
    sandwiches: [MenuItem]
    soupSaladCombos: [MenuItem]
    fajitas: [MenuItem]
    tacos: [MenuItem]
    enchiladas: [MenuItem]
    quiche: [MenuItem]
    greenSalads: [MenuItem]
  }

  type MenuItem {
    name: String
    description: String
    price: Float
  }
`);

module.exports = schema;
