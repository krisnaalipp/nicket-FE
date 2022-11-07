import { gql } from "@apollo/client";

export const GET_NEWS = gql`
  query Query {
    getNews {
      _id
      title
      imgUrl
      description
      tags
    }
  }
`;

export const GET_NEWSBY_ID = gql`
  query Query($newsByIdId: String) {
    newsById(id: $newsByIdId) {
      _id
      title
      imgUrl
      description
      tags
    }
  }
`;
