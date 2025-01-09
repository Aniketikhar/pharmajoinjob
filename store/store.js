
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '@/store/slices/category';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
