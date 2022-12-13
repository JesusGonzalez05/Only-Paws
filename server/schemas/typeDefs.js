const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

profile-model
  type Profile {
    name: String
    aboutMe: String
    img: String
    # Add a queryable field to retrieve a single Professor object
    # post: [Post]!
    
  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
  }

  type Query {
    user(userId: ID!): User
profile-model
    profile(userId: ID!): Profile
    
    post(postId: ID!): Post

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    # add img to profile
    addImg(profileName: String, img: String): Profile
    # add about me
    addAboutMe(name: String, aboutMe: String): Profile
    # add profile
    addProfile(name: String, aboutMe: String, img: String): Profile

    addPost(posttText: String!): Post
    removePost(postId: ID!): Post

  }
`;

module.exports = typeDefs;
