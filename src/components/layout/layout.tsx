import { Inter, PT_Sans_Caption } from "next/font/google";

import { Footer } from "./footer";
import { Header } from "./header";
import { CallToACtion } from "@/templates/landing-page/sections";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--inter",
});

const PTSansCaption = PT_Sans_Caption({
  weight: "700",
  subsets: ["latin"],
  variable: "--sans",
});

export function Layout({ children }: LayoutProps) {

  return (
    <div
      className={`${inter.className} ${PTSansCaption.className} flex min-h-screen flex-col relative font-inter`}
    >
      <Header />
      <main className="flex-1 flex flex-col mt-16">{children}</main>
      <CallToACtion />
      <Footer />
    </div>
  );
}
