import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import SideBar from "./components/sidebar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Dashboard from "./components/dashboard";
import User from "./components/user";
import Login from "./components/login";
const App = () => {
  return (
    <Router>
      <div className="App">
        <SidebarAndDashboard />
      </div>
    </Router>
  );
};

const SidebarAndDashboard = () => {
  const nav = useNavigate();
  const [urlPath, setUrlPath] = useState<string>("");
  const [open, setOpen] = useState<boolean>(true);
  const receiveUrl = (data: any) => {
    setUrlPath(data);
    nav(`/${data}`);
  };
  const toggleNav = (data: any) => {
    setOpen(data);
  };
  return (
    <>
      <Box
        component="section"
        sx={{
          maxHeight: "100%",
          minHeight: "100vh",
          backgroundColor: "#006aff",
          px: 2,
          minWidth: "100px",
          ml: open ? "0px" : "-110px",
          transition: "margin-left 400ms",
        }}
      >
        <SideBar urlData={receiveUrl} onClickmenu={toggleNav} />
      </Box>
      <Box component="section" sx={{ width: "100%", px: 3 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Typography variant="h6">{urlPath}</Typography>
          <User />
        </Grid>
        <Login />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
