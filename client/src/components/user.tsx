import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const User = () => {
  const [open, setOpen] = useState(false);
  const toggleLogin = () => {
    setOpen(!open);
  };
  const nav = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("token")
    nav('/login')
  }
  return (
    <>
      <Stack
        direction="row"
        spacing={0}
        sx={{
          width: "max-content",
          alignItems: "center",
          cursor: "pointer",
          borderRadius: "10px",
          "&:hover": {
            boxShadow: "0px 0px 4px #ddd", // Background color on hover
          },
          "&:active": {
            boxShadow: "0px 0px 4px grey", // Background color on active
          },
        }}
        tabIndex={0}
        onClick={toggleLogin}
      >
        <Chip
          avatar={<Avatar alt="U" src="/static/images/avatar/3.jpg" />}
          label="User"
          variant="outlined"
          sx={{
            width: 120,
            height: 40,
            justifyContent: "space-around",
            border: "none",
          }}
        />
        <KeyboardArrowDownIcon
          sx={{ rotate: open ? "180deg" : "0deg", transition: "rotate 400ms" }}
        />
      </Stack>
      {open && (
        <Card
          variant="outlined"
          sx={{
            position: "absolute",
            top: 60,
            right: 10,
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleLogout}>Logout</Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};
export default User;
