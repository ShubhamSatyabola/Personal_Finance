import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../features/Dashboard/dashboardSlice';
import  authReducer  from '../features/auth/authSlice';
export const store = configureStore({
  reducer: {
    auth:authReducer,
    transaction: transactionReducer,
  },
});
