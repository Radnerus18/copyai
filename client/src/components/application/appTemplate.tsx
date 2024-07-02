import { Box, Button, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
interface templateProps {
  img: any;
  caption1: React.ReactNode;
  caption2: React.ReactNode;
}
const Template: React.FC<templateProps> = (props) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr, file);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const renderHTML = (htmlString: any) => {
    return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <>
      <Box
        sx={{
          width: "25%",
          heigth: "25%",
          minWidth: "300px",
          aspectRatio: 1 / 1,
          border: "2px dashed rgb(185, 210, 244)",
          backgroundColor: "rgb(255, 255, 255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          p: 2,
        }}
        {...getRootProps()}
      >
        <img src={props.img} alt="" />
        <input {...getInputProps()} />
        <Typography>{renderHTML(props.caption1)}</Typography>
      </Box>
      <Typography variant="h5">OR</Typography>
      <Box
        sx={{
          width: "25%",
          heigth: "25%",
          minWidth: "300px",
          aspectRatio: 1 / 1,
          border: "1px solid rgb(185, 210, 244)",
          backgroundColor: "rgb(255, 255, 255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          p: 2,
        }}
      >
        <img src={props.img} alt="" />
        <Typography>{renderHTML(props.caption2)}</Typography>
        <Button variant="outlined" color="primary">
          Upload
        </Button>
      </Box>
    </>
  );
};

export default Template;
