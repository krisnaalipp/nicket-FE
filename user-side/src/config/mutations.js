import { gql } from "@apollo/client";

export const PURCHASE_TICKET = gql`
  mutation Mutation($inputTransaction: InputTransaction) {
    createTransaction(inputTransaction: $inputTransaction) {
      id
      message
    }
  }
`;
export const POST_ORDER = gql`
  mutation Mutation($postOrderId: ID) {
    postOrder(id: $postOrderId) {
      transactionToken
    }
  }
`;

export const UPDATE_ISPAID = gql`
  mutation Mutation($updateTransaction: UpdateTransactiom) {
    updateTransaction(updateTransaction: $updateTransaction) {
      message
    }
  }
`;
