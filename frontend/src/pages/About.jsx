import { useState, useEffect } from 'react';

function About() {
  const [aboutData, setAboutData] = useState({ heading: 'About Us', content: 'Loading...' });

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || '';
    fetch(`${API_URL}/api/about/`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setAboutData(data[0]);
        }
      })
      .catch(err => console.error("Error fetching about data:", err));
  }, []);

  return (
    <div className="page-container">
      <h2>{aboutData.heading}</h2>
      <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#444' }}>{aboutData.content}</p>
    </div>
  );
}

export default About;