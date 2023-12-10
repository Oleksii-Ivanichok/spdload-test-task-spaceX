import {ApolloClient, NormalizedCacheObject, InMemoryCache} from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/explorer",
});

export default client