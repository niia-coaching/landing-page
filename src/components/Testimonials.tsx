import React from "react"
import { motion } from "framer-motion"
import { Star, Quote, ArrowRight } from "lucide-react"

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Directrice Marketing",
      company: "Tech Startup",
      quote: "En 3 mois, j'ai retrouvé mon énergie vitale. Plus de réveils fatigués, plus de caféine pour tenir. J'ai doublé ma productivité et j'ai été promue. La méthode NIIA a changé ma vie professionnelle et personnelle.",
      rating: 5,
      transformation: "+100% productivité, promotion obtenue"
    },
    {
      id: 2,
      name: "Karim L.",
      role: "Entrepreneur",
      company: "Consulting",
      quote: "J'ai triplé mon chiffre d'affaires en 6 mois. Fini de faire semblant, j'attire maintenant les clients qui me respectent et me paient ma valeur. La souveraineté, ça se paie !",
      rating: 5,
      transformation: "CA x3, clients premium"
    },
    {
      id: 3,
      name: "Marie C.",
      role: "Manager Senior",
      company: "Finance",
      quote: "J'ai retrouvé ma clarté mentale et ma capacité de décision. Mon équipe me respecte davantage, mes résultats ont explosé. J'ai enfin trouvé ma mission de vie.",
      rating: 5,
      transformation: "Équipe motivée, résultats +200%"
    },
    {
      id: 4,
      name: "Ahmed B.",
      role: "Cadre Dirigeant",
      company: "Santé",
      quote: "Fini l'isolement ! J'ai créé des relations authentiques avec ma famille et mes collègues. Mon leadership naturel s'est révélé. Je suis devenu l'homme que j'avais toujours voulu être.",
      rating: 5,
      transformation: "Relations transformées, leadership naturel"
    },
    {
      id: 5,
      name: "Sophie D.",
      role: "Consultante",
      company: "Conseil",
      quote: "J'ai éliminé mon stress chronique et retrouvé une énergie que je n'avais pas eue depuis 10 ans. J'ai lancé mon propre business et je rayonne de bonheur.",
      rating: 5,
      transformation: "Stress éliminé, business lancé"
    },
    {
      id: 6,
      name: "Thomas R.",
      role: "Directeur Commercial",
      company: "Industrie",
      quote: "Je gérais mal mon stress et mes émotions au travail. Grâce à la méthode NIIA, j'ai appris à réguler mon système nerveux et à maintenir ma sérénité même dans les situations difficiles.",
      rating: 5,
      transformation: "Du stress chronique à la sérénité"
    }
  ]


  return (
        <section id="temoignages" className="py-20 lg:py-32 bg-niia-beige-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase text-niia-black mb-4">
            • TÉMOIGNAGES
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-niia-black mb-6">
            Témoignages
          </h2>
          <p className="text-xl text-niia-gray max-w-3xl mx-auto leading-relaxed">
            Découvrez les transformations authentiques de nos clients qui ont choisi 
            de transformer leur effondrement en renaissance souveraine.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 border border-niia-beige-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-niia-teal" />
              </div>

              {/* Quote */}
              <p className="text-niia-gray leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Transformation Badge */}
              <div className="mb-6">
                <span className="px-3 py-1 bg-niia-teal/10 text-niia-teal text-sm font-medium">
                  {testimonial.transformation}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-niia-beige-light pt-4">
                <h4 className="font-semibold text-niia-black">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-niia-gray">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-niia-teal p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à écrire votre propre témoignage de transformation ?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Rejoignez les centaines de personnes qui ont choisi de transformer 
              leur effondrement en renaissance souveraine.
            </p>
            <motion.button
              className="bg-white text-niia-teal px-8 py-4 rounded-xl font-semibold hover:bg-niia-beige-light transition-all duration-300 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Commencer ma transformation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials