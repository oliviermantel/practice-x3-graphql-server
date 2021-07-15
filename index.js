var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const jwt=require('practice-x3-jwt');
const lifetime=600
const signAlgorithm = "HS256";
const options = { algorithm: signAlgorithm}

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    token(clientId: String, secretOrPrivateKey: String,user:String ) :String
  }
`);
 
// The root provides a resolver function for each API endpoint
var root = {
  token: ({clientId, secretOrPrivateKey,user}) => {
    const nowInSeconds = Math.floor(Date.now() / 1000) - 30;
    const expInSeconds = nowInSeconds + (lifetime || 300);
    const payload = {
        iss: clientId,
        sub: user,
        aud: '',
        iat: nowInSeconds,
        exp: expInSeconds,
      };
    
    let ret = jwt.getToken(payload,secretOrPrivateKey,options);
    return ret;
  }
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');