"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

import Image from "next/image";
import { Box, Button, IconButton, Paper } from "@mui/material";
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
      <Box sx={{ my: 1, display: "flex", alignItems: "center", gap: 4 }}>
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
            <Button
              variant="outlined"
              type="button"
              endIcon={<AddIcon />}
              disabled={disabled}
              onClick={onClick}
            >
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </Box>
  );
};

export default ImageUpload;
