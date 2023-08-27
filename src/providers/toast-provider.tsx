"use client";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return <Toaster toastOptions={{ duration: 1000 }} />;
};

export default ToastProvider;
