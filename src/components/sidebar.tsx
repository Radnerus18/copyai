import React, { useState } from "react";
import aiLogo from "../assets/ai-images/ai-logo.png";
import dashboard from "../assets/ai-images/dashboard.png";
import application from "../assets/ai-images/applications.png";
import assets from "../assets/ai-images/assets.png";
import settings from "../assets/ai-images/settings.png";
import menuBtn from "../assets/ai-images/menu.png";
import { Grid, Stack, Typography } from "@mui/material";

interface Image {
  id: Number;
  src: string;
  alt?: string;
  // Add more properties as needed
}
interface ImgStyles {
  imgDefault: React.CSSProperties;
  imgSelected: React.CSSProperties;
}
interface SidebarProps {
  urlData: any;
}
const logoImgs: Image[] = [
  { id: 0, src: aiLogo, alt: "" },
  { id: 1, src: dashboard, alt: "Dashboard" },
  { id: 2, src: application, alt: "Application" },
  { id: 3, src: assets, alt: "Assets" },
  { id: 4, src: settings, alt: "Settings" },
];

const bgStyle: ImgStyles = {
  imgDefault: {
    backgroundColor: "none",
  },
  imgSelected: {
    backgroundColor: "#0535d2",
  },
};

const SideBar: React.FC<SidebarProps> = ({ urlData }) => {
  const [state, setState] = useState<string>();
  const onselectImg = (e: any) => {
    setState(e.target.alt);
    urlData(e.target.alt);
  };
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      {logoImgs.map((img, index) =>
        index !== 4 ? (
          <Grid
            key={index}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{ cursor: "pointer" }}
              onClick={(e: any) => onselectImg(e)}
            />
            <Typography
              variant="caption"
              sx={{ color: "white", fontSize: "1.2rem" }}
            >
              {img.alt}
            </Typography>
          </Grid>
        ) : (
          <Grid
            key={index}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
            marginTop={"350px !important"}
            paddingBottom={"42px"}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{ cursor: "pointer" }}
              onClick={(e: any) => onselectImg(e)}
            />
            <Typography
              variant="caption"
              sx={{ color: "white", fontSize: "1.2rem" }}
            >
              {img.alt}
            </Typography>
          </Grid>
        )
      )}
    </Stack>
  );
};
export default SideBar;
