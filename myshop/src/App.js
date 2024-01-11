import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/HomePage";
import Headers from "./components/header/header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Admin from "./pages/admin/admin.js";

function App() {
  return (
    <div>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const showHeaderAndFooter = !location.pathname.startsWith("/admin");

  return (
    <>
      {showHeaderAndFooter && <Headers />}
      <Routes>
        <Route path="/user/homepage" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;
