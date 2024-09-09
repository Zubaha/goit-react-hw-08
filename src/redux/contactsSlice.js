import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder
      // .addCase(fetchContacts.pending, (state) => {
      //   // state.contacts.loading = true;
      //   state.contacts.error = null;
      // })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        //   state.contacts.loading = false;
        state.contacts.items = action.payload;
      })
      // .addCase(fetchContacts.rejected, (state, action) => {
      //   state.contacts.loading = false;
      //   state.contacts.error = action.payload;
      // })
      // .addCase(addContact.pending, (state) => {
      //   // state.contacts.loading = true;
      //   state.contacts.error = null;
      // })
      .addCase(addContact.fulfilled, (state, action) => {
        // state.contacts.loading = false;
        state.contacts.items.push(action.payload);
      })
      // .addCase(addContact.rejected, (state, action) => {
      //   state.contacts.loading = false;
      //   state.contacts.error = action.payload;
      // })
      // .addCase(deleteContact.pending, (state) => {
      //   // state.contacts.loading = true;
      //   state.contacts.error = null;
      // })
      .addCase(deleteContact.fulfilled, (state, action) => {
        // state.contacts.loading = false;
        state.contacts.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      // .addCase(deleteContact.rejected, (state, action) => {
      //   state.contacts.loading = false;
      //   state.contacts.error = action.payload;
      // })
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        (state) => {
          state.contacts.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.contacts.loading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.contacts.loading = false;
          state.contacts.error = action.payload;
        }
      ),
});

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectLoading = (state) => state.contacts.contacts.loading;
export const selectError = (state) => state.contacts.contacts.error;

export const contactsReducer = contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
