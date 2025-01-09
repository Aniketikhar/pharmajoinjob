import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    "All",
    "Internships",
    "CDM",
    "Clinical Research",
    "Medical Writer",
    "Packing Jobs",
    "Pharmacovigilance",
    "Production",
    "QA",
    "QC",
    "Regulatory Affairs",
    "Research & Development",
  ],
  selectedCategory: "All",
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory: (state) => {
      state.selectedCategory = null;
    },
  },
});

export const {  selectCategory, clearSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;