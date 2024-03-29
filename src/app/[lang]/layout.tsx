import type { Metadata } from "next";
import { Inter, Space_Mono, Pacifico } from "next/font/google";
import "@/app/globals.css";
import { i18n } from "../../i18n-config";
import { Toaster } from "@/components/ui/toaster";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale.code }));
}

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-monospace",
});
const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "Atas Lapenas - Developer",
  description:
    "My awesome portfolio featuring my projects, skills and passions.",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${inter.className} ${spaceMono.variable} ${pacifico.variable} min-w-full`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
