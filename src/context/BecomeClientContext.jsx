"use client";

import { createContext, useCallback, useContext, useState } from "react";
import BecomeClient from "@/components/BecomeClient/BecomeClient";

const BecomeClientContext = createContext(null);

export function BecomeClientProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BecomeClientContext.Provider value={open}>
      {children}
      <BecomeClient isOpen={isOpen} onClose={close} />
    </BecomeClientContext.Provider>
  );
}

export function useBecomeClient() {
  const open = useContext(BecomeClientContext);
  if (!open) {
    throw new Error("useBecomeClient must be used within a BecomeClientProvider");
  }
  return open;
}
