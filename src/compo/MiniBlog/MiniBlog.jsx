import styled from 'styled-components';

function MiniBlog() {
  return (
    <div>
      <p style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
        미니 블로그
      </p>

      
      <a
        href="" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '0.6rem 1.2rem',
          backgroundColor: '#4caf50',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        MiniBlog 열기
      </a>
    </div>
  );
}

export default MiniBlog;
