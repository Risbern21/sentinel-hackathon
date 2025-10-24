import { motion } from 'motion/react';

export function SamuraiLogo({ size = 48 }: { size?: number }) {
  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 rounded-xl opacity-20 blur-md" />
      
      {/* Main logo container */}
      <div className="relative w-full h-full bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-xl shadow-2xl shadow-red-900/50 flex items-center justify-center border-2 border-red-500/30 overflow-hidden">
        {/* Samurai helmet (Kabuto) SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-3/4 h-3/4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Helmet base */}
          <motion.path
            d="M50 20 L70 45 L65 55 L35 55 L30 45 Z"
            fill="#fecaca"
            stroke="#991b1b"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          {/* Helmet dome */}
          <motion.path
            d="M50 15 C40 15, 32 25, 30 35 L35 45 L65 45 L70 35 C68 25, 60 15, 50 15 Z"
            fill="#fee2e2"
            stroke="#991b1b"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          
          {/* Face guard (Mempo) */}
          <motion.rect
            x="35"
            y="50"
            width="30"
            height="20"
            rx="2"
            fill="#fca5a5"
            stroke="#991b1b"
            strokeWidth="2"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
          
          {/* Left horn (Maedate) */}
          <motion.path
            d="M30 35 L25 15 L28 15 L32 35"
            fill="#fee2e2"
            stroke="#991b1b"
            strokeWidth="2"
            initial={{ rotate: -45, x: -10 }}
            animate={{ rotate: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          
          {/* Right horn (Maedate) */}
          <motion.path
            d="M70 35 L75 15 L72 15 L68 35"
            fill="#fee2e2"
            stroke="#991b1b"
            strokeWidth="2"
            initial={{ rotate: 45, x: 10 }}
            animate={{ rotate: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          
          {/* Center crest */}
          <motion.circle
            cx="50"
            cy="30"
            r="4"
            fill="#dc2626"
            stroke="#991b1b"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          />
          
          {/* Eye slits */}
          <rect x="40" y="56" width="6" height="2" rx="1" fill="#991b1b" />
          <rect x="54" y="56" width="6" height="2" rx="1" fill="#991b1b" />
        </svg>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '16px 16px'
          }} />
        </div>
      </div>
      
      {/* Animated glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-red-400/50"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
