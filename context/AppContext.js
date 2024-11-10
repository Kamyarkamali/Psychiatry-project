"use client";
const { createContext, useState, useContext } = require("react");

const AppContext = createContext();

export function AppProvider({ children }) {
  const [open, setOpen] = useState(true);

  const [hamburger, setHamburger] = useState(false);

  return (
    <AppContext.Provider value={{ open, setOpen, hamburger, setHamburger }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}
