"use client";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

type PostShareProps = {
  url: string;
  title: string;
  description: string;
};

export function PostShare({ url, title, description }: PostShareProps) {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  });
  return (
    <aside className="space-y-6">
      <div className="px-4 lg:px-6">
        <h2 className="hidden lg:block mb-4 text-xs text-gray-100">
          Compartilhar
        </h2>

        <div className="flex justify-between sm:justify-start lg:flex-col gap-2 sm:gap-4">
          {shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              onClick={provider.action}
              variant="outline"
              className="w-fit lg:w-full justify-start gap-2 rounded-lg"
            >
              {provider.icon}
              <span className="hidden lg:block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
