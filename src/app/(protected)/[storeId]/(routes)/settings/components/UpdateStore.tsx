"use client";

import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

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
import { useParams, useRouter } from "next/navigation";
import useOriginHook from "@/hooks/useOriginHook";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Store name must be at least 2 characters.",
  }),
});

const UpdateStore = () => {
  const params = useParams();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await axios.patch(`/api/stores/${params.storeId}`, values);
      router.refresh();
      toast.success("Store updated.");
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Update Store
      </Typography>

      <Box {...form} my={2}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Controller
              control={form.control}
              name="name"
              render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
              }) => (
                <TextField
                  {...params}
                  label="Name"
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  disabled={isLoading}
                  sx={{ width: 300 }}
                  required
                />
              )}
            />

            <Box>
              <MainButton
                size={ButtonSizeType.Medium}
                variant={ButtonVariantType.Contained}
                text="Update"
                type={ButtonType.Submit}
                isDisabled={isLoading}
              />
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default UpdateStore;
