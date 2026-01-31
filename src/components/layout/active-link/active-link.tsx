'use client'
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  children: ReactNode;
} & LinkProps;

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();
  const linkPath = (typeof href === "string" ? href : href.pathname) ?? "";
  const isActive = pathname === href || pathname?.startsWith(`/${linkPath}`);
  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        `text-action-sm text-gray-100 transition-colors
        hover:text-blue-200`,
        isActive ? "text-blue-200" : "text-gray-100",
      )}
    >
      {children}
    </Link>
  );
}
