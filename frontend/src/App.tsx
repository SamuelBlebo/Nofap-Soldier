import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// imported page
import Dashboard from "./pages/Dashboard";
import { AuthenticationForm } from "./pages/AuthenticationForm";

export default function App() {
  return (
    <Router>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<AuthenticationForm />} />
        </Routes>
      </MantineProvider>
    </Router>
  );
}
