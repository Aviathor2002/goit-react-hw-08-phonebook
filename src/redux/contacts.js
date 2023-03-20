import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6415cf7ec42f59a203a7d031.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContactsList: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    postContactsList: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContactsList: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsListQuery,
  useDeleteContactsListMutation,
  usePostContactsListMutation,
} = contactsApi;
