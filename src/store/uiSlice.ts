import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  mobileMenuOpen: boolean;
  activeSection: string;
  scrolled: boolean;
}

const initialState: UiState = {
  mobileMenuOpen: false,
  activeSection: "home",
  scrolled: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenu(state, action: PayloadAction<boolean>) {
      state.mobileMenuOpen = action.payload;
    },
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
    setScrolled(state, action: PayloadAction<boolean>) {
      state.scrolled = action.payload;
    },
  },
});

export const { toggleMobileMenu, setMobileMenu, setActiveSection, setScrolled } =
  uiSlice.actions;
export default uiSlice.reducer;
