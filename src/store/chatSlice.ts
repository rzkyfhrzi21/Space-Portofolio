import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ChatMessage {
  id: string;
  role: "ai" | "user";
  text: string;
}

interface ChatState {
  messages: ChatMessage[];
  input: string;
}

const initialState: ChatState = {
  messages: [
    {
      id: "welcome",
      role: "ai",
      text: 'Hai! Saya AI Twin Aditya. Kamu bisa bertanya tentang pengalaman, tech stack, atau proyek yang pernah ia bangun. 💬 Coba: "Apa tech stack-mu?"',
    },
  ],
  input: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    sendMessage(state, action: PayloadAction<string>) {
      state.messages.push({
        id: `u-${Date.now()}`,
        role: "user",
        text: action.payload,
      });
      state.input = "";
    },
    receiveMessage(state, action: PayloadAction<string>) {
      state.messages.push({
        id: `a-${Date.now()}`,
        role: "ai",
        text: action.payload,
      });
    },
  },
});

export const { setInput, sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
