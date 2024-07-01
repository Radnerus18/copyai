import React, { useEffect, useState, lazy, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import SideBar from "./sidebar";
import User from "./user";
const MainComponent = () => {
  const nav = useNavigate();
  const [urlPath, setUrlPath] = useState<string>("Dashboard");
  const [open, setOpen] = useState<boolean>(true);

  const receiveUrl = (data: any) => {
    setUrlPath(data);
    nav(`/${data.slice(0, 1).toLowerCase() + data.slice(1)}`);
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
      <Box
        component="section"
        sx={{
          width: "100%",
          px: 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Typography variant="h5">{urlPath}</Typography>
          <User />
        </Grid>
        <Grid>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Grid>
      </Box>
    </>
  );
};
export default MainComponent;
