import {gql} from "@apollo/client";

export const GET_ROCKETS = gql`
  query ExampleQuery {
    rockets {
      id
      description
      name
    }
  }
`;