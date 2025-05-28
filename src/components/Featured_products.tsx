import React from 'react'
import { Star, ShoppingCart } from 'lucide-react'

export default function Featured_products() {
  const placeholderProducts = [
    {
      id: 1,
      name: "Premium Cut",
      price: "€XX.XX",
      rating: 5,
      image: "/assets/images/product-1.jpg"
    },
    {
      id: 2,
      name: "Specialty Selection",
      price: "€XX.XX",
      rating: 5,
      image: "/assets/images/product-2.jpg"
    },
    {
      id: 3,
      name: "Fresh Choice",
      price: "€XX.XX",
      rating: 5,
      image: "/assets/images/product-3.jpg"
    },
    {
      id: 4,
      name: "Quality Meat",
      price: "€XX.XX",
      rating: 5,
      image: "/assets/images/product-4.jpg"
    }
  ]

  return (
    <section id="featured_products" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This section requires actual product data from Les Jumeaux. Please update with your featured meat products, prices, and descriptions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholderProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Product Image</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-black mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-red-500 text-red-500" 
                    />
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-black">
                    {product.price}
                  </span>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors duration-200">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            View All Products
          </button>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> This is a placeholder component. Please replace with actual Les Jumeaux product data including real product names, prices, images, and descriptions from your butcher shop inventory.
          </p>
        </div>
      </div>
    </section>
  )
}