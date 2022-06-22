import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);

  return <p>ignite lab</p>;
}

export default App;
