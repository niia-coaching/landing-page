import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Briefcase, BookOpen, Video, MessageCircle, Calendar, Shield } from 'lucide-react'

const Services: React.FC = () => {
  const programs = [
    {
      id: 'individual',
      title: 'Renaissance Souveraine',
      subtitle: 'Transformation complète en 90 jours',
      description: 'Votre transformation personnelle exclusive avec Ayoub Sadry. Résultats garantis ou remboursé.',
      duration: '90 jours',
      sessions: '12 sessions individuelles',
      price: '2,997€',
      originalPrice: '4,997€',
      features: [
        '12 sessions individuelles (90 min chacune)',
        'Diagnostic complet des 7 Batteries de Vie',
        'Plan d\'action personnalisé et suivi quotidien',
        'Accès exclusif aux ressources NIIA Premium',
        'Support illimité par WhatsApp',
        'Garantie de résultats ou remboursement'
      ],
      icon: Users,
      popular: true,
      urgency: 'Dernière place disponible'
    },
    {
      id: 'group',
      title: 'Méthode NIIA Collective',
      subtitle: 'Transformation en groupe restreint',
      description: 'Transformez-vous au sein d\'une communauté d\'âmes courageuses. Groupe de 6 personnes maximum.',
      duration: '6 mois',
      sessions: '8 sessions de groupe',
      price: '997€',
      originalPrice: '1,497€',
      features: [
        '8 sessions de groupe (2h chacune)',
        'Groupe de 6 personnes maximum',
        'Ateliers pratiques et exercices',
        'Accès au forum privé NIIA',
        'Ressources et outils exclusifs',
        'Soutien communautaire continu'
      ],
      icon: Briefcase,
      popular: false,
      urgency: 'Prochaine session : 15 Janvier'
    },
    {
      id: 'enterprise',
      title: 'Transformation d\'Équipe',
      subtitle: 'Libérez le potentiel de vos équipes',
      description: 'Créez une culture de performance et de bien-être dans votre organisation.',
      duration: '3-6 mois',
      sessions: 'Sur mesure',
      price: 'À partir de 5,000€',
      features: [
        'Audit organisationnel',
        'Formation des managers',
        'Ateliers d\'équipe',
        'Suivi de performance',
        'Ressources internes'
      ],
      icon: BookOpen,
      popular: false
    }
  ]

  const additionalServices = [
    {
      title: 'Retraites de Transformation',
      description: 'Immersion complète de 3-5 jours pour une transformation accélérée.',
      icon: Calendar,
      duration: '3-5 jours'
    },
    {
      title: 'Diagnostic NIIA',
      description: 'Évaluation complète de vos 7 Batteries de Vie avec rapport détaillé.',
      icon: Shield,
      duration: '2 heures'
    },
    {
      title: 'Sessions de Suivi',
      description: 'Accompagnement ponctuel pour maintenir votre transformation.',
      icon: MessageCircle,
      duration: '1 heure'
    },
    {
      title: 'Ressources en Ligne',
      description: 'Accès à notre bibliothèque de ressources et outils de transformation.',
      icon: Video,
      duration: 'Illimité'
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-niia-beige-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase text-niia-black mb-4">
            • NOS PROGRAMMES DE TRANSFORMATION
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-niia-black mb-6">
            Votre Renaissance commence maintenant
          </h2>
          <p className="text-xl text-niia-gray max-w-3xl mx-auto leading-relaxed">
            <strong className="text-niia-black">3 programmes exclusifs</strong> pour transformer votre effondrement silencieux 
            en renaissance souveraine. <strong className="text-niia-teal">Résultats garantis ou remboursé.</strong>
          </p>
        </motion.div>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className={`relative bg-white border border-niia-beige-light p-8 flex flex-col h-full ${
                program.popular ? 'border-niia-teal' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-niia-teal text-white px-4 py-2 text-sm font-semibold">
                    Plus Populaire
                  </span>
                </div>
              )}

              {/* Main Content - grows to fill available space */}
              <div className="flex-1">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-niia-beige-light rounded-xl flex items-center justify-center mx-auto mb-4">
                    <program.icon className="w-8 h-8 text-niia-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-niia-black mb-2">
                    {program.title}
                  </h3>
                  <p className="text-niia-gray font-medium">
                    {program.subtitle}
                  </p>
                </div>

                <p className="text-niia-gray mb-6 text-center">
                  {program.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-niia-gray">Durée:</span>
                    <span className="font-semibold text-niia-black">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-niia-gray">Sessions:</span>
                    <span className="font-semibold text-niia-black">{program.sessions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-niia-gray">Tarif:</span>
                    <span className="font-semibold text-niia-teal">{program.price}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-niia-teal flex-shrink-0" />
                      <span className="text-sm text-niia-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button - always at bottom */}
              <motion.button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  program.popular
                    ? 'bg-niia-teal text-white hover:bg-niia-teal-dark'
                    : 'border-2 border-niia-gray text-niia-gray hover:border-niia-teal hover:text-niia-teal'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Découvrir ce programme
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          className="bg-niia-beige-light p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-niia-black mb-4">
              Services Complémentaires
            </h3>
            <p className="text-lg text-niia-gray max-w-2xl mx-auto">
              Complétez votre transformation avec nos services additionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 bg-niia-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-niia-teal" />
                </div>
                <h4 className="font-semibold text-niia-black mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-niia-gray mb-3">
                  {service.description}
                </p>
                <span className="text-xs text-niia-teal font-medium">
                  {service.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-niia-teal p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à commencer votre transformation ?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Réservez votre session stratégique gratuite pour découvrir 
              le programme qui vous correspond le mieux.
            </p>
            <motion.button
              className="bg-white text-niia-teal px-8 py-4 rounded-xl font-semibold hover:bg-niia-beige-light transition-all duration-300 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Réserver ma session gratuite</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services