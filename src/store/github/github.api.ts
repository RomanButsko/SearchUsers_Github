import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, IUserRepo, ServerResponse } from '../../models/models';

export const githubApi = createApi({
    reducerPath: "github/api",
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
    tagTypes: ['Users'],
    refetchOnFocus: true,
    endpoints: (builder) => ({ 
        getUser: builder.query<IUser[], string>({
            query: (search: string) =>  ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
              }),
              transformResponse: (response: ServerResponse<IUser>) => response.items
        }),
        getUserRepositories: builder.query<IUserRepo[], string>({
            query: (username: string) =>  ({
                url: `users/${username}/repos`
              })
        })
    })

})


export const {useGetUserQuery, useLazyGetUserRepositoriesQuery} = githubApi;


            // providesTags: (result) =>
            //   result
            //     ? [
            //         ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            //         { type: 'Posts', id: 'LIST' },
            //       ]
            //     : [{ type: 'Posts', id: 'LIST' }],