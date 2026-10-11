import { useState, useEffect } from 'react';

function OurProducts() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || '';
    fetch(`${API_URL}/api/products/`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  // ক্যাটেগরি অনুযায়ী ফিল্টার করার লজিক
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(item => item.category?.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="page-container">
      <h2>Our Garments Collection</h2>

      {/* ক্যাটেগরি ফিল্টার বাটন */}
      <div style={{ display: 'flex', gap: '10px', margin: '20px 0', justifyContent: 'center' }}>
        {['All', 'Men', 'Women', 'Kids'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: selectedCategory === cat ? '#0284c7' : '#e2e8f0',
              color: selectedCategory === cat ? '#fff' : '#333',
              fontWeight: 'bold',
              transition: '0.3s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>No products found in this category.</p>
        ) : (
          filteredProducts.map(item => (
            <div key={item.id} className="product-card">
              {item.image_url && (
                <img 
                  src={item.image_url.startsWith('http') ? item.image_url : `/static${item.image_url}`} 
                  alt={item.name} 
                />
              )}
              <h3>{item.name}</h3>
              <p style={{ color: '#0284c7', fontWeight: 'bold' }}>Category: {item.category}</p>
              <p style={{ fontSize: '14px', color: '#666' }}>{item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OurProducts;