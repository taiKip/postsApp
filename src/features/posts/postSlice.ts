import { apiSlice } from "../api/apiSlice";
import { IPost } from "../api/apiSlice";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const postsAdapter = createEntityAdapter<IPost>({
  // selectId:(post:IPost)=>post.id,
  sortComparer: (a, b) => b.date?.localeCompare(a.date),
});
const initialState = postsAdapter.getInitialState();
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      transformResponse: (responseData: IPost[]) => {
        let min = 1;
        const loadedPosts = responseData.map((post) => {
          if (!post?.date)
            post.date = sub(new Date(), { minutes: min++ }).toISOString();
          if (!post?.reactions)
            post.reactions = {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            };
          return post;
        });
        return postsAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: (result, error, arg) =>
        result
          ? [...result.ids.map((id) => ({ type: "Posts" as const, id })),
        {type:"Posts", id:"LIST"}
        ]
          : [{type:"Posts",id:"LIST"}],
    }),
  }),
});

export const { useGetPostsQuery } = extendedApiSlice;
