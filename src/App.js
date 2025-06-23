// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Listen to scroll events to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 6 sample products with image URLs
  const products = [
    {
      id: 1,
      name: "Premium Ceramic Floor Tile",
      description: "High-quality 30x30 cm ceramic tile for floors",
      price: 0.59,
      sqm: 1166.40,
      origin: "India",
      image: "https://marathonbe.com/wp-content/uploads/2022/04/AdobeStock_144267821-1-scaled-980x656.jpeg"
    },
    {
      id: 2,
      name: "Luxury Wall Tiles",
      description: "20x30 cm glossy finish ceramic wall tiles",
      price: 0.41,
      sqm: 10497.60,
      origin: "India",
      image: "https://blog.grespania.com/wp-content/uploads/2020/04/TENDENCIAS-CERA%CC%81MICAS-2020-IMG_1319-1320x990.jpg"
    },
    {
      id: 3,
      name: "Bathroom Tile Set",
      description: "Water-resistant ceramic tiles for bathrooms",
      price: 0.67,
      sqm: 850.25,
      origin: "India",
      image: "https://www.mystonefloor.com/cdn/shop/articles/985081504e62fb32b5fc93974a0efe83.jpg?v=1723640545&width=1680"
    },
    {
      id: 4,
      name: "Outdoor Porcelain Tiles",
      description: "Weather-resistant 60x60 cm porcelain tiles",
      price: 0.75,
      sqm: 1250.00,
      origin: "India",
      image: "https://www.stonesaver.co.uk/cdn/shop/files/himalayan3_0463ca6c-1729-4683-8f66-ce74708f8d9e_720x.jpg?v=1739823577"
    },
    {
      id: 5,
      name: "Kitchen Backsplash Tiles",
      description: "15x15 cm mosaic tiles for kitchen backsplashes",
      price: 0.85,
      sqm: 980.50,
      origin: "India",
      image: "https://www.avalonflooring.com/cdn/shop/articles/tile-backsplash-feature-pic_733ca566-3a66-46b2-a584-44c2a9ed0c04_2048x.jpg?v=1670014769"
    },
    {
      id: 6,
      name: "Premium Marble Effect Tiles",
      description: "60x120 cm marble-look porcelain tiles",
      price: 1.25,
      sqm: 750.00,
      origin: "India",
      image: "https://gruppoconcorde-cdn.thron.com/delivery/public/image/gruppoconcorde/24e6eb33-abdf-4674-9359-67db0224ef5b/u38j94/std/1280x0/AtlasConcorde_MarvelDiva_006_00_Galaxy_Polished.tif?scalemode=manual&quality=100"
    }
  ];

  return (
    <div className="app">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <ProductList products={products} />
      <ContactSection />
      <Footer />
    </div>
  );
}

// Header Component - Transparent when on hero section
function Header({ isScrolled }) {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <h1>UKP CERAMICS</h1>
          <p>Quality Tiles Since 1985</p>
        </div>
        <nav>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Hero Section - Full viewport height
function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Premium Ceramic Tiles at Factory Prices</h2>
          <p>Direct from India - 40% Below Market Rates</p>
          <a href="#products" className="btn">View Collection</a>
        </div>
      </div>
    </section>
  );
}

// Product List
function ProductList({ products }) {
  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Our Ceramic Tile Collection</h2>
        <p className="section-subtitle">High-quality tiles at competitive prices</p>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Card with image from URL
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.parentElement.innerHTML = '<div class="placeholder-img">Image Not Available</div>';
          }}
        />
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-details">
        <p><strong>Price:</strong> ${product.price.toFixed(2)}/sqm</p>
        <p><strong>Origin:</strong> {product.origin}</p>
      </div>
      <div className="butt">
        <a href="#contact" className="btn">Contact for Quote</a>
      </div>
    </div>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Our Sales Team</h2>
        <p className="section-subtitle">Get in touch for quotes and inquiries</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <h3>India Office</h3>
            <p>📞 +91-11-43007461</p>
            <p>📠 +91-11-43557391</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>✉️ marketing@ukpindustrial.com</p>
          </div>
          <div className="contact-item">
            <h3>Registered Office</h3>
            <p>50, GOPIPURA, KOTHIGATE</p>
            <p>HAPUR-245101, UP, INDIA</p>
          </div>
        </div>
        
    
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>UKP INDUSTRIAL COMPANY</h3>
          <p>Manufacturers of premium ceramic tiles since 1985</p>
        </div>
        <div className="footer-section">
          <h4>Terms & Conditions</h4>
          <p>Packing: In strong sea worthy packing</p>
          <p>Origin: All goods are of Indian Origin</p>
          <p>Payment Term: By 100% Telegraphic Transfer (T/T)</p>
        </div>
        <div className="footer-section">
          <p>© 2024 UKP Industrial Company. All rights reserved.</p>
          <p>HSN Code: 6907 - Ceramic tiles</p>
        </div>
      </div>
    </footer>
  );
}

export default App;