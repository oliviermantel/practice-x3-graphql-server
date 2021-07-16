# GraphQL server using JSON WEB Token

## Install local repo
```bash
$ cd practice-x3-graphql-server
$ npm i 
```

## To start the Graphql server
```bash
$ npm start
Running a GraphQL API server at localhost:4000/graphql
```
## Usage

Open with a internet browser : http://localhost:4000/graphql

### Graphql request

Test with the Graphql request next :
```graphql
{token(clientId:"aa",secretOrPrivateKey:"hh",user:"kkk")}
```

### Graphql result

```json
{
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhYSIsInN1YiI6ImtrayIsImF1ZCI6IiIsImlhdCI6MTYyNjI3NzkyNywiZXhwIjoxNjI2Mjc4NTI3fQ"
  }
}
```
