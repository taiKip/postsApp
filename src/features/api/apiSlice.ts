import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const POST_API = "http://localhost:3500";
export interface IReaction {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}
export interface IPost {
  title: string;
  body: string;
  userId: number;
  date: string;
  reactions: IReaction;
  id: number;
}
export const apiSlice = createApi({
  reducerPath: "api", //helps the code know when we attach it to the store ,where are we keeping the data
  baseQuery: fetchBaseQuery({ baseUrl: POST_API }),
  endpoints: (builder) => ({}),
  tagTypes:["Posts"]
});
