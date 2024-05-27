import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Settings from "./pages/Settings.jsx"; // Import the new Settings page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} /> {/* Add the new Settings route */}
      </Routes>
    </Router>
  );
}

export default App;
