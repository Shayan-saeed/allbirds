'use client'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from "@/components/ui/sonner"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
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
          </Provider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
