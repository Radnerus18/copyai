import React, { useEffect, useState,lazy } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useNavigate,
  } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import SideBar from "./sidebar";
import Dashboard from "./dashboard";
import User from "./user";
import Login from './login';

const MainComponent = () => {
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
          
        </Box>
      </>
    );
  };
  export default MainComponent