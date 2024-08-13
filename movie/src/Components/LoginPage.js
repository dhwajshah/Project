import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Box, Typography, Alert } from "@mui/material";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    // Validate input fields
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);

    // After login, navigate to home page
    navigate("/");
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

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

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
