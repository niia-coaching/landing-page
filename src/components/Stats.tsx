import React from 'react'
import { motion } from 'framer-motion'

const Stats: React.FC = () => {
  return (
    <section 
      id="stats" 
      className="py-24 bg-gradient-to-r from-niia-beige to-niia-beige-light"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-niia-black mb-4">
              Notre Impact en Chiffres
            </h2>
            <p className="text-lg text-niia-gray max-w-2xl mx-auto">
              Des résultats concrets qui témoignent de l'efficacité de notre méthode des 7 batteries de vie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="text-5xl lg:text-6xl font-bold text-niia-black group-hover:text-niia-teal transition-colors duration-300 mb-3">
                  500+
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-niia-teal to-niia-teal-dark mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-lg text-niia-gray font-semibold">Vies Transformées</div>
              <div className="text-sm text-niia-gray mt-2 opacity-80">
                Personnes ayant retrouvé l'équilibre grâce à nos 7 batteries
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="text-5xl lg:text-6xl font-bold text-niia-black group-hover:text-niia-teal transition-colors duration-300 mb-3">
                  7
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-niia-teal to-niia-teal-dark mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-lg text-niia-gray font-semibold">Batteries de Vie</div>
              <div className="text-sm text-niia-gray mt-2 opacity-80">
                Dimensions complètes pour une transformation holistique
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className="text-5xl lg:text-6xl font-bold text-niia-black group-hover:text-niia-teal transition-colors duration-300 mb-3">
                  95%
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-niia-teal to-niia-teal-dark mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-lg text-niia-gray font-semibold">Taux de Réussite</div>
              <div className="text-sm text-niia-gray mt-2 opacity-80">
                Satisfaction et résultats durables chez nos clients
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
