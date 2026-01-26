import Image from "next/image";
import Link from "next/link";

export function PostCard() {
  return (
    <Link
      href="/blog/"
      className="max-w-xl rounded-xl bg-gray-600 border border-gray-400
        transition-all duration-200 hover:border-blue-300 p-2 group"
    >
      <div className="rounded-md space-y-3">
        <div className="relative rounded-sm">
          <div className="rounded-bl-xl p-2 pt-0 absolute bg-gray-600 top-0 right-0">
            <span className="text-body-xs text-gray-300">20/12/24</span>
          </div>

          <Image
            alt="Imagem do post"
            src="/assets/primeiro-post.png"
            width={288}
            height={144}
            className="object-cover w-full h-40 object-center rounded-md"
          />
        </div>

        <div className="p-2 flex flex-col items-start gap-3">
          <div className="space-y-2">
            <h2 className="text-xs text-gray-100">
              Transformando seu negócio em uma loja virtual
            </h2>
            <p className="text-body-xs text-gray-300">
              {" "}
              Se você está buscando uma maneira simples e eficaz de vender seus
              produtos online, o Site...
            </p>
          </div>

          <div className="w-full flex items-center justify-start border-t border-gray-400
           group-hover:border-blue-300 transition-colors duration-200 pt-3 gap-2">
            <div className="relative w-5 h-5 border border-blue-300 rounded-full">
              <Image
                alt="Úsuario"
                src="/annette.png"
                fill
                className="object-cover object-center"
              />
            </div>
            <span className="text-body-xs text-gray-300">Aspen Dokidis</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
