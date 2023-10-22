import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
    const response = await fetch('/api/credential');
    if (!response.ok) {
        throw new Error('Failed to fetch credentials');
    }
    const credentials = await response.json();
    const isLogin = credentials.some((item: { username: string, password: string }) => item.username === username && item.password === password);
    if (!isLogin) {
        setErrorMessage('Invalid Credentials');
    } else {
        setErrorMessage('');
        setUsername('');
        setPassword('');
        router.push('/search');
    }
    }
     catch (error) {
      console.error('API call error:', error);
      setErrorMessage('Failed to fetch credentials');
    }
  };

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <br />
      Username : <input className='inp' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <br />
      Password : <input type={show ? "text" : "password"} className='inp' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={toggleShow} style={{ marginLeft: '22%' }}>{show ? "Hide" : "Show"}</button>
      <br />
      <br />
      <button type="submit" onClick={handleLogin} style={{ marginLeft: '14%' }}>Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}
