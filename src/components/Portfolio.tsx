import React, { useState } from 'react'
import { ShoppingCart, ExternalLink } from 'lucide-react'

interface Product {
  title: string
  description: string
  image: string
  url: string
}

export default function Portfolio() {
  const [selectedWeights, setSelectedWeights] = useState<{[key: string]: string}>({})

  const products: Product[] = [
    {
      title: "Chipolatas nature",
      description: "34,00€ /kg - 4 pièces (400g) - 13,60€; 6 pièces (600g) - 20,40€; 10 pièces (1kg000) - 34,00€",
      image: "/assets/images/image_wcLM1npvlL.jpg",
      url: "https://www.boucherie-lesjumeaux.com/fr/produits/chipolatas-nature"
    },
    {
      title: "Chipolatas oignons frits",
      description: "34,00€ /kg - 4 pièces (400g) - 13,60€; 6 pièces (600g) - 20,40€; 10 pièces (1kg000) - 34,00€",
      image: "/assets/images/image_guxNY46n8E.jpg",
      url: "https://www.boucherie-lesjumeaux.com/fr/produits/chipolatas-oignons-frits"
    },
    {
      title: "Chipolatas miel et figue",
      description: "34,00€ /kg - 4 pièces (400g) - 13,60€; 6 pièces (600g) - 20,40€; 10 pièces (1kg000) - 34,00€",
      image: "/assets/images/image_NhArwEG55y.jpg",
      url: "https://www.boucherie-lesjumeaux.com/fr/produits/chipolatas-miel-et-figue"
    },
    {
      title: "Chipolatas emmental",
      description: "34,00€ /kg - 4 pièces (400g) - 13,60€; 6 pièces (600g) - 20,40€; 10 pièces (1kg000) - 34,00€",
      image: "/assets/images/image_KBLSVzgDPF.jpg",
      url: "https://www.boucherie-lesjumeaux.com/fr/produits/chipolatas-emmental"
    },
    {
      title: "Chipolatas truffe",
      description: "77,00€ /kg - 4 pièces (400g) - 30,80€; 6 pièces (600g) - 46,20€; 10 pièces (1kg000) - 77,00€ - Rupture de stock",
      image: "/assets/images/image_fVl9EOpfPr.jpg",
      url: "https://www.boucherie-lesjumeaux.com/fr/produits/chipolatas-truffe"
    },
    {
      title: "Saucisse Continentale",
      description: "34,48€ /kg - 6 pièces (290g) - 10,00€",
      image: "/assets/images/image_C1P3jwEyLt.jpg",
      url: "https://www.boucherie-lesjumeaux.com/fr/produits/saucisse-continentale"
    },
    {
      title: "Assortiment de cinq Chipolata",
      description: "34,00€ /kg - 5 pièces (500g) - 17,00€; 10 pièces (1kg000) - 34,00€",
      image: "/assets/images/image_vZXQuFzope.jpg",
      url: "https://www.boucherie-lesjumeaux.com/fr/produits/assortiment-de-cinq-chipolata"
    },
    {
      title: "Merguez douce",
      description: "29,99€ /kg - 4 pièces (400g) - 12,00€; 6 pièces (600g) - 17,99€; 10 pièces (1kg000) - 29,99€",
      image: "/assets/images/image_WoCDLcXdVE.jpg",
      url: "https://www.boucherie-lesjumeaux.com/fr/produits/merguez-douce"
    },
    {
      title: "Merguez de boeuf piquante",
      description: "29,99€ /kg - 4 pièces (400g) - 12,00€; 6 pièces (600g) - 17,99€; 10 pièces (1kg000) - 29,99€",
      image: "/assets/images/image_DdbFNKPySz.jpg",
      url: "https://www.boucherie-lesjumeaux.com/fr/produits/merguez-de-boeuf-piquante"
    }
  ]

  const parseProductOptions = (description: string) => {
    const parts = description.split(' - ')
    const pricePerKg = parts[0]
    const options = parts.slice(1).filter(part => !part.includes('Rupture'))
    const outOfStock = description.includes('Rupture de stock')
    
    return { pricePerKg, options, outOfStock }
  }

  const handleWeightChange = (productTitle: string, option: string) => {
    setSelectedWeights(prev => ({
      ...prev,
      [productTitle]: option
    }))
  }

  return (
    <section id="portfolio" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nos produits phares
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Liste complète des produits avec noms, prix au kg, et options de poids, avec possibilité d'ajouter au panier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const { pricePerKg, options, outOfStock } = parseProductOptions(product.description)
            
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  {outOfStock && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                      Rupture de stock
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {product.title}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-red-600 mb-2">
                      {pricePerKg}
                    </p>
                    
                    {options.length > 0 && (
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Options de poids:
                        </label>
                        <select
                          value={selectedWeights[product.title] || ''}
                          onChange={(e) => handleWeightChange(product.title, e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          disabled={outOfStock}
                        >
                          <option value="">Choisir une option</option>
                          {options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      disabled={outOfStock || !selectedWeights[product.title]}
                      className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart size={16} />
                      Ajouter au panier
                    </button>
                    
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
                      aria-label={`Voir les détails de ${product.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}