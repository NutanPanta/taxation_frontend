import { apiSlice } from '../../../app/apiSlice';
// config
import { HOST_API } from '../../../config';

// ----------------------------------------------------------------------

export const appApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    taxPayerDetails: builder.query({
      query: () => ({
        url: `${HOST_API}/taxpayer/`,
        method: 'GET',
      }),
      providesTags: ['TaxDocs'],
    }),
    createTaxPayerDetails: builder.mutation({
      query: ({ data }) => ({
        url: `${HOST_API}/taxpayer/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['TaxDocs'],
    }),
    updateTaxPayerDetails: builder.mutation({
      query: ({ data }) => ({
        url: `${HOST_API}/taxpayer/`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['TaxDocs'],
    }),
    reviewTaxPayerDetails: builder.mutation({
      query: () => ({
        url: `${HOST_API}/taxpayer/review/`,
        method: 'POST',
      }),
      invalidatesTags: ['TaxDocs'],
    }),
  }),
});

export const {
  useTaxPayerDetailsQuery,
  useCreateTaxPayerDetailsMutation,
  useUpdateTaxPayerDetailsMutation,
  useReviewTaxPayerDetailsMutation,
} = appApi;
