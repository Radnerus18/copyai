import React, { useState } from "react";
import {
  Box,
  Paper,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
interface Credentials {
  username?: string;
  email: string;
  password: string;
}

const Login = () => {
  const [inputs, setInputs] = useState<Credentials>({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleLogin = async () => {
    const response = await axios.post("http://localhost:4000", inputs);
    try {
      if (response.data === "success") {
        console.log("Logged in");
      }
    } catch (err) {
      console.log("Error in sending data", err);
    }
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      gap={1}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          p: 4,
        }}
        variant="elevation"
        square={false}
        elevation={5}
      >
        <Typography variant="h5">Login</Typography>
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="my-mail">Email</InputLabel>
          <Input id="my-login-mail" name="email" onChange={handleChange} />
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="my-pass">Password</InputLabel>
          <Input id="my-login-pass" name="password" onChange={handleChange} />
        </FormControl>
      </Paper>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          p: 4,
        }}
        variant="elevation"
        square={false}
        elevation={5}
      >
        <Typography variant="h5">Sign Up</Typography>

        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="my-name">Name</InputLabel>
          <Input id="my-name" name="username" />
        </FormControl>
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="my-mail">Email</InputLabel>
          <Input id="my-mail" name="email" />
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="my-pass">Password</InputLabel>
          <Input id="my-pass" name="password" />
        </FormControl>
      </Paper>
      <Button variant="contained">Sign Up</Button>
    </Box>
  );
};

export default Login;
