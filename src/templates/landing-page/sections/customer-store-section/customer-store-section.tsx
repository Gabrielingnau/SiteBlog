import Image from "next/image";

const customersStore = [
  {
    content: `Criar minha loja com o site.set foi a melhor decisão para o meu negócio. 
    A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.`,
    author: {
      name: "Annette Bones",
      role: "CEO na Anne Corp",
      avatar: "/annette.png",
    },
  },
  {
    content: `Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para 
    gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!`,
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Org",
      avatar: "/jacob.png",
    },
  },
];

export function CustomerStoreSection() {
  return (
    <section className="py-10 sm:py-20">
      <div className="mx-auto px-4 sm:px-6 max-w-screen-standard">
        <div className="w-full flex items-center justify-center">
          <h2 className="text-gray-100 md:text-xl text-md font-sans">
            Quem utiliza, aprova!
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 md:mt-12 mt-8">
          {customersStore.map((customerStore, index) => {
            return (
              <div
                key={index}
                className="w-full p-10 flex flex-col items-start justify-between gap-10 bg-gray-600 rounded-xl"
              >
                <p className="text-gray-200 text-body-md line-clamp-6">
                  {customerStore.content}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-9 w-9 rounded-full relative border-0.5 border-blue-200">
                    <Image
                      alt={customerStore.author.name}
                      src={customerStore.author.avatar}
                      fill
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-200 text-body-sm">
                      {customerStore.author.name}
                    </p>
                    <span className="text-gray-300 text-body-xs">
                      {customerStore.author.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
