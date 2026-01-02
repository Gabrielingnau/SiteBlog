import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  children: ReactNode;
} & LinkProps;

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  const router = useRouter();
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as));
  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        `text-action-sm text-gray-100 transition-colors
        hover:text-blue-200`,
        isCurrentPath ? "text-blue-200" : "text-gray-100"
      )}
    >
      {children}
    </Link>
  );
}
