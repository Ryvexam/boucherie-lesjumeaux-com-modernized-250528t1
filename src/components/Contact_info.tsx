import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact_info() {
  return (
    <section id="contact_info" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with Les Jumeaux for all your butcher needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Address</h3>
            <p className="text-gray-600">
              [Address details to be provided]
            </p>
          </div>

          {/* Phone */}
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Phone</h3>
            <p className="text-gray-600">
              [Phone number to be provided]
            </p>
          </div>

          {/* Email */}
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Email</h3>
            <p className="text-gray-600">
              [Email address to be provided]
            </p>
          </div>

          {/* Hours */}
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Hours</h3>
            <p className="text-gray-600">
              [Business hours to be provided]
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-red-800 font-medium">
              Contact information needs to be updated with actual business details from Les Jumeaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}