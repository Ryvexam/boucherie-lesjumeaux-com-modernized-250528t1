import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ email: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Donnez-nous des nouvelles
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Contactez-nous
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-black mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-600" />
                Adresse
              </h4>
              <p className="text-gray-700 leading-relaxed">
                99, Rue de Paris<br />
                93260 Les Lilas<br />
                Paris, FRANCE
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-black mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-red-600" />
                  <a 
                    href="tel:0183726440" 
                    className="text-gray-700 hover:text-red-600 transition-colors"
                  >
                    01 83 72 64 40
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-red-600" />
                  <a 
                    href="mailto:sav@boucherie-lesjumeaux.com" 
                    className="text-gray-700 hover:text-red-600 transition-colors"
                  >
                    sav@boucherie-lesjumeaux.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-black mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-red-600" />
                Horaires d'ouverture
              </h4>
              <div className="text-gray-700 space-y-1">
                <p><strong>MAR au SAM</strong> 09h00 – 19H30</p>
                <p><strong>SAUF VEN</strong> 9h-13h30 et 15h-19h30</p>
                <p><strong>DIM</strong> 9H00 - 13H00</p>
                <p><strong>LUN</strong> FERMÉ</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-black mb-6">
              Envoyez-nous un message
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formData.email}
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    Votre message a été envoyé avec succès !
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    Une erreur s'est produite. Veuillez réessayer.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}