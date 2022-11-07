import { gql } from "@apollo/client";

export const DELETE_NEWS = gql`
  mutation DeleteNews($deleteNewsId: String) {
    deleteNews(id: $deleteNewsId) {
      message
    }
  }
`;

export const ADD_NEWS = gql`
  mutation Mutation($inputNews: InputNews) {
    createNews(inputNews: $inputNews) {
      message
    }
  }
`;
