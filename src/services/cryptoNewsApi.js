import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeader = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "2cd721e489msh2e35ab8319383d8p1048fdjsnbc1e440cb84f",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// var options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'x-bingapis-sdk': 'true',
//       'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//       'x-rapidapi-key': '2cd721e489msh2e35ab8319383d8p1048fdjsnbc1e440cb84f'
//     }
//   };
