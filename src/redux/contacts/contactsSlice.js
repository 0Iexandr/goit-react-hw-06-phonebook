import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {items: []},
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items = [action.payload, ...state.items]
      },
      prepare: (newContact) => {
        return {
          payload: {...newContact, id: nanoid()}
        }
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload)
    },
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;