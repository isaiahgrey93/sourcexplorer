import React from 'react';

const NotFound = () => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        fontSize: 192,
        fontFamily: 'sans-serif',
        color: '#2d3436',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        textShadow: '3px 4px rgba(100, 100, 100, 0.5)',
      }}
    >
      <div style={{ fontSize: '20vw', textAlign: 'center' }}>404</div>
      <div
        style={{
          fontSize: '20vw',
          fontWeight: 'light',
          position: 'relative',
          bottom: '5vw',
          textAlign: 'center',
          textShadow: '3px 4px rgba(100, 100, 100, 0.5)',
        }}
      >
        (ಥ﹏ಥ)
      </div>
    </div>
    <p
      style={{
        padding: 20,
        fontSize: 18,
        fontFamily: 'sans-serif',
        color: '#2d3436',
        fontWeight: 'bold',
      }}
    >
      Oops... We're sorry we couldn't find what you were looking for.
    </p>
  </div>
);

export default NotFound;
