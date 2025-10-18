import React from "react"
import { motion } from "framer-motion"
import { Clock, AlertTriangle, ArrowRight, Zap, Target, Heart } from "lucide-react"

const Urgency: React.FC = () => {
  const warningSigns = [
    "Vous vous réveillez déjà fatigué(e)",
    "Vous faites semblant d'aller bien en réunion",
    "Vous en avez marre de tenir pour tout le monde",
    "Vous ne tenez plus vous-même",
    "Vous êtes en mode survie permanente",
    "Vous avez perdu le goût de vivre"
  ]

  const consequences = [
    "Burn-out total et effondrement",
    "Relations toxiques et isolement",
    "Perte de sens et de direction",
    "Santé physique et mentale dégradée",
    "Opportunités manquées",
    "Régret et amertume"
  ]

  const choices = [
    {
      title: "Continuer comme ça",
      description: "Rester dans l'effondrement silencieux, faire semblant, s'épuiser davantage...",
      result: "L'effondrement total est inévitable",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "Choisir la transformation",
      description: "Dire OUI à votre renaissance, retrouver votre énergie sacrée, rayonner authentiquement...",
      result: "La renaissance souveraine vous attend",
      color: "text-niia-teal",
      bgColor: "bg-niia-teal/10",
      borderColor: "border-niia-teal/30"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase text-niia-black mb-4">
            • MOMENT DE VÉRITÉ
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-niia-black mb-6">
            Votre Corps Vous Crie d'Arrêter
          </h2>
          <p className="text-xl text-niia-gray max-w-3xl mx-auto leading-relaxed">
            Si vous lisez ces lignes, c'est que vous savez au fond de vous que quelque chose doit changer. 
            Votre corps vous envoie des signaux d'alarme depuis trop longtemps.
          </p>
        </motion.div>

        {/* Warning Signs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-red-50 border border-red-200 p-8 mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-red-800">
                Signaux d'Alarme
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {warningSigns.map((sign, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-red-700">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Consequences */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-niia-black mb-4">
              Si Vous Ne Faites Rien
            </h3>
            <p className="text-lg text-niia-gray">
              Voici ce qui vous attend si vous continuez sur cette voie
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consequences.map((consequence, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-gray-700 font-medium">{consequence}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Choices */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-niia-black mb-4">
              Vous Avez Deux Choix
            </h3>
            <p className="text-lg text-niia-gray">
              Chaque jour qui passe, vous faites un choix. Consciemment ou inconsciemment.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {choices.map((choice, index) => (
              <motion.div
                key={index}
                className={`p-8 border-2 ${choice.borderColor} ${choice.bgColor} rounded-xl`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className={`text-2xl font-bold ${choice.color} mb-4`}>
                  {choice.title}
                </h4>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {choice.description}
                </p>
                <div className={`p-4 ${choice.bgColor} rounded-lg`}>
                  <p className={`font-semibold ${choice.color}`}>
                    {choice.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-niia-teal p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Il Est Temps de Choisir Votre Renaissance
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Chaque jour d'attente est un jour de plus dans l'effondrement. 
              Votre renaissance souveraine commence par un seul pas : dire OUI à votre transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-niia-teal px-8 py-4 rounded-xl font-semibold hover:bg-niia-beige-light transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Je choisis ma renaissance</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-niia-teal transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Session stratégique gratuite
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Urgency