import { Box, Button, Typography } from "@mui/material";
import React, { useCallback, useRef,useEffect } from "react";
import { useDropzone } from "react-dropzone";
import commonApi from '../../utilities/api'
interface templateProps {
  img: any;
  alt:string;
  caption1: React.ReactNode;
  caption2: React.ReactNode;
}
const Template: React.FC<templateProps> = (props) => {
  const onDrop = useCallback((acceptedFiles: any) => {//drag and drop function
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        const formData = new FormData();
        formData.append('file',file)
        commonApi('upload',formData)
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
//to access hidden input element
  const hiddenElement = useRef<HTMLInputElement>(null)
  const accessHiddenInput = (e:any)=> {
    if (hiddenElement.current) {
      hiddenElement.current.click();
    }
  };

  const handleFile = async (e:any)=>{//click function
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file',file)
    commonApi('upload',formData)
  }
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
        <img src={props.img} alt={props.alt} />
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
        <img src={props.img} alt={props.alt} />
        <Typography>{renderHTML(props.caption2)}</Typography>
        <Button variant="outlined" onClick={accessHiddenInput}>Upload</Button>
        <input ref={hiddenElement} type="file" name="Upload" id="fileInput" onInput={handleFile} style={{visibility:"hidden"}}/>
      </Box>
    </>
  );
};

export default Template;
