import React from 'react'
import { Facebook, Twitter, Instagram, Music } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-500 mb-4">Les Jumeaux</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Boucherie artisanale de qualité, au service de votre table depuis des générations.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#accueil" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm">
                Accueil
              </a>
              <a href="#boutique" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm">
                Boutique
              </a>
              <a href="#presse" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm">
                Presse
              </a>
              <a href="#livraison" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm">
                Livraison
              </a>
              <a href="#histoire" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm">
                Histoire
              </a>
              <a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-300">
                  <a href="mailto:sav@boucherie-lesjumeaux.com" className="hover:text-red-500 transition-colors duration-300">
                    sav@boucherie-lesjumeaux.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-300">
                  <a href="tel:0183726440" className="hover:text-red-500 transition-colors duration-300">
                    01 83 72 64 40
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed">
                  99, Rue de Paris<br />
                  93260 Les Lilas<br />
                  Paris, FRANCE
                </p>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <div className="text-sm text-gray-300 leading-relaxed mb-6">
              <p>MAR au SAM 09h00 – 19H30</p>
              <p>SAUF VEN 9h-13h30 et 15h-19h30</p>
              <p>DIM 9H00 - 13H00</p>
              <p className="text-red-500 font-medium">LUN FERMÉ</p>
            </div>
            
            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold mb-3">Suivez-nous</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://www.tiktok.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <Music size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a href="#conditions-generales" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
              Conditions générales
            </a>
            <a href="#qg-entreprise" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
              QG Entreprise
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Ryveweb. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}