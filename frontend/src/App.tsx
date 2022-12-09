import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// imported page
import Dashboard from "./pages/Dashboard";
import { SignupForm } from "./pages/SignupForm";
import { LoginForm } from "./pages/LoginForm";

export default function App() {
  return (
    <Router>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/Login" element={<LoginForm />} />
        </Routes>
      </MantineProvider>
    </Router>
  );
}
