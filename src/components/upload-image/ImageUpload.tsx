"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

import Image from "next/image";
import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Box>
      <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 4 }}>
        {value.map((url) => (
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
            }}
            key={url}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                right: 2,
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 10,
              }}
            >
              <Button onClick={() => onRemove(url)}>
                <DeleteIcon />
              </Button>
            </Box>
            <Image
              fill
              style={{
                objectFit: "cover",
              }}
              alt="Image"
              src={url}
            />
          </Box>
        ))}
      </Box>
      <CldUploadWidget onUpload={onUpload} uploadPreset="qdf3uqfa">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button type="button" disabled={disabled} onClick={onClick}>
              <AddIcon />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </Box>
  );
};

export default ImageUpload;
