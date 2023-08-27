import "./globals.css";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import ToastProvider from "@/providers/toast-provider";
import StoreProvider from "@/providers/store-provider";
import ThemeProvider from "@/providers/theme-provider";
import ModalProvider from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <StoreProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <ToastProvider />
              <ModalProvider />
            </ThemeProvider>
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}