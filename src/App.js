import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Articles from "./pages/articles";

<Route path="/articles" element={<Articles />} />;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Beranda</h1>} />
        <Route path="/about" element={<h1>Tentang Kami</h1>} />
        <Route path="/articles" element={<h1>Artikel</h1>} />
        <Route path="/contact" element={<h1>Kontak</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
