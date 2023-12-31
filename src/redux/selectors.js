import { createSelector } from '@reduxjs/toolkit';
export const selectLoading = state => state.contactsKey.isLoading;
export const selectContacts = state => state.contactsKey.contacts;
export const selectError = state => state.contactsKey.error;
export const selectFilter = state => state.filterKey.filter;

export const selectorVisibleItems = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
