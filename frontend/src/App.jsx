import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// imported page and component
import { ProtectedRoute } from "./components/ProtectedRoute";
import { SignupForm } from "./pages/SignupForm";
import { LoginForm } from "./pages/LoginForm";
import { Notfound } from "./pages/Notfound";

// User pages and components
import { Dashboard } from "./pages/user/Dashboard";
import { Battle } from "./pages/user/Battle";
import { Feed } from "./pages/user/Feed";
import { RateUs } from "./pages/user/RateUs";
import { Settings } from "./pages/user/Settings";
import { Account } from "./pages/user/Account";
import { Dashboard2 } from "./pages/user/Dashboard";

export default function App() {
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
          <Route
            path="/battle"
            element={
              <ProtectedRoute>
                <Battle />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rate-us"
            element={
              <ProtectedRoute>
                <RateUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
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
