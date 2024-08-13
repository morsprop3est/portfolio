import type { Metadata } from "next";
import { ThemeProvider } from '@/context/theme';
import '../styles/globals.scss';


export const metadata: Metadata = {
  title: "morsprop3est",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ThemeProvider>
      <body>{children}</body>
    </ThemeProvider>
    </html>
  );
}
