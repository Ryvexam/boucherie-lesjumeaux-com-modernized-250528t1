import React from 'react'
import { Tag, Clock, Star } from 'lucide-react'

export default function Promo() {
  return (
    <section id="promo" className="py-16 px-4 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Special Offers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our current promotions and seasonal specials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Promo Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Tag className="h-6 w-6 text-red-600" />
                </div>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Limited Time
                </span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Weekly Special
              </h3>
              <p className="text-gray-600 mb-4">
                Check back weekly for our featured cuts and seasonal selections
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                <span>Updated weekly</span>
              </div>
            </div>
          </div>

          {/* Promo Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-red-600" />
                </div>
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Quality Selection
              </h3>
              <p className="text-gray-600 mb-4">
                Premium cuts and specialty items available for discerning customers
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="h-4 w-4 mr-2" />
                <span>Premium quality</span>
              </div>
            </div>
          </div>

          {/* Promo Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Tag className="h-6 w-6 text-red-600" />
                </div>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Seasonal
                </span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Seasonal Offers
              </h3>
              <p className="text-gray-600 mb-4">
                Special seasonal promotions and holiday selections available
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                <span>Seasonal availability</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-black text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Visit us regularly to discover our latest promotions and special offers
            </p>
            <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
              <Tag className="h-5 w-5 mr-2" />
              Current Offers Available
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}