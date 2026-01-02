import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button, ButtonProps } from "../ui/button";

export function StoreFree({...rest}: ButtonProps) {
  return (
    <Button {...rest} variant="secondary" className="w-full" asChild>
      <Link href="criar-loja-gratis">
        Criar loja grátis
        <ArrowRight className="text-gray-100 lg:h-6 lg:w-6 h-4 w-4" />
      </Link>
    </Button>
  );
}
