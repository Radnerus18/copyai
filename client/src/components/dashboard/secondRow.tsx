import React from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";

import assetImg from "../../assets/ai-images/my-asset-doc.png";
interface Image {
  id: Number;
  src: string;
  alt?: string;
  // Add more properties as needed
}
const secondRowImgs: Image[] = [
  { id: 0, src: assetImg, alt: "My Asset Document" },
  { id: 1, src: assetImg, alt: "Total Converted files" },
  { id: 2, src: assetImg, alt: "Image to table extracted" },
  { id: 3, src: assetImg, alt: "Pdf to Word Documents" },
];
const SecondRow = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {secondRowImgs.map((item, index) => (
        <Grid
          key={index}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          mt={2}
          sx={{ width: "max-content" }}
        >
          <img
            src={item.src}
            alt={item.alt}
            style={{ backgroundColor: "rgb(0, 106, 255)", padding: "10px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h4">0</Typography>
            <Typography variant="caption">{item.alt}</Typography>
          </div>
        </Grid>
      ))}
    </Box>
  );
};

export default SecondRow;
