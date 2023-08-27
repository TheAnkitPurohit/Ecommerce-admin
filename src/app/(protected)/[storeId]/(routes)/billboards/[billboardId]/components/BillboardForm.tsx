"use client";

import React, { useState } from "react";
import {
  Box,
  Modal,
  Stack,
  TextField,
  Typography,
  Container,
  Divider,
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
import { Billboard } from "@prisma/client";
import MainHeading from "@/components/headings/MainHeading";
import ImageUpload from "@/components/upload-image/ImageUpload";

const formSchema = z.object({
  label: z.string().min(1),
  imageUrl: z.string().min(1),
});

type BillboardFormValues = z.infer<typeof formSchema>;

interface BillboardFormProps {
  initialData: Billboard | null;
}

const BillboardForm = ({ initialData }: BillboardFormProps) => {
  const params = useParams();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const title = initialData ? "Edit billboard" : "Create billboard";
  const description = initialData ? "Edit a billboard." : "Add a new billboard";
  const toastMessage = initialData
    ? "Billboard updated."
    : "Billboard created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<BillboardFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      label: "",
      imageUrl: "",
    },
  });

  async function onSubmit(values: BillboardFormValues) {
    setIsLoading(true);
    try {
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/billboards/${params.billboardId}`,
          values
        );
      } else {
        await axios.post(`/api/${params.storeId}/billboards`, values);
      }

      router.refresh();
      router.push(`/${params.storeId}/billboards`);
      toast.success(toastMessage);
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  }

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(
        `/api/${params.storeId}/billboards/${params.billboardId}`
      );
      router.refresh();
      router.push(`/${params.storeId}/billboards`);
      toast.success("Billboard deleted.");
    } catch (error: any) {
      toast.error(
        "Make sure you removed all categories using this billboard first."
      );
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <Container maxWidth="xl">
        <Stack
          spacing={2}
          sx={{ pb: 2 }}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <MainHeading title={title} subtitle={description} />

          {initialData && (
            <Button variant="outlined" onClick={() => setOpen(true)}>
              <DeleteIcon />
            </Button>
          )}
        </Stack>

        <Divider color="white" />

        <Box {...form} my={2} bgcolor={"white"} p={2}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <Box>
                    <FormLabel>Background image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value ? [field.value] : []}
                        disabled={isLoading}
                        onChange={(url) => field.onChange(url)}
                        onRemove={() => field.onChange("")}
                      />
                    </FormControl>
                    <FormHelperText />
                  </Box>
                )}
              />

              <Controller
                control={form.control}
                name="label"
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
                    label={"Label"}
                    variant="outlined"
                    disabled={isLoading}
                    placeholder="Billboard label"
                    color="info"
                  />
                )}
              />

              <Box>
                <MainButton
                  size={ButtonSizeType.Medium}
                  variant={ButtonVariantType.Contained}
                  text={action}
                  type={ButtonType.Submit}
                  isDisabled={isLoading}
                />
              </Box>
            </Stack>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default BillboardForm;
