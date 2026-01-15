import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const TaskContext = createContext(null);
const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useTasks = () => useContext(TaskContext);
export const useColorMode = () => useContext(ColorModeContext);

export function AppProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [mode, setMode] = useState("light");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme({ palette: { mode } }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </TaskContext.Provider>
    </ColorModeContext.Provider>
  );
}
