"use client";

import { useEffect } from "react";
import useStoreHook from "@/hooks/useStoreHook";

const Page = () => {
  const { isOpen, onOpen } = useStoreHook();

  useEffect(() => {
    if (!isOpen) {
      onOpen(false);
    }
  }, []);

  return null;
};

export default Page;
