import { gql } from "@apollo/client";

export const readNews = gql`
  query getNews {
    getNews {
      _id
      title
      imgUrl
      description
      tags
    }
  }
`;

export const readNewsById = gql`
  query GetNews($newsByIdId: String) {
    newsById(id: $newsByIdId) {
      _id
      title
      imgUrl
      description
      tags
    }
  }
`;
