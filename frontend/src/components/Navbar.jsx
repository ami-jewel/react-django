import { Link } from 'react-router-dom';
import './Navbar.css'; // সিএসএস স্টাইল চাইলে আলাদা করতে পারেন

function Navbar() {
  return (
    <nav className="navbar">
      <h2>GreenBD Buying House</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About-US</Link></li>
        <li><Link to="/products">Our Product</Link></li>
        <li><Link to="/csr">CSR</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;