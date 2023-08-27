"use client";

import React, { useState } from "react";
import { Box, Modal, Stack, TextField, Typography } from "@mui/material";

import { useParams, useRouter } from "next/navigation";
import useOriginHook from "@/hooks/useOriginHook";

import axios from "axios";
import toast from "react-hot-toast";

// button
import MainButton, {
  ButtonColorType,
  ButtonSizeType,
  ButtonType,
  ButtonVariantType,
} from "@/components/button/MainButton";

const DeleteStore = () => {
  const params = useParams();
  const router = useRouter();
  const origin = useOriginHook();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/stores/${params.storeId}`);
      router.refresh();
      router.push("/");
      toast.success("Store deleted.");
    } catch (error: any) {
      toast.error("Make sure you removed all products and categories first.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <MainButton
        size={ButtonSizeType.Medium}
        variant={ButtonVariantType.Contained}
        text="Delete Store"
        type={ButtonType.Submit}
        color={ButtonColorType.Warning}
        onClick={onDelete}
      />
    </Box>
  );
};

export default DeleteStore;
