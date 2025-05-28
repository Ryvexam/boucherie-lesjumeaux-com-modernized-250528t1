import React from 'react'
import { ShoppingCart, Clock, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          
          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="block text-white">Élégance boucherie,</span>
              <span className="block text-red-500">conviviale & halal</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              La boucherie d'exception avec une touche conviviale
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <button className="group bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 md:px-12 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 group-hover:animate-pulse" />
                COMMANDER
              </button>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-semibold text-white">Horaires d'ouverture</h3>
              </div>
              
              <div className="text-gray-300 space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
                  <div>
                    <span className="font-medium text-white">MAR au SAM:</span>
                    <br />09h00 – 19H30
                  </div>
                  <div>
                    <span className="font-medium text-white">VEN:</span>
                    <br />9h-13h30 et 15h-19h30
                  </div>
                  <div>
                    <span className="font-medium text-white">DIM:</span>
                    <br />9H00 - 13H00
                  </div>
                  <div>
                    <span className="font-medium text-red-400">LUN:</span>
                    <br />FERMÉ
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm">1h offerte au parking du Mail</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 lg:flex-shrink-0 max-w-lg">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              
              {/* Main visual container */}
              <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-white">LJ</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Les Jumeaux</h3>
                  <p className="text-gray-300">Boucherie Halal</p>
                  
                  {/* Quality indicators */}
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-red-500 font-bold text-lg">100%</div>
                      <div className="text-xs text-gray-300">Halal</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-red-500 font-bold text-lg">★★★</div>
                      <div className="text-xs text-gray-300">Qualité</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-red-500 font-bold text-lg">6j/7</div>
                      <div className="text-xs text-gray-300">Ouvert</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  )
}