import Apollo from 'apollo-server' //apolo server
import GT from 'graphql-tools' //graphql tools


const typeDefs = `

    type Book {
        id: ID
        title: String
        year: Int
    }

    type Query {

    }
`

const resolvers = {}
 
const schema = GT.makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new Apollo.ApolloServer({
    schema,
    context: () => {
        return{
            user:{
                id: null
            }
        }
    }
})

server.init = () =>{
    server.listen(process.env.PORT || 3000, '0.0.0.0').then(()=>{
        console.log("iam listening");
    })
}