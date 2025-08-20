import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 로그인 처리 로직 작성
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div>
      <h2>로그인 페이지 LOGIN</h2>

      {/* 로그인 폼 */}
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '1rem auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
