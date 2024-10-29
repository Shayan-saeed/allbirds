'use client'
import { ReactNode, useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from "@/components/ui/sonner"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>{loading ? (
        <Loader />
      ) : (
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider store={store}>
            <Header />
            {children}
            <Footer />
            <ToastContainer />
          </Provider>
          <Toaster />

        </ThemeProvider>
      )}
      </body>
    </html>
  );
}
