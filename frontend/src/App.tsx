import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

// imported page and component
import { HeaderMenu } from "./components/HerderMenu";
import Dashboard from "./pages/Dashboard";
import { SignupForm } from "./pages/SignupForm";
import { LoginForm } from "./pages/LoginForm";

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
        <HeaderMenu />
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
