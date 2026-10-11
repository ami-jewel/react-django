import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import OurProducts from './pages/OurProducts';
import CSR from './pages/CSR';
import Contact from './pages/Contact';
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* ন্যাভবার সবার উপরে থাকবে */}
        <Navbar />

        {/* মাঝখানের মূল কন্টেন্ট ও রাউট এলাকা */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/static" element={<Navigate to="/" replace />} />
            <Route path="/static/" element={<Navigate to="/" replace />} />

            {/* মেনু পেজগুলো */}
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<OurProducts />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/contact" element={<Contact />} />

            {/* অন্য কোনো ভুল ইউআরএল দিলে হোমে পাঠাবে */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* ফুটার একদম নিচে থাকবে (Routes এর বাইরে) */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;