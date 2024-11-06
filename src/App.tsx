import { RouterProvider } from "react-router-dom";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
}

export default App;
