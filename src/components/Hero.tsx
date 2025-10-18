import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

interface Node {
  id: number;
  x: number;
  y: number;
}

interface NeuralSVGProps {
  brainPath: string;
  nodes: Node[];
  edges: number[][];
}

const Hero: React.FC = () => {
  // Brain outline path (stylized)
  const brainPath =
    "M 180 120 C 180 90 210 70 238 78 C 250 50 290 42 314 64 C 336 44 372 50 382 76 C 412 74 430 100 424 126 C 452 140 456 176 436 196 C 458 214 450 248 424 254 C 428 286 394 306 368 292 C 348 316 310 312 296 286 C 270 310 230 300 224 268 C 198 276 178 254 184 230 C 160 218 158 188 176 174 C 160 154 170 128 192 126 C 184 116 180 116 180 120 Z";

  // Nodes laid out roughly inside the brain outline (hand-picked for aesthetics)
  const nodes = useMemo(
    () => [
      { id: 1, x: 235, y: 95 },
      { id: 2, x: 270, y: 85 },
      { id: 3, x: 305, y: 88 },
      { id: 4, x: 340, y: 102 },
      { id: 5, x: 365, y: 120 },
      { id: 6, x: 320, y: 130 },
      { id: 7, x: 285, y: 125 },
      { id: 8, x: 250, y: 130 },
      { id: 9, x: 230, y: 150 },
      { id: 10, x: 260, y: 160 },
      { id: 11, x: 290, y: 168 },
      { id: 12, x: 325, y: 165 },
      { id: 13, x: 355, y: 160 },
      { id: 14, x: 370, y: 188 },
      { id: 15, x: 340, y: 198 },
      { id: 16, x: 305, y: 200 },
      { id: 17, x: 270, y: 195 },
      { id: 18, x: 238, y: 182 },
      { id: 19, x: 300, y: 142 },
      { id: 20, x: 335, y: 142 }
    ],
    []
  );

  // Connections between nodes (pairs of node ids)
  const edges = useMemo(
    () => [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 13],
      [13, 14],
      [14, 15],
      [15, 16],
      [16, 17],
      [17, 18],
      [18, 9],
      [9, 8],
      [8, 1],
      [7, 10],
      [10, 11],
      [11, 12],
      [12, 13],
      [7, 19],
      [19, 12],
      [19, 20],
      [20, 4],
      [11, 16]
    ],
    []
  );

  return (
    <section className="min-h-screen bg-gradient-to-r from-niia-beige-light via-white to-white flex items-center relative overflow-hidden pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Large abstract shape behind the image */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 transform -translate-y-1/2">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M50 50 Q200 20 350 100 Q380 200 320 300 Q200 380 80 320 Q20 250 50 150 Z"
              fill="url(#abstractShape)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="abstractShape" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#379191" />
                <stop offset="100%" stopColor="#1c576e" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-niia-black leading-tight">
                <div className="block">De l'Effondrement à la</div>
                <div className="h-12 flex items-center">
                  <TypeAnimation
                    sequence={[
                      'Renaissance Souveraine',
                      3000,
                      'Transformation Authentique',
                      3000,
                      'Énergie Sacrée',
                      3000,
                      'Clarté Divine',
                      3000,
                      'Rayonnement Authentique',
                      3000,
                      'Souveraineté Intérieure',
                      3000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-niia-teal text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap"
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                  />
                </div>
              </h1>

              {/* Wavy underline */}
              <div className="relative">
                <svg width="300" height="20" viewBox="0 0 300 20" className="text-niia-teal">
                  <path
                    d="M0 10 Q75 0 150 10 T300 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    className="opacity-60"
                  />
                </svg>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-niia-gray leading-relaxed max-w-2xl">
              Si vous vous réveillez déjà fatigué(e), si vous faites semblant d'aller bien en réunion 
              alors qu'intérieurement c'est le désert, si vous en avez marre de tenir pour tout le monde 
              alors que vous ne tenez plus vous-même... Vous n'êtes pas seul(e). 
              <br/><br/>
              After 3 years of silent collapse, I created the method that allowed me to transform 
              my traumas into wisdom. Today, I accompany executive leaders and entrepreneurs 
              in their sovereign renaissance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pb-16">
              <motion.button
                className="group px-6 py-3 bg-niia-teal text-white font-semibold rounded-xl hover:bg-niia-teal-dark transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span>Session Stratégique Gratuite</span>
              </motion.button>

              <motion.button
                className="group px-6 py-3 border-2 border-niia-gray text-niia-gray font-semibold rounded-xl hover:border-niia-teal hover:text-niia-teal transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="w-4 h-4 bg-niia-teal rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Voir les Programmes</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Brain Neural Network with Enhanced Design */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative flex items-center justify-center w-full h-96">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-niia-teal/10 to-niia-blue-dark/10 rounded-full blur-3xl"></div>
              
              {/* Animated Brain Neural Network */}
              <div className="relative z-10 w-full h-full max-w-lg">
                <NeuralSVG brainPath={brainPath} nodes={nodes} edges={edges} />
              </div>

              {/* Floating Value Cards - More Visible */}
              
              {/* Energy Card - Top Right */}
              <motion.div
                className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-niia-teal/30 z-30"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <div className="w-4 h-4 bg-niia-teal rounded-full mx-auto mb-3 animate-pulse"></div>
                  <p className="text-sm text-niia-gray font-semibold mb-2">Énergie Sacrée</p>
                  <p className="text-2xl font-bold text-niia-teal">100%</p>
                </div>
              </motion.div>

              {/* Souveraineté Card - Left */}
              <motion.div
                className="absolute top-1/2 -left-16 bg-gradient-to-br from-niia-beige to-niia-beige-light backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-niia-beige/40 z-30"
                animate={{
                  x: [0, -8, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="text-center">
                  <div className="w-4 h-4 bg-niia-blue-dark rounded-full mx-auto mb-3"></div>
                  <p className="text-sm text-niia-gray font-semibold mb-2">Souveraineté</p>
                  <p className="text-lg font-bold text-niia-black">Intérieure</p>
                </div>
              </motion.div>

              {/* Renaissance Card - Bottom Right */}
              <motion.div
                className="absolute bottom-4 -right-12 bg-gradient-to-r from-niia-blue-dark to-niia-teal-dark rounded-2xl p-6 shadow-2xl text-white z-30"
                animate={{
                  x: [0, 8, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="text-center">
                  <div className="w-4 h-4 bg-white/90 rounded-full mx-auto mb-3"></div>
                  <p className="text-sm opacity-90 font-semibold mb-2">Renaissance</p>
                  <p className="text-lg font-bold">Souveraine</p>
                </div>
              </motion.div>

              {/* Transformation Card - Top Left */}
              <motion.div
                className="absolute -top-4 -left-12 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border-2 border-niia-teal/40 z-30"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="text-center">
                  <p className="text-sm text-niia-teal font-bold">Transformation</p>
                  <p className="text-sm text-niia-gray font-semibold">Authentique</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const NeuralSVG: React.FC<NeuralSVGProps> = ({ brainPath, nodes, edges }) => {
  // subtle float for the whole brain
  const float = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <motion.svg
      variants={float}
      animate="animate"
      viewBox="0 0 600 400"
      className="h-full w-full"
    >
      <defs>
        {/* Enhanced glow filter for nodes and lines */}
        <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* NIIA brand gradients */}
        <linearGradient id="wire" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#379191" />
          <stop offset="50%" stopColor="#1c576e" />
          <stop offset="100%" stopColor="#379191" />
        </linearGradient>
        
        <radialGradient id="node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8d6bd" />
          <stop offset="40%" stopColor="#379191" />
          <stop offset="80%" stopColor="#1c576e" />
          <stop offset="100%" stopColor="#0f2937" />
        </radialGradient>

        {/* Background gradient for brain */}
        <radialGradient id="brainBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#379191" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#1c576e" stopOpacity="0.05" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <motion.circle
        cx={300}
        cy={160}
        r={120}
        fill="url(#brainBg)"
        opacity={0.3}
        animate={{ 
          r: [100, 140, 100], 
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* brain outline with enhanced styling */}
      <motion.path
        d={brainPath}
        fill="url(#wire)"
        fillOpacity="0.08"
        stroke="url(#wire)"
        strokeWidth="3"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />

      {/* connections with enhanced animation */}
      {edges.map(([a, b], i) => {
        const A = nodes.find((n) => n.id === a);
        const B = nodes.find((n) => n.id === b);
        if (!A || !B) return null;
        
        const d = `M ${A.x} ${A.y} L ${B.x} ${B.y}`;
        const delay = (i % 6) * 0.3 + (i * 37) % 0.4;

        return (
          <g key={`edge-${a}-${b}`}>
            {/* wire */}
            <motion.path
              d={d}
              stroke="url(#wire)"
              strokeWidth={2}
              strokeOpacity={0.6}
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeOut", delay }}
            />

            {/* energy pulse traveling along the wire */}
            <motion.circle
              r={3}
              fill="#e8d6bd"
              filter="url(#glow)"
              style={{
                offsetPath: `path('${d}')`,
              }}
              initial={{ offsetDistance: "0%", opacity: 0 }}
              animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
            />
          </g>
        );
      })}

      {/* nodes with enhanced styling */}
      {nodes.map((n, i) => (
        <g key={`node-${n.id}`}> 
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={6}
            fill="url(#node)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8], 
              opacity: 1 
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              delay: i * 0.1 
            }}
          />
          {/* ripple effect */}
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={6}
            fill="none"
            stroke="#379191"
            strokeOpacity={0.4}
            filter="url(#glow)"
            animate={{ 
              r: [6, 18, 6], 
              opacity: [0.4, 0, 0.4] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.1 
            }}
          />
        </g>
      ))}

      {/* Central highlight with pulsing effect */}
      <motion.circle
        cx={300}
        cy={160}
        r={90}
        fill="#379191"
        opacity={0.1}
        animate={{ 
          r: [80, 110, 80], 
          opacity: [0.08, 0.15, 0.08] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </motion.svg>
  );
};

export default Hero;