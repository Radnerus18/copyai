import React from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TelegramIcon from "@mui/icons-material/Telegram";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import bgImg from "../../assets/ai-images/header-img.png";
import SecondRow from "./secondRow";
import ThirdRow from "./thirdRow";
import Toc from "./toc";
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "240px",
          minHeight: "200px",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Paper //search Box
          sx={{
            height: "100px",
            backgroundColor: "transparent",
            width: "60%",
            px: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" color={"white"} sx={{ ml: 4 }}>
            How can I help you today ?
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              backgroundColor: "black !important",
              border: "1px solid rgb(5, 53, 210)",
              borderRadius: "150px",
              color: "grey",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, width: "100%", color: "grey", px: 3 }}
              placeholder="Enter your Prompt here"
              inputProps={{ "aria-label": "Enter your Prompt here" }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px", color: "grey" }}
              aria-label="search"
            >
              <KeyboardVoiceIcon />
            </IconButton>
            <Divider
              sx={{ height: 28, m: 0.5, borderColor: "grey !important" }}
              orientation="vertical"
            />
            <IconButton
              sx={{ p: "10px", color: "grey" }}
              aria-label="directions"
            >
              <TelegramIcon />
            </IconButton>
          </Paper>
        </Paper>
      </Box>
      {/* second row start*/}
      <SecondRow />
      {/*Third Row */}
      <ThirdRow />

      {/* Fourth row */}
      <Typography variant="h6" textAlign={"left"} mt={3}>
        Recent Activity
      </Typography>
      <Toc />
    </>
  );
};
export default Dashboard;
