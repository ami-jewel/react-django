import { useState, useEffect } from 'react';

function CSR() {
  const [csrData, setCsrData] = useState({ title: 'Corporate Social Responsibility', content: 'Loading...' });

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || '';
    fetch(`${API_URL}/api/csr/`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setCsrData(data[0]);
        }
      })
      .catch(err => console.error("Error fetching CSR data:", err));
  }, []);

  return (
    <div className="page-container">
      <h2>{csrData.title}</h2>
      <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#444' }}>{csrData.content}</p>
    </div>
  );
}

export default CSR;