import { motion } from 'motion/react';
import { SamuraiLogo } from './SamuraiLogo';

export function MobileHeader() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-900/95 border-b-2 border-red-900/30 backdrop-blur-lg"
    >
      <div className="max-w-[600px] mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <SamuraiLogo size={56} />
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-red-50 text-xl leading-tight tracking-wide">Daimyo's Sentinel</h1>
            <p className="text-xs text-red-300/70 italic leading-tight mt-0.5">Uncover deceit hidden in plain sight</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}