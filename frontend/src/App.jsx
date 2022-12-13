import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { useAuthContext } from "./hooks/useAuthContext.js";

// imported page and component
import { ProtectedRoute } from "./components/ProtectedRoute";
import { SignupForm } from "./pages/SignupForm";
import { LoginForm } from "./pages/LoginForm";
import { Notfound } from "./pages/Notfound";

// User pages and components
import { Dashboard } from "./pages/user/Dashboard";
import { NavbarMenu } from "./components/user/NavbarMenu";

export default function App() {
  const { user } = useAuthContext();
  return (
    <Router>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
        }}
      >
        {user && <NavbarMenu />}
        {/* Routes */}
        <Routes>
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </MantineProvider>
    </Router>
  );
}
