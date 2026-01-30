import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Logo } from "../../logo";
import { ActiveLink } from "../active-link";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur ">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard">
        <div className="flex items-center justify-between w-full h-16">
          <Logo />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Inicio</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button asChild className={cn(`tex`)}>
              <Link href="/começar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
