import React from 'react'
import { Users } from 'lucide-react'

export default function Team() {
  return (
    <section id="team" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <Users className="w-12 h-12 text-red-600 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Notre Équipe
            </h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <p className="text-gray-600 text-lg">
              Informations sur l'équipe à venir
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}