"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Store } from "@prisma/client";
import { useParams } from "next/navigation";
import useStoreHook from "@/hooks/useStoreHook";
import { Box, FormControl, FormHelperText, InputLabel } from "@mui/material";
import MainButton, {
  ButtonSizeType,
  ButtonType,
  ButtonVariantType,
} from "../button/MainButton";

interface Options {
  label: string;
  value: string;
}

interface Props {
  items: Store[];
}

const StoreSwitcher = ({ items }: Props) => {
  const params = useParams();
  const { isOpen, onOpen } = useStoreHook();

  //   switcher
  const formattedItems: Options[] = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = items.find((item) => item.id === params.storeId);

  const [value, setValue] = React.useState<Options>();

  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: any) => {
          setValue(newValue);
        }}
        disablePortal
        id="combo-box-demo"
        options={formattedItems}
        size="small"
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select Store" />}
      />

      <Box>
        <MainButton
          size={ButtonSizeType.Medium}
          variant={ButtonVariantType.Contained}
          text="Update"
          type={ButtonType.Submit}
        />
      </Box>
    </Box>
  );
};

export default StoreSwitcher;
