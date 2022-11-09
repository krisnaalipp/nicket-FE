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

export const GET_MATCHES = gql`
  query Query {
    getMatch {
      id
      opponent
      opponentLogo
      result
      startDate
      availableSeats
    }
  }
`;

export const GET_TRANSACTIONSBYID = gql`
  query GetTransaction($getTransactionByMatchId: ID) {
    getTransactionByMatch(id: $getTransactionByMatchId) {
      id
      ktp
      email
      categorySeat
      ticketPrice
      amount
      MatchId
      isPaid
      createdAt
      Seats {
        seatNumber
      }
    }
  }
`;
