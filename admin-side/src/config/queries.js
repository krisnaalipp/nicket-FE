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
      Transactions {
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
  }
`;

export const GET_NEWEST_MATCH = gql`
  query GetTransaction {
    getOneMatch {
      id
      opponent
      opponentLogo
      result
      startDate
      availableSeats
      Transactions {
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
  }
`;
