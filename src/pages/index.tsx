import { Inter, PT_Sans_Caption } from "next/font/google";

import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { SupportSection } from "@/components/support-section";
import { CustomerStoreSection } from "@/components/customer-store-section";

const inter = Inter({
  subsets: ["latin"],
});

const PTSansCaption = PT_Sans_Caption({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <article
      className={`${inter.className} ${PTSansCaption.className} flex flex-col`}
    >
      <HeroSection/>
      <FeatureSection/>
      <SupportSection/>
      <CustomerStoreSection/>
    </article>
  );
}
