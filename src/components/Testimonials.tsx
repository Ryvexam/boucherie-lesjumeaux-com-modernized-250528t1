import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  // Since no testimonials data was provided, create a minimal placeholder structure
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Empty testimonials array since no data was scraped
  const testimonials: any[] = []

  const nextTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }
  }

  const prevTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Témoignages
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <Star className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                Les témoignages de nos clients seront bientôt disponibles.
              </p>
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Testimonial Carousel */}
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              <div className="text-center">
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex]?.content}"
                </blockquote>
                <div className="border-t pt-6">
                  <p className="font-semibold text-black text-lg">
                    {testimonials[currentIndex]?.name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex]?.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {testimonials.length > 1 && (
              <>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Témoignage précédent"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Témoignage suivant"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {testimonials.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}