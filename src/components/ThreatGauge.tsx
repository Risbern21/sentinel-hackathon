import { motion } from 'motion/react';

interface ThreatGaugeProps {
  level: 'low' | 'medium' | 'high';
  score: number; // 0-100
}

export function ThreatGauge({ level, score }: ThreatGaugeProps) {
  const colors = {
    low: { bg: '#15803d', glow: '#22c55e', text: 'Low' },
    medium: { bg: '#ca8a04', glow: '#fbbf24', text: 'Medium' },
    high: { bg: '#991b1b', glow: '#dc2626', text: 'High' },
  };

  const color = colors[level];
  const circumference = 2 * Math.PI * 50;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <svg className="w-32 h-32 -rotate-90">
        {/* Background circle */}
        <circle
          cx="64"
          cy="64"
          r="50"
          stroke="#262626"
          strokeWidth="10"
          fill="none"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx="64"
          cy="64"
          r="50"
          stroke={color.bg}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            filter: `drop-shadow(0 0 6px ${color.glow})`,
          }}
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          className="text-3xl mb-1"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ color: color.glow }}
        >
          {score}
        </motion.div>
        <div className="text-[10px] text-neutral-400 uppercase tracking-widest">{color.text}</div>
      </div>
    </div>
  );
}
