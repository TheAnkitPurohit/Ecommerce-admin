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
import { Size } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";

// form
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import axios, { isAxiosError } from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, "Please enter a Name."),
  value: z.string().min(1, "Please enter a Value."),
});

type SizeFormValues = z.infer<typeof formSchema>;

interface SizeFormModalProps {
  open: boolean;
  handleClose: () => void;
  size: Size | null;
  setSize: React.Dispatch<React.SetStateAction<Size | null>>;
}

const SizeFormModal = ({
  open,
  handleClose,
  size,
  setSize,
}: SizeFormModalProps) => {
  const router = useRouter();
  const params = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const title = size ? "Edit Size" : "Create Size";
  const description = size ? "Edit a Size." : "Add a new Size";
  const toastMessage = size ? "Size updated." : "Size created.";
  const action = size ? "Save changes" : "Create";

  const form = useForm<SizeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: size || {
      name: "",
      value: "",
    },
  });

  const onSubmit = async (values: SizeFormValues) => {
    setIsLoading(true);

    try {
      if (size) {
        await axios.patch(`/api/${params.storeId}/sizes/${size.id}`, values);
      } else {
        await axios.post(`/api/${params.storeId}/sizes`, values);
      }

      router.refresh();
      router.push(`/${params.storeId}/sizes`);
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
    setSize(null);
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
            <Controller
              control={form.control}
              name="value"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  margin="dense"
                  label="Value"
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

export default SizeFormModal;
