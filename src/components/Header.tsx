import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Mail } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#services', label: 'Programmes' },
    { href: '#apropos', label: 'À Propos' },
    { href: '#temoignages', label: 'Témoignages' },
  ]

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-niia-beige shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Main navigation */}
      <nav className="px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div>
              <h1 className="text-xl font-bold text-niia-black">
                Ayoub Sadry
              </h1>
              <p className="text-xs text-niia-gray font-medium">Fondateur NIIA Coaching</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-niia-gray font-medium hover:text-niia-black transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-niia-teal transition-all duration-200 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.a
              href="mailto:contact@niia-coaching.com"
              className="px-8 py-3 bg-gradient-to-r from-niia-teal to-niia-teal-dark text-white font-bold rounded-xl hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17,
                delay: 0.5, 
                duration: 0.6 
              }}
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-3 rounded-xl text-niia-gray hover:bg-niia-beige transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="mt-6 pb-6 pt-6 border-t border-niia-beige">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-niia-gray font-medium py-3 px-4 rounded-xl hover:bg-niia-beige transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:contact@niia-coaching.com"
                className="px-8 py-4 bg-gradient-to-r from-niia-teal to-niia-teal-dark text-white font-bold rounded-xl hover:shadow-xl transition-all duration-200 w-full mt-4 flex items-center justify-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header