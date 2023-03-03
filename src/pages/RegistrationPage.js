import React from 'react';
import { useState } from 'react';

import { useAuth } from "../hooks/auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const registerResult = await auth.register(email, password);
    if (registerResult.success) {
      navigate("/login");
    } else {
      setRegisterMessage(registerResult.message);
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      {registerMessage && <h3>{registerMessage}</h3>}
    </div>
  );
};

export default RegistrationPage;