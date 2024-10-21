import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
/* The line `import { ThemeProvider } from "@/components/theme-provider";` is importing the
`ThemeProvider` component from a file located at `@/components/theme-provider`. This component is
likely used to provide theming functionality to the application, allowing for easy switching between
different themes or styles. */
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-black text-white antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}