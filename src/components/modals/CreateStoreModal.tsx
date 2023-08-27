"use client";

import React, { useState } from "react";
import { Box, Modal, Stack, TextField, Typography } from "@mui/material";

// form
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import axios, { AxiosResponse, isAxiosError } from "axios";

import toast from "react-hot-toast";

import useStoreHook from "@/hooks/useStoreHook";

// button
import MainButton, {
  ButtonSizeType,
  ButtonType,
  ButtonVariantType,
} from "@/components/button/MainButton";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Store name must be at least 2 characters.",
  }),
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateStoreModal = () => {
  const { isOpen, onOpen, isClosable, onClose } = useStoreHook();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response: AxiosResponse = await axios.post("/api/stores", values);
      window.location.assign(`/${response?.data?.id}`);
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data);
      }
    } finally {
      setIsLoading(false);
      onClose();
    }
  }

  return (
    <Modal
      open={isOpen}
      onClose={() => {}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          color={"black"}
        >
          Create Store
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} color={"black"}>
          Add a new store to manage your products and categories.
        </Typography>

        <Box {...form} my={2}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                control={form.control}
                name="name"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                  formState,
                }) => (
                  <TextField
                    helperText={error ? error.message : null}
                    size="small"
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    fullWidth
                    label={"Name"}
                    variant="outlined"
                  />
                )}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <MainButton
                  size={ButtonSizeType.Medium}
                  variant={ButtonVariantType.Contained}
                  text="Create"
                  type={ButtonType.Submit}
                />
                <MainButton
                  size={ButtonSizeType.Medium}
                  variant={ButtonVariantType.Outlined}
                  text="Cancel"
                  type={ButtonType.Reset}
                  onClick={() => {
                    if (isClosable) {
                      onClose();
                    }
                  }}
                />
              </Box>
            </Stack>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateStoreModal;
