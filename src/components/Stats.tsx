import React from 'react'
import { motion } from 'framer-motion'

const Stats: React.FC = () => {
  const stats = [
    {
      number: "500+",
      label: "Vies Transformées",
      description: "Personnes ayant retrouvé l'équilibre grâce à nos 7 batteries"
    },
    {
      number: "7",
      label: "Batteries de Vie",
      description: "Dimensions complètes pour une transformation holistique"
    },
    {
      number: "95%",
      label: "Taux de Réussite",
      description: "Satisfaction et résultats durables chez nos clients"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase text-niia-black mb-3">
            • Notre Impact
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-niia-black mb-6 leading-tight">
            Des Résultats Concrets
          </h2>
          <p className="text-xl text-niia-gray max-w-4xl mx-auto leading-relaxed">
            Des chiffres qui témoignent de l'efficacité de notre méthode IMPACT
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white border border-niia-beige-light rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="space-y-4">
                <div className="text-5xl lg:text-6xl font-bold text-niia-teal">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold text-niia-black">
                  {stat.label}
                </h3>
                <p className="text-niia-gray leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
