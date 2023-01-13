import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $breed: String!, $password: String!) {
  addUser(username: $username, breed: $breed, password: $password) {
    token
    user {
      username
      breed
      _id
    }
  }
}
`;

export const LOGIN_USER = gql`
 mutation login($breed: String!, $password: String!) {
  login(breed: $breed, password: $password) {
    token
    user {
      _id
      username
      breed
    }
  }
}
`;

export const ADD_PROFILE = gql`
mutation Mutation($name: String, $aboutMe: String, $img: String, $originalUser: String) {
  addProfile(name: $name, aboutMe: $aboutMe, img: $img, originalUser: $originalUser) {
    _id
    aboutMe
    img
    name
    originalUser
    posts {
      _id
      createdAt
      postAuthor
      postText
    }
  }
}
`;



export const ADD_POST = gql`
mutation Mutation($profileId: ID!, $postText: String!) {
  addPosts(profileId: $profileId, postText: $postText) {
    _id
    name
    originalUser
    aboutMe
    img
    posts {
      _id
      postText
      createdAt
    }
  }
}
`;