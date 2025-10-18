import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Qu'est-ce que le coaching NIIA et comment ça fonctionne ?",
      answer: "Le coaching NIIA est une méthode de transformation personnelle basée sur les 7 Batteries de Vie. Nous travaillons sur l'énergie physique, mentale, émotionnelle, identitaire, relationnelle, professionnelle et spirituelle pour créer une renaissance souveraine complète."
    },
    {
      question: "Pourquoi ai-je besoin d'un coach ?",
      answer: "Un coach vous accompagne dans votre transformation en vous offrant un regard extérieur objectif, des outils concrets et un soutien personnalisé. Nous vous aidons à identifier vos blocages, à développer vos potentiels et à créer les changements durables que vous souhaitez."
    },
    {
      question: "Quelles sont les qualifications d'Ayoub Sadry ?",
      answer: "Ayoub Sadry est un coach certifié avec plus de 3 ans d'expérience dans l'accompagnement de dirigeants et entrepreneurs. Il a créé la méthode NIIA après sa propre transformation personnelle, passant de l'effondrement silencieux à la renaissance souveraine."
    },
    {
      question: "À quelle vitesse vais-je voir des résultats ?",
      answer: "Les premiers changements sont souvent visibles dès les premières semaines. Cependant, une transformation profonde et durable nécessite généralement 3 à 6 mois d'accompagnement régulier. Chaque personne évolue à son rythme."
    },
    {
      question: "Combien de temps le coaching nécessite-t-il ?",
      answer: "Nous proposons des sessions de 60 à 90 minutes, généralement une fois par semaine ou toutes les deux semaines. Le programme complet s'étend sur 3 à 6 mois selon vos objectifs et votre rythme de transformation."
    },
    {
      question: "Puis-je avoir un aperçu du coaching avant de m'engager ?",
      answer: "Absolument ! Nous offrons une session stratégique gratuite de 30 minutes pour vous permettre de découvrir notre approche, de clarifier vos objectifs et de voir si notre méthode vous convient."
    },
    {
      question: "Comment le coaching NIIA m'aidera-t-il à atteindre mes objectifs de santé ?",
      answer: "Nous travaillons sur la Batterie Physique pour optimiser votre énergie, votre vitalité et votre bien-être. Cela inclut la gestion du stress, l'équilibre vie professionnelle/personnelle et le développement d'habitudes saines durables."
    },
    {
      question: "Comment le coaching NIIA m'aidera-t-il à devenir un meilleur leader ?",
      answer: "Nous développons la Batterie Professionnelle en travaillant sur votre vision, votre communication, votre gestion d'équipe et votre impact. Vous apprendrez à diriger avec authenticité et à inspirer votre organisation."
    },
    {
      question: "Comment le coaching NIIA améliorera-t-il mes relations ?",
      answer: "La Batterie Relationnelle est au cœur de notre approche. Nous travaillons sur la communication, l'empathie, la gestion des conflits et la création de relations authentiques et épanouissantes."
    },
    {
      question: "Comment le coaching NIIA améliorera-t-il mon estime de soi ?",
      answer: "La Batterie Identitaire est fondamentale dans notre méthode. Nous vous aidons à vous reconnecter à votre essence, à développer une confiance inébranlable et à cultiver une relation saine avec vous-même."
    },
    {
      question: "Ne puis-je pas obtenir les mêmes bénéfices en lisant des livres ?",
      answer: "Les livres sont excellents pour la théorie, mais le coaching offre un accompagnement personnalisé, un feedback en temps réel et un soutien dans l'application concrète. C'est la différence entre savoir et faire."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Title and CTA */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-niia-teal rounded-full"></div>
                <span className="text-sm font-semibold text-niia-gray uppercase tracking-wider">
                  Questions Fréquentes
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-niia-black leading-tight">
                FAQ
              </h2>
              
              <motion.button
                className="px-6 py-3 bg-gray-100 text-niia-black font-semibold rounded-xl hover:bg-niia-teal hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Nous Contacter
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - FAQ List */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-100 pb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full flex items-center justify-between text-left py-3 group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-base font-medium text-niia-black group-hover:text-niia-teal transition-colors duration-200 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-4 h-4 text-niia-teal" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-niia-gray group-hover:text-niia-teal transition-colors duration-200" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-niia-gray leading-relaxed pt-1">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
