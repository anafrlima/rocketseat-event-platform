import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oy0x5y1d1v01z4cxnd1elg/master",
  cache: new InMemoryCache(),
});
