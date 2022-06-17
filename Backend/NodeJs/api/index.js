import AP from 'apollo-server'
import { makeExecutableSchema } from "@graphql-tools/schema";

const authors = [
    {
        id:1,
        name: "Ronaldo",
        age: 18,
    },
    {
        id:2,
        name: "Ronaldo",
        age: 18,
    }
]
const books = [
    {
        id:1,
        title: "Senhor dos aneis",
        year: 2002,
        author: 1
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
        author: Author
    }

    type Author {
        id:ID!
        name: String
        age: Int
    }

    type Query {
        Books(
            id:ID
            title: String
            year: Int
        ):[Book]
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
    },
    Book: {
        author: (parent) => {
            return authors.find(author => author.id == parent.author)
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
        console.log(`Deu certo o servidor está escutando na porta 3000`)
    })
}

server.init()