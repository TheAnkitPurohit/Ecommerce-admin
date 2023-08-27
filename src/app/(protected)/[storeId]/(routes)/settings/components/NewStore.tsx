"use client";

import MainButton, {
  ButtonSizeType,
  ButtonType,
  ButtonVariantType,
} from "@/components/button/MainButton";
import useStoreHook from "@/hooks/useStoreHook";

const NewStore = () => {
  const { isOpen, onOpen } = useStoreHook();

  return (
    <MainButton
      size={ButtonSizeType.Medium}
      variant={ButtonVariantType.Contained}
      text="Create New Store"
      type={ButtonType.Submit}
      onClick={() => {
        if (!isOpen) {
          onOpen(true);
        }
      }}
    />
  );
};

export default NewStore;
