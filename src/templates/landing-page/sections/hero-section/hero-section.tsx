import { Clock, Store } from "lucide-react";
import Image from "next/image";

import { StoreFree } from "../../../../components/store-free";

export function HeroSection() {
  return (
    <section className="relative py-10 sm:py-20">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard items-center sm:items-start flex flex-col gap-8 sm:gap-14">
        <div className="lg:max-w-3xl max-w-xl flex flex-col items-center sm:items-start gap-6 sm:gap-8">
          <h1 className="text-gray-100 text-center sm:text-start text-lg lg:text-hg font-sans">
            Venda seus produtos como afiliado em um único lugar
          </h1>
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-cyan-100" />
              <p className="text-gray-200 text-body-md">
                Crie o seu site em menos de 5 minutos
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Store className="lg:h-5 lg:w-5 h-4 w-4 text-cyan-100" />
              <p className="text-gray-200 text-body-sm lg:text-body-md">
                Acompanhe e otimize seu negócio online
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <StoreFree />
          <p className="text-gray-300 text-body-sm lg:text-body-md">
            {" "}
            Não precisa de cartão de crédito
          </p>
        </div>
      </div>
      <Image
        src="/background.png"
        alt="Enfeite"
        width={400}
        height={380}
        className="absolute hidden sm:block -z-10 top-20 right-0"
      />
    </section>
  );
}
