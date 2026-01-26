import { Search } from "@/components/Search/search";
import { PostCard } from "./components/post-car";
import { PostGridCard } from "./components/post-grid-card";

export function BlogList() {
  return (
    <div className="relative py-10 sm:py-20 mt-7 sm:mt-8">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard">
        <div className="flex md:flex-row flex-col justify-between md:items-end items-start">
          <div className="flex flex-col gap-3">
            <span className="text-body-tag text-cyan-100 w-fit px-3 py-1.5 rounded-[4px] bg-cyan-300">
              BLOG
            </span>
            <h2 className="sm:text-xl text-lg text-gray-100 max-w-xl">
              Dicas e estratégias para impulsionar seu negócio
            </h2>
          </div>
          <div className="md:mt-0 mt-6 md:w-72 w-full">
            <Search/>
          </div>
        </div>
        <PostGridCard>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </PostGridCard>
      </div>
    </div>
  );
}
