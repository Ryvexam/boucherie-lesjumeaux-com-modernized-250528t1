import React from 'react'
import { Beef, ChefHat, Fish, ShoppingBasket, Utensils } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "Nos Spécialités",
      description: "Nos Merguez, Nos Chipolatas, Nos Brochettes, Nos Milanaises, Nos Nuggets, Les Préparations bouchères",
      icon: ChefHat
    },
    {
      title: "Nos Charcuteries",
      description: "",
      icon: Utensils
    },
    {
      title: "Les Volailles",
      description: "Le Poulet, Le Canard, Le Pigeon, La Caille, L'autruche, Nos volailles festives",
      icon: Utensils
    },
    {
      title: "Le Boeuf",
      description: "Boeuf Wagyu, Le Boeuf de Galice",
      icon: Beef
    },
    {
      title: "Le Veau",
      description: "",
      icon: Beef
    },
    {
      title: "L'Agneau",
      description: "L'Agneau, L'Agneau Bleu Blanc Coeur, L'Agneau de "Prés-Salés du Mont-Saint-Michel"",
      icon: Beef
    },
    {
      title: "Viandes exotiques",
      description: "Le Cerf, Le Bison",
      icon: Beef
    },
    {
      title: "Notre Épicerie",
      description: "",
      icon: ShoppingBasket
    },
    {
      title: "Acompte commande spéciale",
      description: "",
      icon: ChefHat
    },
    {
      title: "Le Thon",
      description: "",
      icon: Fish
    }
  ]

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nos catégories de produits
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-red-500"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">
                    {service.title}
                  </h3>
                </div>
                
                {service.description && (
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}