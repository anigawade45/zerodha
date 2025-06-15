import React, { useState } from "react";
import { motion } from "framer-motion";

const Apps = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (appName) => {
    setImageErrors(prev => ({ ...prev, [appName]: true }));
  };

  const apps = [
    {
      name: "Kite",
      description: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, and an elegant UI.",
      features: [
        "Real-time market data",
        "Advanced charting tools",
        "Multiple order types",
        "Watchlists & alerts",
        "Mobile trading"
      ],
      image: "/images/kite.png",
      fallbackImage: "https://placehold.co/120x120/1976d2/ffffff?text=Kite",
      links: {
        web: "#",
        android: "#",
        ios: "#"
      },
      color: "#1976d2"
    },
    {
      name: "Console",
      description: "The central dashboard for your Zerodha account. Gain insights into your trades and investments.",
      features: [
        "Portfolio analytics",
        "Fund statements",
        "Tax reports",
        "Order history",
        "Account settings"
      ],
      image: "/images/console.png",
      fallbackImage: "https://placehold.co/120x120/2e7d32/ffffff?text=Console",
      links: {
        web: "#"
      },
      color: "#2e7d32"
    },
    {
      name: "Coin",
      description: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account.",
      features: [
        "Direct mutual funds",
        "Zero commission",
        "SIP & lumpsum",
        "Portfolio tracking",
        "Tax harvesting"
      ],
      image: "/images/coin.png",
      fallbackImage: "https://placehold.co/120x120/ed6c02/ffffff?text=Coin",
      links: {
        web: "#",
        android: "#",
        ios: "#"
      },
      color: "#ed6c02"
    },
    {
      name: "Varsity",
      description: "An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations.",
      features: [
        "Market basics",
        "Technical analysis",
        "Fundamental analysis",
        "Trading strategies",
        "Risk management"
      ],
      image: "/images/varsity.png",
      fallbackImage: "https://placehold.co/120x120/9c27b0/ffffff?text=Varsity",
      links: {
        web: "#",
        android: "#",
        ios: "#"
      },
      color: "#9c27b0"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ 
          marginBottom: "2rem", 
          color: "#1976d2",
          fontSize: "2rem",
          fontWeight: "600"
        }}>
          Trading & Investment Apps
        </h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}
      >
        {apps.map((app, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer",
              ":hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
              }
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src={imageErrors[app.name] ? app.fallbackImage : app.image}
                alt={app.name}
                onError={() => handleImageError(app.name)}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "1rem",
                  borderRadius: "12px",
                  backgroundColor: app.color + "10"
                }}
              />
              <h2 style={{ 
                color: app.color,
                marginBottom: "0.5rem",
                fontSize: "1.5rem",
                fontWeight: "600"
              }}>
                {app.name}
              </h2>
              <p style={{ 
                color: "#666",
                fontSize: "0.9rem",
                lineHeight: "1.5"
              }}>
                {app.description}
              </p>
            </div>

            <div>
              <h3 style={{ 
                fontSize: "1rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#333"
              }}>
                Key Features
              </h3>
              <ul style={{ 
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
              }}>
                {app.features.map((feature, idx) => (
                  <li key={idx} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#555",
                    fontSize: "0.9rem"
                  }}>
                    <span style={{ color: app.color }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "auto"
            }}>
              {app.links.web && (
                <a
                  href={app.links.web}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: app.color,
                    color: "white",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "opacity 0.2s"
                  }}
                  onMouseOver={(e) => e.target.style.opacity = "0.9"}
                  onMouseOut={(e) => e.target.style.opacity = "1"}
                >
                  Open Web App
                </a>
              )}
              {app.links.android && (
                <a
                  href={app.links.android}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#333",
                    color: "white",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "opacity 0.2s"
                  }}
                  onMouseOver={(e) => e.target.style.opacity = "0.9"}
                  onMouseOut={(e) => e.target.style.opacity = "1"}
                >
                  Android
                </a>
              )}
              {app.links.ios && (
                <a
                  href={app.links.ios}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#333",
                    color: "white",
                    borderRadius: "4px",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "opacity 0.2s"
                  }}
                  onMouseOver={(e) => e.target.style.opacity = "0.9"}
                  onMouseOut={(e) => e.target.style.opacity = "1"}
                >
                  iOS
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          marginTop: "3rem",
          padding: "2rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          textAlign: "center"
        }}
      >
        <h2 style={{ 
          color: "#1976d2",
          marginBottom: "1rem",
          fontSize: "1.5rem",
          fontWeight: "600"
        }}>
          Need Help?
        </h2>
        <p style={{ 
          color: "#666",
          marginBottom: "1.5rem",
          fontSize: "1rem"
        }}>
          Our support team is available 24/7 to help you with any questions about our apps.
        </p>
        <a
          href="/support"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#1976d2",
            color: "white",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "1rem",
            transition: "opacity 0.2s"
          }}
          onMouseOver={(e) => e.target.style.opacity = "0.9"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          Contact Support
        </a>
      </motion.div>
    </div>
  );
};

export default Apps;
