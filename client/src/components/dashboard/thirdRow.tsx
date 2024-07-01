import React from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";

import ePub from "../../assets/ai-images/epub.png";
import altTag from "../../assets/ai-images/alt-tag.png";
import webPage from "../../assets/ai-images/web-page.png";
import cssGen from "../../assets/ai-images/css-gen.png";
interface Image {
  id: Number;
  src: string;
  alt?: string;
  // Add more properties as needed
}
const thirdRowImgs: Image[] = [
  { id: 0, src: ePub, alt: "EPUB Generator" },
  { id: 1, src: altTag, alt: "Alt Tag Generator" },
  { id: 2, src: webPage, alt: "Web Page Generator" },
  { id: 3, src: cssGen, alt: "CSS Generator" },
  { id: 4, src: ePub, alt: "EPUB Generator" },
  { id: 5, src: altTag, alt: "Alt Tag Generator" },
];

const ThirdRow = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        flexWrap: "wrap",
        mt: 3,
      }}
    >
      <Typography variant="h6">All Application</Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={5}
      >
        {thirdRowImgs.map((item, index) => (
          <Grid
            key={index}
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "max-content" }}
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                padding: "10px",
              }}
            />
            <Typography variant="caption">{item.alt}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ThirdRow;
