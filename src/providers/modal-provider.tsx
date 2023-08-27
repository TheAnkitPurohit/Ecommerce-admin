"use client";

import { useEffect, useState } from "react";

import CreateStoreModal from "@/components/modals/CreateStoreModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateStoreModal />
    </>
  );
};

export default ModalProvider;
