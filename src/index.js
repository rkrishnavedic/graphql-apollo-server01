const {ApolloServer} = require("apollo-server");
const connectDB = require('./db/db');
const typeDefs = require('./types');

const resolvers = require('./resolvers');
const models = require('./models');

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:{models}
})

server.listen({port: process.env.PORT || 8000})
    .then(({url})=>{
        console.log(`Server is running at ${url}`)
    })