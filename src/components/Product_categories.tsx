import React from 'react'
import { Grid3X3, Package } from 'lucide-react'

export default function Product_categories() {
  return (
    <section id="product_categories" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Product Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This section requires content from the website owner to display the available product categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder category cards */}
          {[1, 2, 3].map((index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 text-center border-2 border-dashed border-gray-300 hover:border-red-500 transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                {index === 1 ? (
                  <Package className="w-8 h-8 text-gray-400" />
                ) : (
                  <Grid3X3 className="w-8 h-8 text-gray-400" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Category {index}
              </h3>
              <p className="text-gray-600 text-sm">
                Product category content needed
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-black mb-2">
              Content Required
            </h3>
            <p className="text-gray-600 text-sm">
              This product categories section needs to be populated with actual category information from Les Jumeaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}