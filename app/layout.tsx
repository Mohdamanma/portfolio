import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from './Provider'



export const metadata: Metadata = {
  title: "Aman's portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`"antialiased dark`}
        suppressHydrationWarning

      >
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
