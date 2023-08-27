import { Button } from "@mui/material";
import React from "react";

export enum ButtonColorType {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Warning = "warning",
}

export enum ButtonSizeType {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export enum ButtonVariantType {
  Contained = "contained",
  Outlined = "outlined",
  Text = "text",
}

export enum ButtonType {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
}

export interface ButtonProps {
  color?: ButtonColorType;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: ButtonType;
  text?: string;
  isDisabled?: boolean;
}

const MainButton = ({
  children,
  color,
  disabled,
  onClick,
  size,
  variant,
  text,
  type,
  isDisabled,
}: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size={size}
      disabled={disabled}
      variant={variant}
      type={type}
      color={color ?? ButtonColorType.Primary}
      disableTouchRipple={isDisabled}
    >
      {text ?? "Submit"}
    </Button>
  );
};

export default MainButton;
