import { useState, useEffect } from 'react'
import API_URL from './api' // api.js থেকে লাইভ ইউআরএল ইমপোর্ট করা হলো

function App() {
  const [message, setMessage] = useState('লোডিং হচ্ছে...')
  const [items, setItems] = useState([]) // ডাটা লিস্টের জন্য স্টেট
  
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || '';
    
    fetch(`${API_URL}/api/hello/`)
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        if (data.data) {
          setItems(data.data); // ডাটাবেজ থেকে আসা আইটেমগুলো সেট করা হলো
        }
      })
      .catch(err => {
        console.error("Problem to fetch Data:", err);
        setMessage('No Data found from Django!');
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>
        <font color="red">My Full-Stack Website using </font>
        <font color="green"><i> (React + Django)</i></font>
      </h1>
      <div style={{ 
        display: 'inline-block', 
        padding: '20px 40px', 
        marginTop: '20px', 
        background: '#f4f4f4', 
        border: '1px solid #ddd', 
        borderRadius: '8px',
        fontSize: '18px',
        color: '#333',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <p>{message}</p>
      </div>

      {/* ডাটাবেজের আইটেমগুলো দেখানোর জন্য সেকশন */}
      <div style={{ marginTop: '30px', color: '#fff' }}>
        <h2>Database Items:</h2>
        {items.length === 0 ? (
          <p>No items found in database.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map(item => (
              <li key={item.id} style={{ background: '#222', margin: '10px auto', padding: '10px', width: '300px', borderRadius: '5px' }}>
                <strong>{item.name}</strong>: {item.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App;