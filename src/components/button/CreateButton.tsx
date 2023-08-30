import { Button } from "@mui/material";
import React from "react";

import AddIcon from "@mui/icons-material/Add";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  text?: string;
}

const CreateButton = ({ disabled, onClick, text }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      startIcon={<AddIcon />}
    >
      {text ? `Create ${text}` : "Create"}
    </Button>
  );
};

export default CreateButton;
