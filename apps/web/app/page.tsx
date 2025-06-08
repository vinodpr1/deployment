"use client";
import React, { useState, useEffect } from 'react';

export default function FunLandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = () => {
    if (email) {
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s ease-out'
      }}>
        {/* Header */}
        <div style={{
          fontSize: '3em',
          marginBottom: '10px',
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          🚀 Deployment App
        </div>
        
        <h1 style={{
          fontSize: '2.5em',
          color: '#333',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Launch Your Dreams
        </h1>
        
        <p style={{
          fontSize: '1.2em',
          color: '#666',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Join thousands of dreamers who are already exploring the galaxy of possibilities. 
          Your adventure starts here! ✨
        </p>

        {/* Features */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginBottom: '40px',
          gap: '20px'
        }}>
          {[
            { icon: '⚡', title: 'Lightning Fast', desc: 'Instant results' },
            { icon: '🔒', title: 'Super Secure', desc: 'Your data is safe' },
            { icon: '🌟', title: 'Amazing UX', desc: 'Beautiful interface' }
          ].map((feature, index) => (
            <div key={index} style={{
              flex: '1',
              minWidth: '150px',
              padding: '20px',
              background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '2em', marginBottom: '10px' }}>{feature.icon}</div>
              <h3 style={{ color: '#333', marginBottom: '5px' }}>{feature.title}</h3>
              <p style={{ color: '#666', fontSize: '0.9em' }}>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Email Signup */}
        <div style={{
          display: 'flex',
          gap: '10px',
          maxWidth: '400px',
          margin: '0 auto 30px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your email"
            style={{
              flex: '1',
              minWidth: '200px',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '25px',
              fontSize: '1em',
              outline: 'none',
              transition: 'border-color 0.3s ease',
              textAlign: 'center'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
          <button
            onClick={handleSubmit}
            style={{
              padding: '15px 30px',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              fontSize: '1em',
              fontWeight: 'bold',
              cursor: 'pointer',
              transform: 'scale(1)',
              transition: 'transform 0.2s ease',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
          >
            Get Started 🚀
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div style={{
            background: 'linear-gradient(45deg, #4caf50, #81c784)',
            color: 'white',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '20px',
            animation: 'fadeIn 0.5s ease'
          }}>
            🎉 Awesome! Welcome aboard the spaceship! 🛸
          </div>
        )}

        {/* Footer */}
        <div style={{
          borderTop: '1px solid #eee',
          paddingTop: '20px',
          color: '#999',
          fontSize: '0.9em'
        }}>
          <p>No spam, just pure awesomeness delivered to your inbox!</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '15px'
          }}>
            {['🐦', '📘', '📷', '💼'].map((social, index) => (
              <span key={index} style={{
                fontSize: '1.5em',
                cursor: 'pointer',
                transform: 'scale(1)',
                transition: 'transform 0.2s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.2) rotate(10deg)'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1) rotate(0deg)'}
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: -1
      }}>
        {[...Array(6)].map((_, index) => (
          <div key={index} style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }} />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}