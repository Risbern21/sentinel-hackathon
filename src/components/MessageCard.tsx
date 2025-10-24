import { motion } from 'motion/react';
import { Sword, Feather } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface MessageCardProps {
  message: {
    id: string;
    sender: string;
    text: string;
    timestamp: string;
    threatLevel: 'normal' | 'suspicious' | 'threat';
    riskScore: number;
    sentiment: string;
    anomalyReason?: string;
  };
  onClick: () => void;
}

export function MessageCard({ message, onClick }: MessageCardProps) {
  const isFlagged = message.threatLevel !== 'normal';
  
  const threatColors = {
    normal: 'border-neutral-700',
    suspicious: 'border-yellow-600/50 bg-yellow-950/10',
    threat: 'border-red-600/70 bg-red-950/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className={`
          p-3 cursor-pointer border-2 transition-all duration-300
          bg-gradient-to-br from-amber-50/5 to-neutral-900/50
          hover:shadow-lg backdrop-blur-sm
          ${threatColors[message.threatLevel]}
          ${isFlagged ? 'shadow-md' : ''}
        `}
        onClick={onClick}
        style={isFlagged ? {
          boxShadow: `0 0 15px ${message.threatLevel === 'threat' ? 'rgba(220, 38, 38, 0.2)' : 'rgba(202, 138, 4, 0.15)'}`,
        } : undefined}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-red-300 text-sm truncate">{message.sender}</span>
              <span className="text-xs text-neutral-500">•</span>
              <span className="text-[10px] text-neutral-500">{message.timestamp}</span>
              {isFlagged && (
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Sword className="w-3 h-3 text-red-500" />
                </motion.div>
              )}
              {!isFlagged && <Feather className="w-3 h-3 text-green-600" />}
            </div>
            
            <p className="text-neutral-300 text-xs mb-2 line-clamp-2">
              {message.text}
            </p>
            
            <div className="flex gap-1.5 flex-wrap">
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-neutral-700 text-neutral-400">
                Risk: {message.riskScore}%
              </Badge>
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-neutral-700 text-neutral-400">
                {message.sentiment}
              </Badge>
            </div>
          </div>
          
          {isFlagged && (
            <motion.div
              className="text-lg flex-shrink-0"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔴
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
