import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Benefit {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Benefits: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStart);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Fini l'Épuisement Chronique",
      description: "Retrouvez votre énergie vitale en 30 jours. Plus de réveils fatigués, plus de caféine pour tenir. Une vitalité naturelle et durable qui vous permet de rayonner.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces",
      category: "Résultat Garanti"
    },
    {
      id: 2,
      title: "Arrêtez de Faire Semblant",
      description: "Fini le masque en réunion. Développez une authenticité qui attire les bonnes personnes et repousse les toxiques. Des relations vraies et épanouissantes.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=faces",
      category: "Transformation"
    },
    {
      id: 3,
      title: "Redevenez l'Architecte de Votre Vie",
      description: "Reprenez le contrôle total. Plus de réaction, plus de survie. Vous créez votre réalité selon vos valeurs et vos aspirations profondes.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop&crop=faces",
      category: "Souveraineté"
    },
    {
      id: 4,
      title: "Leadership Authentique",
      description: "Inspirez naturellement votre équipe. Plus de management par la peur. Un leadership basé sur l'exemple et l'impact positif.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces",
      category: "Succès"
    },
    {
      id: 5,
      title: "Mission de Vie Claire",
      description: "Trouvez votre pourquoi profond. Plus de confusion existentielle. Une direction claire qui donne sens à chaque action.",
      image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
      category: "Clarté"
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
              Arrêtez de souffrir en silence
              <br />
              <span className="text-niia-teal">Commencez à rayonner</span>
            </h2>
            <p className="text-lg text-niia-gray max-w-3xl mx-auto leading-relaxed">
              <strong className="text-niia-black">Vous en avez marre de :</strong> Vous réveiller fatigué(e), faire semblant d'aller bien, 
              tenir pour tout le monde alors que vous ne tenez plus vous-même ?
              <br /><br />
              <strong className="text-niia-teal">La méthode NIIA vous donne :</strong> L'énergie vitale, l'authenticité, 
              la souveraineté et la clarté que vous méritez. En 90 jours, vous redevenez l'architecte de votre vie.
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
                  ref={containerRef}
                  className="flex space-x-6 py-8 cursor-grab active:cursor-grabbing"
                  animate={{
                    x: isDragging ? dragOffset : [0, -100 * benefits.length],
                  }}
                  transition={{
                    duration: isDragging ? 0 : 20,
                    repeat: isDragging ? 0 : Infinity,
                    ease: "linear",
                  }}
                  style={{ width: `${benefits.length * 100}%` }}
                  onMouseDown={handleDragStart}
                  onMouseMove={handleDragMove}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={handleDragEnd}
                  onTouchStart={handleDragStart}
                  onTouchMove={handleDragMove}
                  onTouchEnd={handleDragEnd}
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