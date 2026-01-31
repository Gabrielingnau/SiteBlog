import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

import { PostShare } from "./components/post-share/post-share";

export type PostPageProps = {
  post: Post;
};

export function PostPage({ post }: PostPageProps) {
  const postUrl = `https://site.set/blog/${post.slug}`;

  const hasCover = Boolean(post.image);
  const hasAvatar = Boolean(post.author?.avatar);
  const hasDate = Boolean(post.date);

  return (
    <main className="py-10 sm:py-20 mt-7 sm:mt-8">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm line-clamp-1">
                {post.slug}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12 mt-8">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/7] w-full overflow-hidden rounded-lg">
              {hasCover && (
                <Image
                  alt={post.title}
                  src={post.image}
                  priority
                  fill
                  className="object-cover"
                />
              )}
            </figure>

            <header className="p-4 md:p-6 lg:p-12 pb-0">
              <h1 className="mb-8 mt-8 text-balance text-lg md:text-xl">
                {post.title}
              </h1>

              <Avatar.Container>
                {hasAvatar && (
                  <Avatar.Image
                    alt={post.author.name}
                    src={post.author.avatar}
                    size="sm"
                  />
                )}

                <Avatar.Content>
                  <Avatar.Title>{post.author.name}</Avatar.Title>

                  {hasDate && (
                    <Avatar.Description>
                      Publicado em {format(parseISO(post.date), "dd/MM/yyyy")}
                    </Avatar.Description>
                  )}
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="px-4 mt-8 md:px-6 lg:px-16">
              {post.body?.raw && <Markdown content={post.body.raw} />}
            </div>
          </article>
          <PostShare
            url={postUrl}
            title={post.title}
            description={post.description}
          />
        </div>
      </div>
    </main>
  );
}
