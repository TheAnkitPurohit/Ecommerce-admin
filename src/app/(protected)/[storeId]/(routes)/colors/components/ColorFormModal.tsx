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
import { Color } from "@prisma/client";
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

type ColorFormValues = z.infer<typeof formSchema>;

interface ColorFormModalProps {
  open: boolean;
  handleClose: () => void;
  color: Color | null;
  SetColor: React.Dispatch<React.SetStateAction<Color | null>>;
}

const ColorFormModal = ({
  open,
  handleClose,
  color,
  SetColor,
}: ColorFormModalProps) => {
  const router = useRouter();
  const params = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const title = color ? "Edit Color" : "Create Color";
  const description = color ? "Edit a Color." : "Add a new Color";
  const toastMessage = color ? "Color updated." : "Color created.";
  const action = color ? "Save changes" : "Create";

  const form = useForm<ColorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: color || {
      name: "",
      value: "",
    },
  });

  const onSubmit = async (values: ColorFormValues) => {
    setIsLoading(true);

    try {
      if (color) {
        await axios.patch(`/api/${params.storeId}/colors/${color.id}`, values);
      } else {
        await axios.post(`/api/${params.storeId}/colors`, values);
      }

      router.refresh();
      router.push(`/${params.storeId}/colors`);
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
    SetColor(null);
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

export default ColorFormModal;
