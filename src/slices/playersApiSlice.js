import { apiSlice } from "./apiSlice";
const PLAYERS_URL = '/api/players';

export const playersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${PLAYERS_URL}/login`,
                method: 'POST',
                body: data,
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${PLAYERS_URL}/register`,
                method: 'POST',
                body: data,
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${PLAYERS_URL}/logout`,
                method: 'POST',
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${PLAYERS_URL}/profile`,
                method: 'PUT',
                body: data,
            })
        }),
    }),
});

export const { 
    useLoginMutation, 
    useRegisterMutation, 
    useLogoutMutation, 
    useUpdateUserMutation 
} = playersApiSlice;
