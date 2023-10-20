import React, { useState } from 'react';
import credentials from './credentials.json';
import { useRouter } from 'next/router';

export default function Login() 
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [show, setShow] = useState(false);
    let isLogin = false;
    const router = useRouter();

    const handleLogin = () => {
      credentials.map((item) => {
        if(item.username === username && item.password === password){
          isLogin = true;
        }
      });
      if(!isLogin){
        setErrorMessage("Invalid Credentials");
      } else {
        setErrorMessage('');
        setUsername('');
        setPassword('');
        router.push('/search');
      }
    }

    const toggleShow = () => {
      setShow(!show);
    }

    return (
      <div>
        <br />
        Username : <input className='inp' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <br />
        Password : <input type={show ? "text" : "password"} className='inp' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={toggleShow} style={{marginLeft:"22%"}}>{show ? "Hide" : "Show"}</button>
        <br />
        <br />
        <button type="submit" onClick={handleLogin} style={{marginLeft:"14%"}}>Login</button>
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
      </div>
    );
}