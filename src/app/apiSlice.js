import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// components
import { logoutUser } from '@features/auth/components/auth';
// config
import { HOST_API } from '@/config';
import { setCredentials } from '@features/auth/redux/auth.slice';

// ----------------------------------------------------------------------

const baseQuery = fetchBaseQuery({
  baseUrl: HOST_API,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const access = getState().auth.access;

    const blacklist = [];

    if (!blacklist.includes(endpoint) && access) {
      headers.set('authorization', `Bearer ${access}`);
    }

    return headers;
  },
});

const refreshToken = async (refresh, args, api, extraOptions) => {
  let response = await baseQuery(
    {
      url: `${HOST_API}/token/refresh/`,
      method: 'POST',
      body: { refresh },
    },
    api,
    extraOptions
  );

  if (response?.error) {
    logoutUser(api.dispatch);
    return;
  }

  // store new token
  const access = response?.data?.access;
  localStorage.setItem('access', access);
  api.dispatch(setCredentials({ access: access }));

  return await baseQuery(args, api, extraOptions);
};

const baseQueryWithAuthValidation = async (args, api, extraOptions) => {
  let response = await baseQuery(args, api, extraOptions);

  let status = response?.error?.status;

  const refresh = api.getState().auth.refresh;

  if (status === 401) {
    if (!refresh) {
      logoutUser(api.dispatch);
    } else {
      response = await refreshToken(refresh, args, api, extraOptions);
    }
  }

  return response;
};

export const apiTags = [
  'Dashboard',
  'Scans',
  'Scan',
  'Favourites',
  'Schedules',
  'Schedule',
  'DemoRequests',
];

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuthValidation,
  tagTypes: apiTags,
  endpoints: (builder) => ({}),
});
