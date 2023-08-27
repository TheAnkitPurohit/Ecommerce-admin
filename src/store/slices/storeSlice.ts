import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

// Define a type for the slice state
interface AuthState {
  isOpen: boolean;
  isClosable: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  isOpen: false,
  isClosable: false,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
    open: (state) => {
      state.isOpen = true;
    },
    setIsClosable: (state) => {
      state.isClosable = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { resetState, open, close, setIsClosable } = storeSlice.actions;

export default storeSlice.reducer;

export const selectOpen = (state: RootState) => state.store.isOpen;
export const selectIsClosable = (state: RootState) => state.store.isClosable;
