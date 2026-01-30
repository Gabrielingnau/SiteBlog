import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@/components/avatar";

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  slug: string;
  date: string;
  image: string;
  title: string;
  description: string;
  author: Author;
};

export function PostCard({
  slug,
  date,
  image,
  title,
  description,
  author,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="max-w-xl rounded-xl bg-gray-600 border border-gray-400
        transition-all duration-200 hover:border-blue-300 p-2 group h-full"
    >
      <div className="rounded-md flex flex-col h-full">
        <div className="relative rounded-sm">
          <div className="rounded-bl-xl p-2 pt-0 absolute bg-gray-600 top-0 right-0">
            <span className="text-body-xs text-gray-300">{date}</span>
          </div>

          <Image
            alt="Imagem do post"
            src={image}
            width={288}
            height={144}
            className="object-cover w-full h-40 object-center rounded-md"
          />
        </div>

        <div className="p-2 flex flex-col items-start h-full justify-between gap-3">
          <div className="space-y-2">
            <h2 className="text-xs text-gray-100 line-clamp-2">{title}</h2>
            <p className="text-body-xs text-gray-300 line-clamp-3">
              {" "}
              {description}
            </p>
          </div>

          <div
            className="w-full flex items-center justify-start border-t border-gray-400
           group-hover:border-blue-300 transition-colors duration-200 pt-3 gap-2"
          >
            <Avatar.Container>
              <Avatar.Image
                alt={title}
                src={author.avatar}
                size="xs"
              />
              <Avatar.Description>{author.name}</Avatar.Description>
            </Avatar.Container>
          </div>
        </div>
      </div>
    </Link>
  );
}
