import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i className="fas fa-chart-line"></i>
            <h3>Real-Time Data</h3>
            <p>Get up-to-date weather information with our real-time data updates.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Location-Based</h3>
            <p>Get weather data for your current location or search for any city.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Responsive Design</h3>
            <p>Our weather app is optimized for all devices, from desktops to mobile phones.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;