import AP from 'apollo-server'
import { makeExecutableSchema } from "@graphql-tools/schema";

const persons = [
    {
        id:1,
        name: "Ronaldo",
        age: 18,
    }
]
const books = [
    {
        id:1,
        title: "Senhor dos aneis",
        year: 2002,
    },
    {
        id:2,
        title: "Clube da Luta",
        year: 2020,
    },
    {
        id:3,
        title: "Titanic",
        year: 2025,
    }
]


const typeDefs = `

    type Book {
        id: ID!
        title: String!
        year: Int!
    }

    type Person {
        id:ID!
        name: String!
        age: Int
    }

    type Query {
        Books(
            id:ID
            title: String
            year: Int
        ):[Book]

        Person(
            id:ID
        ):[Person]
    }

`

const resolvers = {
    Query:{
        Books: (_ , params) => {
            console.log(params)
            if(params.id){
                return books.filter(book => book.id == params.id)
            }
            if(params.title){
                return books.filter(book => book.title == params.title)
            }
            if(params.year){
                return books.filter(book => book.year == params.year)
            }
            return books
        },

        Person: (_, params) => {
            console.log("peron" + params)
            return persons
        }
    }
}
 
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new AP.ApolloServer({
    schema,
})

server.init = () =>{
    server.listen(process.env.PORT || 3000, '0.0.0.0').then(() => {
        console.log(`eu certo o servidor está escutando na porta 3000`)
    })
}

server.init()