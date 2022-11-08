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

export const LOGIN_ADMIN = gql`
  mutation LoginAdmin($inputLogin: LoginInput) {
    loginAdmin(inputLogin: $inputLogin) {
      access_token
    }
  }
`;

export const REGISTER = gql`
  mutation Mutation($inputAdmin: AdminInput) {
    createAdmin(inputAdmin: $inputAdmin) {
      message
    }
  }
`;

export const EDIT_RESULT = gql`
  mutation Mutation($updateResultId: ID, $inputResult: InputResult) {
    updateResult(id: $updateResultId, inputResult: $inputResult) {
      message
    }
  }
`;

export const ADD_MATCH = gql`
  mutation Mutation($inputMatch: InputMatch) {
    createMatch(inputMatch: $inputMatch) {
      message
    }
  }
`;
