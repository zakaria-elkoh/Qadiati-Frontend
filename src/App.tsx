// src/App.tsx
import { RouterProvider } from "react-router-dom";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "./components/theme-provider";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import { useEffect } from "react";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";
import { setAuthUser, setLoading } from "./store/slices/authSlice";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import LoadingScreen from "./components/LoadingScreen";

function AppContent() {
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        store.dispatch(setLoading(true));
        const currentUser = await getCurrentUser();
        if (currentUser) {
          const userAttributes = await fetchUserAttributes();
          store.dispatch(setAuthUser(userAttributes));
        }
      } catch (error) {
        console.error("No authenticated user:", error);
      } finally {
        store.dispatch(setLoading(false));
      }
    };

    checkAuthStatus();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}

export default App;
