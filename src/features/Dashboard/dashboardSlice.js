import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {deleteTransactions, fetchTransactions, postTransactions} from './dashboardAPI'

const initialState = {
  transactions: [],
  status: "idle",
  totalItems: 0,
}

export const fetchTransactionsAsync = createAsyncThunk(
  "tansaction/fetchAlltransaction",
  async () => {
    const response = await fetchTransactions();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const postTransactionsAsync = createAsyncThunk(
  "tansaction/posttransaction",
  async (data) => {
    const response = await postTransactions(data);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const deleteTransactionAsync = createAsyncThunk(
  "transaction/deleteTransaction",
  async (id) => {
    const response = await deleteTransactions(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {

      state.value += 1;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,

  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactionsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.transactions = action.payload;
      })
      .addCase(postTransactionsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postTransactionsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.transactions.push(action.payload);
      })
      .addCase(deleteTransactionAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTransactionAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const Index = state.transactions.findIndex(
          (item) => item.id === action.payload.id
        );
        state.transactions.splice(Index, 1);
      });
  },
});



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTransaction = (state) => state.transaction.transactions;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default transactionSlice.reducer;
