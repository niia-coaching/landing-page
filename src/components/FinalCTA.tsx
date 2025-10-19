import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Shield, Star } from "lucide-react"

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-niia-teal via-niia-teal-dark to-niia-blue-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Votre Renaissance Commence
              <br />
              <span className="text-niia-beige-light">Maintenant</span>
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              <strong>500+ personnes ont déjà transformé leur vie</strong> avec la méthode NIIA. 
              <br />
              <strong className="text-niia-beige-light">Vous êtes la prochaine.</strong>
            </p>
          </motion.div>

          {/* Urgency Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-niia-beige-light" />
              <span className="font-semibold">Prochaine masterclass dans 3 jours</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-niia-beige-light" />
              <span className="font-semibold">Garantie de résultats</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-niia-beige-light" />
              <span className="font-semibold">95% de satisfaction</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group bg-niia-beige-light text-niia-black font-bold px-8 py-4 rounded-2xl hover:bg-white transition-all duration-300 flex items-center justify-center space-x-3 text-xl shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🎯 Réserver ma Masterclass GRATUITE</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="group border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white hover:text-niia-teal transition-all duration-300 flex items-center justify-center space-x-3 text-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Découvrir les Programmes</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Final Message */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              <strong>Votre effondrement silencieux se termine aujourd'hui.</strong>
              <br />
              Votre renaissance souveraine commence maintenant.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
