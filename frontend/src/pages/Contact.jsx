import { useState, useEffect } from 'react';

function Contact() {
  const [contact, setContact] = useState({ address: 'Loading...', email: '', phone: '' });

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || '';
    fetch(`${API_URL}/api/contact/`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setContact(data[0]);
        }
      })
      .catch(err => console.error("Error fetching contact data:", err));
  }, []);

  return (
    <div className="page-container">
      <h2>Contact Us</h2>
      <p><strong>Office Address:</strong> {contact.address}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
    </div>
  );
}

export default Contact;