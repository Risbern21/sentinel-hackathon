import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ThreatGauge } from './ThreatGauge';
import { DaimyoEye } from './DaimyoEye';
import { ScrollText, AlertTriangle, Shield } from 'lucide-react';
import { MessageCard } from './MessageCard';

const mockRecentMessages = [
  {
    id: '1',
    sender: 'Takeda Clan',
    text: 'The cherry blossoms fall early this season. Perhaps we should meet at the usual place before the moon wanes.',
    timestamp: '2h ago',
    threatLevel: 'threat' as const,
    riskScore: 87,
    sentiment: 'Deceptive',
    anomalyReason: 'Coded language detected',
  },
  {
    id: '2',
    sender: 'Oda Messenger',
    text: 'Supply routes are secure. The merchants will arrive as scheduled.',
    timestamp: '5h ago',
    threatLevel: 'normal' as const,
    riskScore: 12,
    sentiment: 'Neutral',
  },
  {
    id: '3',
    sender: 'Unknown Contact',
    text: 'The winds shift from the east. Three ravens seen at dawn.',
    timestamp: '1d ago',
    threatLevel: 'suspicious' as const,
    riskScore: 64,
    sentiment: 'Uncertain',
    anomalyReason: 'Unusual metaphors',
  },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 md:pb-6 pb-20">
      <div className="max-w-[600px] md:max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-6">
        {/* Hero - Daimyo's Eye */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-2 border-red-900/40 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-red-100 mb-2">Daimyo's Eye</h2>
              <p className="text-xs text-neutral-400 italic mb-6">"The eye sees what the heart knows."</p>
              <DaimyoEye isScanning={false} threatsDetected={3} />
              <div className="mt-6 grid grid-cols-3 gap-3 w-full md:max-w-md">
                <div className="bg-neutral-950/50 p-3 rounded-lg">
                  <p className="text-xs text-neutral-500 mb-1">Watching</p>
                  <p className="text-xl text-blue-300">1,247</p>
                </div>
                <div className="bg-neutral-950/50 p-3 rounded-lg">
                  <p className="text-xs text-neutral-500 mb-1">Threats</p>
                  <p className="text-xl text-red-400">38</p>
                </div>
                <div className="bg-neutral-950/50 p-3 rounded-lg">
                  <p className="text-xs text-neutral-500 mb-1">Safe</p>
                  <p className="text-xl text-green-400">1,209</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Threat Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-5 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800 backdrop-blur-sm">
            <h3 className="text-red-200 mb-4 text-center">Current Threat Level</h3>
            <div className="flex flex-col items-center">
              <ThreatGauge level="medium" score={64} />
              <div className="mt-4 space-y-2 w-full md:max-w-md">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-600 shadow-lg shadow-green-500/50" />
                    <span className="text-neutral-300">Low Risk</span>
                  </div>
                  <span className="text-neutral-400">1,209</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-600 shadow-lg shadow-yellow-500/50" />
                    <span className="text-neutral-300">Medium Risk</span>
                  </div>
                  <span className="text-neutral-400">22</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-600 shadow-lg shadow-red-500/50" />
                    <span className="text-neutral-300">High Risk</span>
                  </div>
                  <span className="text-neutral-400">16</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Recent Flagged Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-4 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800 backdrop-blur-sm">
            <h3 className="text-red-200 mb-3 flex items-center gap-2 text-sm">
              <AlertTriangle className="w-4 h-4" />
              Recent Alerts
            </h3>
            <div className="space-y-3">
              {mockRecentMessages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <MessageCard
                    message={msg}
                    onClick={() => {}}
                  />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Proverb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center py-4"
        >
          <p className="text-xs text-neutral-600 italic">
            "Even a gentle breeze can hide a storm."
          </p>
        </motion.div>
      </div>
    </div>
  );
}