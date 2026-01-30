import Image from "next/image";

import { StoreFree } from "../../../../components/store-free";

export function FeatureSection() {
  return (
    <section className="py-10 sm:py-20">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-5 sm:grid-rows-3 gap-6">
          <div className="rounded-xl w-full flex flex-col items-start justify-center p-6 lg:p-12 gap-4 bg-gray-500">
            <div className="px-3 py-1.5 bg-blue-400">
              <p className="text-blue-200 text-body-tag uppercase">simples</p>
            </div>
            <h2 className="text-gray-100 text-sm lg:text-lg font-sans">
              Crie um catálogo de produtos online em poucos minutos
            </h2>
          </div>

          <div className="rounded-xl w-full flex flex-col items-start justify-center p-6 lg:p-12 gap-4 bg-gray-500">
            <div className="px-3 py-1.5 bg-blue-400">
              <p className="text-blue-200 text-body-tag uppercase">prático</p>
            </div>
            <h2 className="text-gray-100 text-sm lg:text-lg font-sans">
              Venda para seu público através de uma plataforma única
            </h2>
          </div>

          <div className="row-span-3 relative sm:row-span-2 col-span-1 sm:col-span-2 rounded-xl w-full flex flex-col sm:flex-row items-center sm:items-start justify-between p-6 lg:p-12 gap-3 sm:gap-4 bg-gray-500">
            <div className="flex flex-col items-start gap-4">
              <div className="px-3 py-1.5 bg-blue-400">
                <p className="text-blue-200 text-body-tag uppercase">
                  personalizável
                </p>
              </div>
              <h2 className="text-gray-100 text-sm lg:text-lg font-sans">
                Tenha uma loja online personalizada com a cara da sua marca
              </h2>
              <div className="absolute bottom-6 lg:bottom-12 left-6 lg:left-12 hidden sm:block">
                <StoreFree />
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image
                src="/illustration.png"
                alt="Ilustração"
                objectFit="contain"
                sizes="(max-width: 768px) 50vw, 100vw"
                fill
              />
            </div>
            <div className="block sm:hidden w-full">
              <StoreFree />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
