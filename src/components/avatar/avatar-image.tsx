import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type AvatarSize = "xs" | "sm"

type AvatarImageProps = Omit<ImageProps, "heigth" | "width"> & {
    size: AvatarSize
}

const avatarSize = {
    xs: "h-5 w-5",
    sm: "h-9 w-9"
}

export function AvatarImage({ size = 'xs', ...rest }: AvatarImageProps) {
  return (
    <div className={cn("relative border-[1px] border-blue-300 rounded-full", avatarSize[size])}>
      <Image {...rest} fill className="object-cover object-center" />
    </div>
  );
}
