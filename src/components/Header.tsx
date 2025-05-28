'use client'

import React, { useState } from 'react'
import { Menu, X, Phone, Mail, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const mainNavItems = [
    { label: "Accueil", href: "/" },
    { label: "Boutique", href: "/boutique" },
    { label: "Toute notre gamme", href: "/boutique" },
    { label: "Nos Spécialités", href: "/nos-specialites" },
    { label: "Nos Charcuteries", href: "/nos-charcuteries" },
    { label: "Les Volailles", href: "/les-volailles" },
    { label: "Le Boeuf", href: "/le-boeuf" },
    { label: "Le Veau", href: "/le-veau" },
    { label: "L'Agneau", href: "/lagneau" },
    { label: "Viandes exotiques", href: "/viandes-exotiques" },
    { label: "Notre Épicerie", href: "/notre-epicerie" },
    { label: "Le Thon", href: "/le-thon" },
    { label: "Presse", href: "/presse" },
    { label: "Livraison", href: "/livraison" },
    { label: "Histoire", href: "/histoire" },
    { label: "Contact", href: "/contact" }
  ]

  const secondaryNavItems = [
    { label: "Confirmer mon panier", href: "/panier" },
    { label: "Me connecter", href: "/login" },
    { label: "English", href: "/en" },
    { label: "Español", href: "/es" }
  ]

  return (
    <header id="header" className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top contact bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>01 83 72 64 40</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>sav@boucherie-lesjumeaux.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            {secondaryNavItems.slice(2).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="hover:text-red-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white py-4 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo and brand */}
            <div className="flex items-center space-x-3">
              <img
                src="/assets/images/logo.png"
                alt="Les Jumeaux Logo"
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold text-black">Les Jumeaux</h1>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {mainNavItems.slice(0, 8).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-red-500 font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop secondary actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="/panier"
                className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors duration-200"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Panier</span>
              </a>
              <a
                href="/login"
                className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors duration-200"
              >
                <User className="w-5 h-5" />
                <span>Connexion</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto max-w-7xl py-4 px-4">
            <nav className="space-y-3">
              {mainNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-gray-200 pt-3 mt-3">
                {secondaryNavItems.slice(0, 2).map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-red-500 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Secondary navigation bar for categories */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 py-2">
          <nav className="flex items-center justify-center space-x-6 text-sm">
            {mainNavItems.slice(8, 16).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}