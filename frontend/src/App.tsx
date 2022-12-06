import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// imported page
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MantineProvider>
    </Router>
  );
}
