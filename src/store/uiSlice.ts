import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  mobileMenuOpen: boolean;
  activeSection: string;
  scrolled: boolean;
  chatOpen: boolean;
  muxReady: string[];
}

const initialState: UiState = {
  mobileMenuOpen: false,
  activeSection: "home",
  scrolled: false,
  chatOpen: false,
  muxReady: [],
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
    setChatOpen(state, action: PayloadAction<boolean>) {
      state.chatOpen = action.payload;
    },
    markMuxReady(state, action: PayloadAction<string>) {
      if (!state.muxReady.includes(action.payload)) {
        state.muxReady.push(action.payload);
      }
    },
  },
});

export const {
  toggleMobileMenu,
  setMobileMenu,
  setActiveSection,
  setScrolled,
  setChatOpen,
  markMuxReady,
} = uiSlice.actions;
export default uiSlice.reducer;
