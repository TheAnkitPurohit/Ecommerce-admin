"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  close,
  open,
  selectIsClosable,
  selectOpen,
  setIsClosable,
} from "@/store/slices/storeSlice";

const useStoreHook = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectOpen);
  const isClosable = useAppSelector(selectIsClosable);

  const onOpen = (isClose: boolean) => {
    dispatch(open());

    if (isClose) {
      dispatch(setIsClosable());
    }
  };

  const onClose = () => {
    dispatch(close());
  };

  return { dispatch, isOpen, onOpen, onClose, isClosable };
};

export default useStoreHook;
