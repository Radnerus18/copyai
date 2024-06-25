import "./App.css";
import Box from "@mui/material/Box";
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

  const receiveUrl = (data: any) => {
    setUrlPath(data);
    nav(`/${data}`);
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          height: "100%",
          backgroundColor: "#006aff",
          p: 2,
          minWidth: "150px",
        }}
      >
        <SideBar urlData={receiveUrl} />
      </Box>
      <Box component="section" sx={{ width: "90%", p: 2 }}>
        {urlPath}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
