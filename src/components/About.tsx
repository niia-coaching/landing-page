import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Zap, Star, Target, Brain, ArrowRight, Calendar } from "lucide-react";

interface TimelineEvent {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  icon: React.ComponentType<any>;
  color: string;
  category: string;
  year: string;
  month?: string;
  isActive?: boolean;
}

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStart);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Determine if we should change slides based on drag distance
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        // Dragged right, go to previous slide
        setCurrentSlide((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
      } else {
        // Dragged left, go to next slide
        setCurrentSlide((prev) => (prev + 1) % timelineEvents.length);
      }
    }
    
    setDragOffset(0);
    // Resume auto-play after a delay
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      title: "L'Effondrement Silencieux",
      subtitle: "Cadre IT en CDI, salaire confortable",
      content: "Cadre IT en CDI, salaire confortable, image de succès... mais à l'intérieur : insomnies chroniques, fatigue permanente, double vie émotionnelle. Je faisais semblant d'aller bien en réunion, je souriais à mes proches, mais je m'effondrais de l'intérieur.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces",
      icon: Heart,
      color: "from-red-500 to-red-600",
      category: "Histoire",
      year: "2019",
      month: "Jan"
    },
    {
      id: 2,
      title: "Le Point de Bascule",
      subtitle: "28 Juillet 2023 - La nuit qui a tout changé",
      content: "Un ami me demande : 'Tu peux me partager un souvenir où tu étais innocent et heureux ?' Black-out total. Cette nuit-là, j'ai découvert la masterclass de Vishen Lakhiani sur les 4 états de conscience. J'ai vidé mon compte bancaire pour me former au coaching.",
      image: "https://images.unsplash.com/photo-1506905925346-14b1e3d7e4b0?w=400&h=300&fit=crop",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      category: "Transformation",
      year: "2023",
      month: "Jul",
      isActive: true
    },
    {
      id: 3,
      title: "La Renaissance",
      subtitle: "3 ans d'alchimie intérieure",
      content: "3 ans d'alchimie intérieure : neurosciences, travail identitaire, spiritualité incarnée. J'ai transmuté mes traumas en sagesse, retrouvé mon énergie sacrée, et créé la méthode IMPACT. Aujourd'hui, j'accompagne 100+ personnes dans leur renaissance authentique.",
      image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=400&h=300&fit=crop",
      icon: Star,
      color: "from-green-500 to-emerald-600",
      category: "Renaissance",
      year: "2025",
      month: "Now"
    },
    {
      id: 4,
      title: "Ma Mission",
      subtitle: "Accompagner les âmes courageuses",
      content: "Accompagner les âmes courageuses dans leur renaissance, en transformant l'épuisement en énergie sacrée, la confusion en clarté divine, et l'isolement en rayonnement authentique. Chaque transformation est unique, chaque renaissance est sacrée.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces",
      icon: Target,
      color: "from-niia-teal to-niia-teal-dark",
      category: "Mission",
      year: "2025",
      month: "Now"
    },
    {
      id: 5,
      title: "La Méthode NIIA",
      subtitle: "Notre Approche Révolutionnaire",
      content: "NIIA n'est pas un simple coaching. C'est une alchimie intérieure qui transforme l'effondrement silencieux en renaissance souveraine. Diagnostic complet des 7 batteries de vie, méthode IMPACT exclusive, et programme de 12 semaines pour une transformation durable.",
      image: "https://images.unsplash.com/photo-1506905925346-14b1e3d7e4b0?w=400&h=300&fit=crop",
      icon: Brain,
      color: "from-niia-blue-dark to-niia-teal-dark",
      category: "Méthode",
      year: "2025",
      month: "Now"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % timelineEvents.length);
    }, 4000); // Reduced to 4 seconds for faster auto-play

    return () => clearInterval(interval);
  }, [isAutoPlaying, timelineEvents.length]);


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = timelineEvents[currentSlide];

  return (
        <section id="apropos" className="py-20 lg:py-32 bg-gradient-to-br from-niia-beige-light to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-80 h-80">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <g stroke="url(#aboutPattern)" strokeWidth="0.8" fill="none">
              <circle cx="100" cy="100" r="40" opacity="0.6"/>
              <path d="M100 60 L100 40" opacity="0.5"/>
              <path d="M140 100 L160 100" opacity="0.5"/>
              <path d="M100 140 L100 160" opacity="0.5"/>
              <path d="M60 100 L40 100" opacity="0.5"/>
              <circle cx="100" cy="40" r="8" fill="url(#aboutPattern)" opacity="0.7"/>
              <circle cx="160" cy="100" r="8" fill="url(#aboutPattern)" opacity="0.7"/>
              <circle cx="100" cy="160" r="8" fill="url(#aboutPattern)" opacity="0.7"/>
              <circle cx="40" cy="100" r="8" fill="url(#aboutPattern)" opacity="0.7"/>
            </g>
            <defs>
              <linearGradient id="aboutPattern" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#379191" />
                <stop offset="50%" stopColor="#1c576e" />
                <stop offset="100%" stopColor="#d96536" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-niia-teal to-niia-teal-dark text-white rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4 mr-2" />
            L'Architecte de Votre Renaissance
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-niia-black mb-6 leading-tight">
            Ayoub Sadry : De l'Effondrement à la Renaissance
          </h2>
          <p className="text-xl text-niia-gray max-w-4xl mx-auto leading-relaxed">
            Découvrez l'histoire d'une transformation profonde et la méthode qui a changé des centaines de vies
          </p>
        </motion.div>

            {/* Timeline Carousel */}
            <div className="relative">
              {/* Main Carousel Container */}
              <div 
                ref={containerRef}
                className="relative overflow-hidden bg-white border border-niia-beige-light rounded-2xl cursor-grab active:cursor-grabbing"
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: 1, 
                      x: isDragging ? dragOffset : 0 
                    }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative"
                  >
                <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
                  {/* Content Side */}
                  <div className="p-12 lg:p-16 flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Category Badge */}
                      <div className="inline-block">
                        <span className="px-3 py-1 bg-niia-beige-light text-niia-black font-medium text-sm rounded-full">
                          {currentSlideData.category}
                        </span>
                      </div>

                      {/* Title */}
                      <div>
                        <h3 className="text-4xl lg:text-5xl font-bold text-niia-black mb-3">
                          {currentSlideData.title}
                        </h3>
                        <p className="text-xl text-niia-gray font-medium">
                          {currentSlideData.subtitle}
                        </p>
                      </div>

                      {/* Content */}
                      <p className="text-lg text-niia-gray leading-relaxed max-w-2xl">
                        {currentSlideData.content}
                      </p>

                      {/* Date */}
                      <div className="flex items-center space-x-3 text-niia-teal">
                        <Calendar className="w-5 h-5" />
                        <span className="font-semibold text-lg">{currentSlideData.month} {currentSlideData.year}</span>
                      </div>

                      {/* Progress Indicator */}
                      <div className="flex items-center space-x-4 pt-4">
                        <div className="text-sm text-niia-gray">
                          <span className="font-semibold">{currentSlide + 1}</span> / {timelineEvents.length}
                        </div>
                        <div className="flex-1 h-0.5 bg-niia-beige-light">
                          <div 
                            className="h-full bg-niia-teal transition-all duration-300"
                            style={{ width: `${((currentSlide + 1) / timelineEvents.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative">
                    <img
                      src={currentSlideData.image}
                      alt={currentSlideData.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>


          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {timelineEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-niia-teal"
                    : "bg-niia-gray/30 hover:bg-niia-gray/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-niia-teal via-niia-teal-dark to-niia-blue-dark rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Prêt à écrire votre propre histoire de renaissance ?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Rejoignez les âmes courageuses qui ont choisi de transformer leur effondrement 
                en renaissance souveraine.
              </p>
              <motion.button 
                className="group px-8 py-4 bg-white text-niia-teal font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Commencer ma Renaissance</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;