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
  Autocomplete,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { Category, Color, Image, Product, Size } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";

// form
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import axios, { AxiosResponse, isAxiosError } from "axios";
import toast from "react-hot-toast";
import MainButton, {
  ButtonSizeType,
  ButtonType,
  ButtonVariantType,
} from "@/components/button/MainButton";
import MainHeading from "@/components/headings/MainHeading";
import ImageUpload from "@/components/upload-image/ImageUpload";

const formSchema = z.object({
  name: z.string().min(1, "Please enter a Name."),
  images: z.object({ url: z.string() }).array(),
  price: z.coerce.number().min(1, "Please enter a Price."),
  category: z.object({
    value: z.string().min(1, "Please Select a Category."),
    label: z.string().min(1, "Please Select a Category."),
  }),

  color: z.object({
    value: z.string().min(1, "Please Select a Color."),
    label: z.string().min(1, "Please Select a Color."),
  }),

  size: z.object({
    value: z.string().min(1, "Please Select a Size."),
    label: z.string().min(1, "Please Select a Size."),
  }),

  isFeatured: z.boolean().default(false).optional(),
  isArchived: z.boolean().default(false).optional(),
});

type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
  initialData:
    | (Product & {
        images: Image[];
      })
    | null;
  categories: Category[];
  colors: Color[];
  sizes: Size[];
}

const ProductForm = ({
  initialData,
  categories,
  sizes,
  colors,
}: ProductFormProps) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit product" : "Create product";
  const description = initialData ? "Edit a product." : "Add a new product";
  const toastMessage = initialData ? "Product updated." : "Product created.";
  const action = initialData ? "Save changes" : "Create";

  const AllCategories = categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const AllSizes = sizes.map((size) => ({
    label: size.name,
    value: size.id,
  }));

  const AllColors = colors.map((color) => ({
    label: color.value,
    value: color.id,
  }));

  const defaultValues = initialData
    ? {
        ...initialData,
        price: parseFloat(String(initialData?.price)),
      }
    : {
        name: "",
        images: [],
        price: 0,
        categoryId: "",
        colorId: "",
        sizeId: "",
        isFeatured: false,
        isArchived: false,
      };

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (values: ProductFormValues) => {
    const data = {
      name: values.name,
      price: values.price,
      images: values.images,
      categoryId: values.category.value,
      colorId: values.color.value,
      sizeId: values.size.value,
      isFeatured: values.isFeatured,
      isArchived: values.isArchived,
    };

    try {
      setLoading(true);
      if (initialData) {
        await axios.patch(
          `/api/${params.storeId}/products/${params.productId}`,
          data
        );
      } else {
        await axios.post(`/api/${params.storeId}/products`, data);
      }
      router.refresh();
      router.push(`/${params.storeId}/products`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
      router.refresh();
      router.push(`/${params.storeId}/products`);
      toast.success("Product deleted.");
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <>
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
              name="images"
              render={({ field, fieldState: { error } }) => (
                <FormControl error={!!error}>
                  <FormLabel>Background image</FormLabel>
                  <ImageUpload
                    value={field.value.map((image) => image.url)}
                    disabled={loading}
                    onChange={(url) =>
                      field.onChange([...field.value, { url }])
                    }
                    onRemove={(url) =>
                      field.onChange([
                        ...field.value.filter((current) => current.url !== url),
                      ])
                    }
                  />
                  <FormHelperText />
                </FormControl>
              )}
            />
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
                  variant="outlined"
                  disabled={loading}
                  label="Product name"
                  color="info"
                />
              )}
            />
            <Controller
              control={form.control}
              name="price"
              render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
              }) => (
                <TextField
                  helperText={error ? error.message : null}
                  type="number"
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  variant="outlined"
                  disabled={loading}
                  label="Price"
                  color="info"
                />
              )}
            />
            <Controller
              control={form.control}
              name="category"
              render={({ field, fieldState: { error } }) => (
                <Autocomplete
                  // {...field}
                  // defaultValue={
                  //   initialData
                  //     ? {
                  //         label: category.billboard.label,
                  //         value: category.billboard.id,
                  //       }
                  //     : null
                  // }
                  disablePortal
                  id="combo-box-demo"
                  options={AllCategories}
                  size="small"
                  sx={{ width: 400 }}
                  onChange={(e, newValue) => {
                    field.onChange(newValue || "");
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Category"
                      variant="standard"
                      error={!!error}
                      helperText={error?.message}
                      disabled={loading}
                    />
                  )}
                />
              )}
            />
            <Controller
              control={form.control}
              name="color"
              render={({ field, fieldState: { error } }) => (
                <Autocomplete
                  // {...field}
                  // defaultValue={
                  //   initialData
                  //     ? {
                  //         label: category.billboard.label,
                  //         value: category.billboard.id,
                  //       }
                  //     : null
                  // }
                  disablePortal
                  id="combo-box-demo"
                  options={AllColors}
                  size="small"
                  sx={{ width: 400 }}
                  onChange={(e, newValue) => {
                    field.onChange(newValue || "");
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Color"
                      variant="standard"
                      error={!!error}
                      helperText={error?.message}
                      disabled={loading}
                    />
                  )}
                />
              )}
            />
            <Controller
              control={form.control}
              name="size"
              render={({ field, fieldState: { error } }) => (
                <Autocomplete
                  // {...field}
                  // defaultValue={
                  //   initialData
                  //     ? {
                  //         label: category.billboard.label,
                  //         value: category.billboard.id,
                  //       }
                  //     : null
                  // }
                  disablePortal
                  id="combo-box-demo"
                  options={AllSizes}
                  size="small"
                  sx={{ width: 400 }}
                  onChange={(e, newValue) => {
                    field.onChange(newValue || "");
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Size"
                      variant="standard"
                      error={!!error}
                      helperText={error?.message}
                      disabled={loading}
                    />
                  )}
                />
              )}
            />
            <Box>
              <MainButton
                size={ButtonSizeType.Medium}
                variant={ButtonVariantType.Contained}
                text={action}
                type={ButtonType.Submit}
                // isDisabled={isLoading}
              />
            </Box>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default ProductForm;
