import Link from "next/link";

import { Logo } from "../logo";

export function Footer() {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard">
        <div className="w-full py-8 flex justify-between p-2">
          <Logo />

          <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-sm text-muted-foreground">
            <Link
              href="termos-de-uso"
              className="text-blue-100 transition-colors text-body-sm hover:text-primary"
            >
              Termos de Uso
            </Link>
            <Link
              href="politica-de-privacidade"
              className="text-blue-100 transition-colors text-body-sm hover:text-blue-200"
            >
              Politica de privacidade
            </Link>
            <Link
              href="feedback"
              className="text-blue-100 transition-colors text-body-sm hover:text-blue-200"
            >
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
