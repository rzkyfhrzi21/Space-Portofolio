"use client";

import { useState, type ReactNode } from "react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { makeStore } from "@/store";
import { SmoothScroll } from "@/components/SmoothScroll";
import i18n from "@/lib/i18n";

export function Providers({ children }: { children: ReactNode }) {
  const [store] = useState(makeStore);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <SmoothScroll>{children}</SmoothScroll>
      </I18nextProvider>
    </Provider>
  );
}
