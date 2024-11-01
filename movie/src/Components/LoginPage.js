import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Box, Typography, Alert } from "@mui/material";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent full page reload
    setError("");

    // Validate input fields
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      // Send login data to the backend API
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Store the username and token in localStorage
        localStorage.setItem('token', data.token); 
        localStorage.setItem('username', username); // Store the username
        navigate('/'); 
        window.location.reload();// Navigate to the home page after successful login
      } else {
        setError(data.message); // Show error message from the server response
      }
    } catch (error) {
      // Handle network or other errors
      setError('Failed to log in. Please try again.');
    }
  };

  return (
    <Container>
      <Box
        onSubmit={handleLogin} // Handling form submit manually here
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom>Login</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <TextField 
          label="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          margin="normal" 
          fullWidth 
        />
        <TextField 
          label="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          margin="normal" 
          fullWidth 
        />
        <Button 
          type="button" // Use type="button" to avoid implicit form submit
          variant="contained" 
          color="primary" 
          sx={{ mt: 2 }} 
          onClick={handleLogin} // Handle login on click
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
