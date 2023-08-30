import { useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { Billboard } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";

// form
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import axios, { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { CategoryBillBoard } from "../../../../store.types";

const formSchema = z.object({
  name: z.string().min(1, "Please enter a Name."),
  billboard: z.object({
    value: z.string().min(1, "Please Select a billboard."),
    label: z.string().min(1, "Please Select a billboard."),
  }),
});

type CategoryFormValues = z.infer<typeof formSchema>;

interface CategoryFormModalProps {
  open: boolean;
  handleClose: () => void;
  category: CategoryBillBoard | null;
  setCategory: React.Dispatch<React.SetStateAction<CategoryBillBoard | null>>;
  billboards: Billboard[];
}

const CategoryFormModal = ({
  open,
  handleClose,
  category,
  setCategory,
  billboards,
}: CategoryFormModalProps) => {
  const router = useRouter();
  const params = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const title = category ? "Edit Category" : "Create Category";
  const description = category ? "Edit a Category." : "Add a new Category";
  const toastMessage = category ? "Category updated." : "Category created.";
  const action = category ? "Save changes" : "Create";

  const AllBillboards = billboards.map((billboard) => ({
    label: billboard.label,
    value: billboard.id,
  }));

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: category
      ? {
          name: category.name,
          billboard: {
            label: category.billboard.label,
            value: category.billboard.id,
          },
        }
      : {
          name: "",
          billboard: {
            label: "",
            value: "",
          },
        },
  });

  const onSubmit = async (values: CategoryFormValues) => {
    setIsLoading(true);

    const data = {
      name: values.name,
      billboardId: values.billboard.value,
    };

    try {
      if (category) {
        await axios.patch(
          `/api/${params.storeId}/categories/${category.id}`,
          data
        );
      } else {
        await axios.post(`/api/${params.storeId}/categories`, data);
      }

      router.refresh();
      router.push(`/${params.storeId}/categories`);
      toast.success(toastMessage);
      onClose();
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onClose = () => {
    setCategory(null);
    handleClose();
    form.reset();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title} </DialogTitle>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={2}>
            <Controller
              control={form.control}
              name="billboard"
              render={({ field, fieldState: { error } }) => (
                <Autocomplete
                  // {...field}
                  defaultValue={
                    category
                      ? {
                          label: category.billboard.label,
                          value: category.billboard.id,
                        }
                      : null
                  }
                  disablePortal
                  id="combo-box-demo"
                  options={AllBillboards}
                  size="small"
                  sx={{ width: 400 }}
                  onChange={(e, newValue) => {
                    field.onChange(newValue || "");
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Billboard"
                      variant="standard"
                      error={!!error}
                      helperText={error?.message}
                      disabled={isLoading}
                    />
                  )}
                />
              )}
            />

            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  margin="dense"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  sx={{ width: 400 }}
                  {...field}
                  helperText={error?.message}
                  disabled={isLoading}
                />
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" type="submit" disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : "Submit"}
          </Button>
          <Button onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CategoryFormModal;
