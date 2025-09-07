import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorProvider } from "@/context/error-context";
import { ErrorModal } from "@/components/ui/error-modal";

export const metadata = {
  title: "HealthBridge",
  description: "HealthBridge",
  icons: {
    icon: "/logo.jpeg",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.jpeg" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ErrorProvider>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Toaster richColors />
              <ErrorModal />

              <footer className="bg-muted/50 py-12">
                <div className="container mx-auto px-4 text-center text-gray-200">
                  <p>© 2025 HealthBridge. All rights reserved.</p>
                </div>
              </footer>
            </ErrorProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
