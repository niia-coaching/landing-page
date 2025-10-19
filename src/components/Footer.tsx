import React from "react"
import { motion } from "framer-motion"
import { Instagram, Youtube, Facebook, Linkedin, Mail } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <>
          <footer className="bg-niia-beige-light text-niia-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Brand Section */}
          <div className="mb-16">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-niia-black mb-4">
                NIIA <span className="font-light">COACHING</span>
              </h2>
              <p className="text-lg text-niia-gray mb-6">
                De l'effondrement silencieux à la renaissance souveraine. 
                Transformez vos traumas en sagesse et retrouvez votre énergie sacrée.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:contact@niia-coaching.com" className="text-niia-gray hover:text-niia-teal transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            
            {/* Programmes */}
            <div>
              <h3 className="font-bold text-niia-black mb-6">Programmes</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Coaching Individuel</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Coaching de Groupe</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Formation Entreprise</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Retraites</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Diagnostic NIIA</a></li>
              </ul>
            </div>

            {/* Les 7 Batteries */}
            <div>
              <h3 className="font-bold text-niia-black mb-6">Les 7 Batteries</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Physique</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Mentale</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Émotionnelle</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Identitaire</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Relationnelle</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Professionnelle</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Spirituelle</a></li>
              </ul>
            </div>

            {/* Ressources */}
            <div>
              <h3 className="font-bold text-niia-black mb-6">Ressources</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Blog</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Podcast</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Newsletter</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Témoignages</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* À Propos */}
            <div>
              <h3 className="font-bold text-niia-black mb-6">À Propos</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Ayoub Sadry</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Notre Mission</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Méthode NIIA</a></li>
                <li><a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Presse</a></li>
                <li><a href="mailto:contact@niia-coaching.com" className="text-niia-gray hover:text-niia-teal transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>


          {/* Bottom Section */}
          <div className="border-t border-niia-beige-light pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              
              {/* Copyright */}
              <div>
                <p className="text-sm text-niia-gray">
                  © 2025 NIIA Coaching. Tous droits réservés.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Politique de Confidentialité</a>
                <a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">CGV</a>
                <a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Mentions Légales</a>
                <a href="#" className="text-niia-gray hover:text-niia-teal transition-colors">Préférences Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

          {/* Floating CTA Button */}
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.button
              className="bg-niia-teal hover:bg-niia-teal-dark text-white font-bold px-6 py-4 rounded-full shadow-xl transition-all duration-300 flex items-center space-x-2 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🎯 Masterclass GRATUITE</span>
            </motion.button>
          </motion.div>
    </>
  )
}

export default Footer