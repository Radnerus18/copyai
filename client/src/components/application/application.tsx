import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import bgImg from "../../assets/ai-images/header-img.png";
import Template from "./appTemplate";
import thumbImg from "../../assets/ai-images/table-extract-img.png";

const Application = () => {
  const [tempProps, setTempProps] = useState({
    img: thumbImg,
    c1: `Please drag and drop Images<br> or<br> PPT files which has tables`,
    c2: "Please upload the Images<br> or<br> PPT files which has tables",
  });
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          minHeight: "150px",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography align="left" variant="h6" color={"white"}>
            <em>Our Ai Tools can help you better!</em>
          </Typography>
          <Typography align="left" variant="h5" color={"white"}>
            Extract tabular data from images and PPT files
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(246, 250, 254)",
          height: "600px",
          width: "100%",
          border: "1px solid rgb(185, 210, 244)",
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Template
          img={tempProps.img}
          caption1={tempProps.c1}
          caption2={tempProps.c2}
        />
      </Box>
    </>
  );
};

export default Application;
