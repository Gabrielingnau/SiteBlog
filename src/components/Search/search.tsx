import { CircleX, SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback, useRef, useState } from "react";
import clsx from "clsx";

export function Search() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState(
    (router.query.q as string) || ""
  );

  const [isFocused, setIsFocused] = useState(false);

  const hasText = query.length > 0;

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (!query.trim()) return;

      router.push(`/blog?q=${encodeURIComponent(query)}`);
    },
    [query, router]
  );

  const handleQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = event.target.value;

      setQuery(newQuery);

      router.push(
        newQuery.trim()
          ? `/blog?q=${encodeURIComponent(newQuery)}`
          : "/blog",
        undefined,
        { shallow: true, scroll: false }
      );
    },
    [router]
  );

  const resetSearch = useCallback(() => {
    setQuery("");

    router.push("/blog", undefined, {
      shallow: true,
      scroll: false,
    });

    inputRef.current?.focus();
  }, [router]);

  return (
    <form onSubmit={handleSearch} className="relative group md:w-72 w-full">
      <SearchIcon
        className={clsx(
          "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-200",
          isFocused || hasText ? "text-blue-300" : "text-gray-300"
        )}
      />

      <input
        ref={inputRef}
        type="text"
        value={query}
        placeholder="Buscar"
        onChange={handleQueryChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={clsx(
          "h-10 md:w-72 w-full bg-transparent border rounded-md pl-9 pr-9 text-gray-100",
          "outline-none transition-all duration-200 placeholder:text-gray-300",
          "border-gray-400",
          isFocused && "border-blue-300 ring-1 ring-blue-300"
        )}
      />

      {hasText && (
        <button
          type="button"
          onClick={resetSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <CircleX size={16} />
        </button>
      )}
    </form>
  );
}
