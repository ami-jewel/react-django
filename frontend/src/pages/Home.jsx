import { useState, useEffect } from 'react';

function Home() {
  const [homeData, setHomeData] = useState({ title: 'Welcome to Our Buying House', subtitle: 'Loading...' });

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || '';
    fetch(`${API_URL}/api/home-content/`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setHomeData(data[0]); // এডমিন থেকে দেওয়া প্রথম রো বা কন্টেন্ট সেট হবে
        }
      })
      .catch(err => console.error("Error fetching home data:", err));
  }, []);

  return (
    <div className="page-container" style={{ textAlign: 'center' }}>
      <h1>{homeData.title}</h1>
      <p style={{ fontSize: '18px', color: '#555', marginTop: '15px' }}>{homeData.subtitle}</p>
    </div>
  );
}

export default Home;