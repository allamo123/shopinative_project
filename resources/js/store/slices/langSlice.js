import { createSlice } from "@reduxjs/toolkit";

const LangSlice = createSlice({
    name: 'Lang',
    initialState: {
      direction: localStorage.getItem('lang') === 'ar' ? "rtl" : "ltr",
    },
    reducers: {
      setLangDirection: (state, action) => {
          console.log(action.payload)
          state.direction = action.payload;
      },
    }
});

export const selectedDirection = (state) => state.langDirection.direction;


export const { setLangDirection } = LangSlice.actions;

export default LangSlice.reducer;
  