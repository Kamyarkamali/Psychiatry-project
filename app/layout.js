import { Inter } from "next/font/google";
import "./globals.css";
import Headerpages from "@/components/module/Headerpages";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AppProvider } from "@/context/AppContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "روانپزشکی آرمان",
  description: "روانپزشکی و مشاوره",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={inter.className}>
        <AppProvider>
          <Headerpages />
          <main>{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
