import { gql } from "@apollo/client";

export const readNews = gql`
  query getNews {
    getNews {
      _id
      title
      imgUrl
      description
      tags
      createdAt
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
      createdAt
    }
  }
`;

export const getUpcomingMatch = gql`
  query Query {
    getOneMatch {
      id
      opponent
      opponentLogo
      result
      startDate
      availableSeats
    }
  }
`;

export const getMatches = gql`
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

export const getMatchId = gql`
  query Query($getMatchByIdId: ID) {
    getMatchById(id: $getMatchByIdId) {
      id
      opponent
      opponentLogo
      result
      startDate
      availableSeats
    }
  }
`;

export const readLatestNews = gql`
  query GetNews {
    getNewsLimit {
      _id
      title
      imgUrl
      description
      tags
      createdAt
    }
  }
`;

export const getTransactionDetail = gql`
  query GetTransaction($getTransactionDetailId: ID) {
    getTransactionDetail(id: $getTransactionDetailId) {
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
