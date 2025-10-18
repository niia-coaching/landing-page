import React from "react";
import { motion } from "framer-motion";

interface Benefit {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Benefits: React.FC = () => {

  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Renaissance Souveraine",
      description: "Transformez vos traumas en sagesse et retrouvez votre pouvoir intérieur pour une vie authentique et épanouie.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces",
      category: "Transformation"
    },
    {
      id: 2,
      title: "Énergie Vitale Optimale",
      description: "Rechargez vos 7 Batteries de Vie pour une vitalité physique, mentale et spirituelle durable.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=faces",
      category: "Santé"
    },
    {
      id: 3,
      title: "Relations Authentiques",
      description: "Développez des connexions profondes et significatives dans tous les aspects de votre vie.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop&crop=faces",
      category: "Relations"
    },
    {
      id: 4,
      title: "Succès Professionnel",
      description: "Libérez votre potentiel de leadership et créez l'impact que vous désirez dans votre carrière.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces",
      category: "Carrière"
    },
    {
      id: 5,
      title: "Clarté Spirituelle",
      description: "Connectez-vous à votre essence divine et trouvez votre mission de vie pour un sens profond.",
      image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      category: "Spiritualité"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16 px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-niia-black mb-6">
            Obtenez des résultats
            <br />
            <span className="text-niia-teal">durables et concrets</span>
          </h2>
          <p className="text-lg text-niia-gray max-w-3xl mx-auto leading-relaxed">
            La méthode NIIA va au-delà des simples stratégies de coaching. Vous obtiendrez une clarté cristalline sur vos objectifs, 
            créerez un plan d'action pour les atteindre, et aurez l'accompagnement et l'élan nécessaires pour garantir des résultats.
            <br /><br />
            Que ce soit dans votre vie personnelle ou professionnelle, vos finances ou vos relations, voici comment vous obtiendrez 
            l'avantage dont vous avez besoin pour un changement véritablement incroyable.
          </p>
        </motion.div>

        {/* Film Strip Carousel */}
        <div className="relative">
          {/* Film Strip Container */}
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 shadow-2xl">
            {/* Film Strip Holes - Top */}
            <div className="absolute top-0 left-0 w-full h-2 bg-black flex justify-between">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-600 rounded-full mt-1"></div>
              ))}
            </div>
            
            {/* Film Strip Holes - Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-black flex justify-between">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-600 rounded-full mb-1"></div>
              ))}
            </div>

            {/* Moving Film Strip */}
            <motion.div
              className="flex space-x-6 py-8"
              animate={{
                x: [0, -100 * benefits.length],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ width: `${benefits.length * 100}%` }}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            >
              {/* Duplicate benefits for seamless loop */}
              {[...benefits, ...benefits].map((benefit, index) => (
                <motion.div
                  key={`${benefit.id}-${index}`}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="px-2 py-1 bg-niia-teal text-white text-xs font-semibold rounded">
                        {benefit.category}
                      </span>
                      <h3 className="text-lg font-bold mt-2">{benefit.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Film Strip Edges */}
            <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gray-900 to-transparent"></div>
            <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-900 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;