import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch data with async on readux wtih axios

export const fetchEvents: any = createAsyncThunk("events/fetchEvents", async () => {
  const res = await axios.get('https://mtpog093.github.io/api_test/data.json');
  return res.data;
});

// event readust toolkit create lice

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    isLoading: false,
    events: [],
    error: null
  },
  reducers: {

  },
  extraReducers: {
    // pending request 
    [fetchEvents.pending]: function (state: any) {
      state.isLoading = true;
    },

    // request data success

    [fetchEvents.fulfilled]: (state: any, action: any) => {
      state.isLoading = false;
      state.events = action.payload;
    },

       // request failed
    [fetchEvents.rejected]: (state: any, action: any) => {
      state.isLoading = false;
      state.events = [];
      state.error = action.error.message;
    },
  }
})

export default eventSlice.reducer;