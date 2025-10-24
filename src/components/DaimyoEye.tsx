import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface DaimyoEyeProps {
  isScanning?: boolean;
  threatsDetected?: number;
}

export function DaimyoEye({ isScanning = false, threatsDetected = 0 }: DaimyoEyeProps) {
  const [glowing, setGlowing] = useState(false);

  useEffect(() => {
    if (threatsDetected > 0) {
      setGlowing(true);
    }
  }, [threatsDetected]);

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Outer glow rings */}
      {glowing && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-red-500/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-red-600/40"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeOut",
            }}
          />
        </>
      )}

      {/* Main eye container */}
      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-red-900/50 shadow-xl flex items-center justify-center overflow-hidden">
        {/* Iris */}
        <motion.div
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-900 shadow-inner flex items-center justify-center"
          animate={isScanning ? {
            scale: [1, 1.1, 1],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: glowing ? '0 0 25px rgba(220, 38, 38, 0.8), inset 0 0 15px rgba(0, 0, 0, 0.5)' : 'inset 0 0 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Pupil */}
          <motion.div
            className="w-5 h-5 rounded-full bg-neutral-950"
            animate={{
              scale: isScanning ? [1, 0.8, 1] : [1, 0.9, 1],
            }}
            transition={{
              duration: isScanning ? 1 : 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Scanning line */}
          {isScanning && (
            <motion.div
              className="absolute inset-0 opacity-60"
              style={{
                background: 'linear-gradient(180deg, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)',
              }}
              animate={{
                y: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}
        </motion.div>

        {/* Light reflection */}
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white/40 blur-sm" />
      </div>

      {/* Threat counter */}
      {threatsDetected > 0 && (
        <motion.div
          className="absolute -top-1 -right-1 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center border-2 border-neutral-950 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
        >
          <span className="text-xs text-white">{threatsDetected}</span>
        </motion.div>
      )}
    </div>
  );
}
