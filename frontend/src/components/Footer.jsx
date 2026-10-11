import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#1e293b', 
      color: '#fff', 
      padding: '30px 20px', 
      textAlign: 'center', 
      marginTop: '50px' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
          <h3>GreenBD Buying House</h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '10px' }}>
            Your trusted partner in global garments sourcing, manufacturing, and export. Quality delivered worldwide.
          </p>
        </div>
        <div style={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
          <h4>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', color: '#94a3b8', lineHeight: '1.8' }}>
            <li><Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link to="/products" style={{ color: '#94a3b8', textDecoration: 'none' }}>Products</Link></li>
            <li><Link to="/csr" style={{ color: '#94a3b8', textDecoration: 'none' }}>CSR</Link></li>
            <li><Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact Us</Link></li>
          </ul>
        </div>
        <div style={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
          <h4>Contact Info</h4>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '10px' }}>Dhaka, Bangladesh</p>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>Email: info@buyinghouse.com</p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #334155', marginTop: '20px', paddingTop: '15px', color: '#64748b', fontSize: '13px' }}>
        &copy; {new Date().getFullYear()} GreenBD Buying House. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;