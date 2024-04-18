import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    let valid = true;
    if (!username.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        usernameError: 'Username is required',
      }));
      valid = false;
    } else {
      setFormData((prevData) => ({ ...prevData, usernameError: '' }));
    }
    if (!password.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        passwordError: 'Password is required',
      }));
      valid = false;
    } else {
      setFormData((prevData) => ({ ...prevData, passwordError: '' }));
    }
    if (valid) {
      // Your login logic here
      const storedUsername = localStorage.getItem('usernm');
      const storedPassword = localStorage.getItem('pasd');

      if (username === storedUsername && password === storedPassword) {
        
        setFormData({ username: '', password: '', usernameError: '', passwordError: '' });
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back!',
        });
        navigate('/map');
      } else {
        
        setFormData({ username: '', password: '', usernameError: '', passwordError: '' });
        Swal.fire({
          icon: 'error',
          title: 'Wrong Credentials',
          text: 'Please check your username and password.',
        });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const { username, password, usernameError, passwordError } = formData;

  return (
    <>
      <h1 align="center">
        <u>ReactJS Internship Assignment</u>
      </h1>
      <div className="login-container">
        <h2 style={{ color: 'red' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={handleInputChange} />
            {usernameError && <div className="error">{usernameError}</div>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleInputChange} />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
