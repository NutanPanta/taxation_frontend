import { apiSlice } from '../../../app/apiSlice';
// config
import { HOST_API } from '../../../config';

// ----------------------------------------------------------------------

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ data }) => ({
        url: `${HOST_API}/token/`,
        method: 'POST',
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: ({ data }) => ({
        url: `${HOST_API}/user/register/`,
        method: 'POST',
        body: data,
      }),
    }),
    userDetails: builder.query({
      query: () => ({
        url: `${HOST_API}/user/`,
        method: 'GET',
      }),
    }),
    refreshToken: builder.mutation({
      query: ({ refresh }) => ({
        url: `${HOST_API}/token/refresh/`,
        method: 'POST',
        body: { refresh },
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useUserDetailsQuery,
  useLazyUserDetailsQuery,
  useRefreshTokenMutation,
} = authApi;

export default authApi;
