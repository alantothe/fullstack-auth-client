import React from 'react';
import { useState } from 'react';

import { useAuth } from "../hooks/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginResult = await auth.login(email, password);
    if (loginResult.success) {
      navigate("/");
    } else {
      setLoginMessage(loginResult.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />


      <button onClick={handleLogin}>Login</button>
      {loginMessage && <h3>{loginMessage}</h3>}
    </div>
  );
};

export default LoginPage;