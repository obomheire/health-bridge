"use client";

import { createContext, useContext, useState } from "react";

const ErrorContext = createContext({
  error: null,
  setError: () => {},
  clearError: () => {},
});

export function ErrorProvider({ children }) {
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
}
