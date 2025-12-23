import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ActiveLink } from "../active-link";

export function Header () {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto px-4 sm:px-6 max-w-5xl">
                <div className="flex items-center justify-between w-full h-16">
                  <Link href={'/'}>
                    <Image width={110} height={32} src={'/assets/Logo.png'} alt="Logo"/>
                  </Link>

                  <nav className="flex items-center gap-6">
                   <ActiveLink href='/'>Inicio</ActiveLink>
                   <ActiveLink href='/blog'>Blog</ActiveLink>
                   <Button asChild className="h-9 rounded-full">
                      <Link href='/começar'>Começar</Link>
                    </Button>
                  </nav>
                </div>
            </div>
        </header>
    )
}