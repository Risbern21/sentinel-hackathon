import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Shield, AlertTriangle, HelpCircle } from 'lucide-react';

const messengers = [
  {
    id: 1,
    name: 'Takeda Clan',
    badge: 'deceptive',
    avatar: '武',
    totalMessages: 47,
    riskScore: 87,
    recentActivity: 'Sent 8 coded messages',
    flaggedCount: 12,
  },
  {
    id: 2,
    name: 'Oda Messenger',
    badge: 'loyal',
    avatar: '織',
    totalMessages: 234,
    riskScore: 12,
    recentActivity: 'Consistent pattern',
    flaggedCount: 1,
  },
  {
    id: 3,
    name: 'Unknown Contact',
    badge: 'uncertain',
    avatar: '？',
    totalMessages: 15,
    riskScore: 64,
    recentActivity: 'Irregular pattern',
    flaggedCount: 5,
  },
  {
    id: 4,
    name: 'Mōri Clan',
    badge: 'deceptive',
    avatar: '毛',
    totalMessages: 63,
    riskScore: 92,
    recentActivity: 'Increased activity',
    flaggedCount: 18,
  },
  {
    id: 5,
    name: 'Shimazu Rep.',
    badge: 'loyal',
    avatar: '島',
    totalMessages: 156,
    riskScore: 8,
    recentActivity: 'Highly consistent',
    flaggedCount: 0,
  },
  {
    id: 6,
    name: 'Local Merchant',
    badge: 'loyal',
    avatar: '商',
    totalMessages: 89,
    riskScore: 5,
    recentActivity: 'Standard comms',
    flaggedCount: 0,
  },
];

export function MessengerProfiles() {
  const getBadgeConfig = (badge: string) => {
    switch (badge) {
      case 'loyal':
        return {
          icon: Shield,
          label: 'Loyal',
          color: 'bg-green-950/50 border-green-600 text-green-400',
          emoji: '🟢',
        };
      case 'uncertain':
        return {
          icon: HelpCircle,
          label: 'Uncertain',
          color: 'bg-yellow-950/50 border-yellow-600 text-yellow-400',
          emoji: '🟡',
        };
      case 'deceptive':
        return {
          icon: AlertTriangle,
          label: 'Deceptive',
          color: 'bg-red-950/50 border-red-600 text-red-400',
          emoji: '🔴',
        };
      default:
        return {
          icon: HelpCircle,
          label: 'Unknown',
          color: 'bg-neutral-800 border-neutral-600 text-neutral-400',
          emoji: '⚪',
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 md:pb-6 pb-20">
      <div className="max-w-[600px] md:max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-red-100 mb-1">Messenger Clans</h2>
          <p className="text-xs text-neutral-400 italic">"Know thy allies as well as thy enemies."</p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-3 bg-gradient-to-br from-green-950/20 to-neutral-950/90 border-green-900/30">
            <div className="flex flex-col items-center text-center">
              <div className="text-xl mb-1">🟢</div>
              <p className="text-xs text-neutral-500">Loyal</p>
              <p className="text-lg text-green-400">3</p>
            </div>
          </Card>
          <Card className="p-3 bg-gradient-to-br from-yellow-950/20 to-neutral-950/90 border-yellow-900/30">
            <div className="flex flex-col items-center text-center">
              <div className="text-xl mb-1">🟡</div>
              <p className="text-xs text-neutral-500">Uncertain</p>
              <p className="text-lg text-yellow-400">1</p>
            </div>
          </Card>
          <Card className="p-3 bg-gradient-to-br from-red-950/30 to-neutral-950/90 border-red-900/30">
            <div className="flex flex-col items-center text-center">
              <div className="text-xl mb-1">🔴</div>
              <p className="text-xs text-neutral-500">Deceptive</p>
              <p className="text-lg text-red-400">2</p>
            </div>
          </Card>
        </div>

        {/* Messenger Cards */}
        <div className="space-y-3">
          {messengers.map((messenger, index) => {
            const badgeConfig = getBadgeConfig(messenger.badge);
            const BadgeIcon = badgeConfig.icon;

            return (
              <motion.div
                key={messenger.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800 hover:border-red-900/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-red-900/50">
                        <AvatarFallback className="bg-gradient-to-br from-red-900 to-red-950 text-red-100 text-lg">
                          {messenger.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-red-200 text-sm mb-1">{messenger.name}</h3>
                        <Badge className={`${badgeConfig.color} border flex items-center gap-1 w-fit text-[10px] px-1.5 py-0`}>
                          <BadgeIcon className="w-2.5 h-2.5" />
                          {badgeConfig.label}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-xl">{badgeConfig.emoji}</div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-neutral-950/50 p-2 rounded-lg">
                      <p className="text-[10px] text-neutral-500 mb-0.5">Messages</p>
                      <p className="text-sm text-neutral-300">{messenger.totalMessages}</p>
                    </div>
                    <div className="bg-neutral-950/50 p-2 rounded-lg">
                      <p className="text-[10px] text-neutral-500 mb-0.5">Risk</p>
                      <p className={`text-sm ${
                        messenger.riskScore > 70 ? 'text-red-400' :
                        messenger.riskScore > 40 ? 'text-yellow-400' :
                        'text-green-400'
                      }`}>
                        {messenger.riskScore}%
                      </p>
                    </div>
                    <div className="bg-neutral-950/50 p-2 rounded-lg">
                      <p className="text-[10px] text-neutral-500 mb-0.5">Flagged</p>
                      <p className="text-sm text-neutral-300">{messenger.flaggedCount}</p>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="pt-2 border-t border-neutral-800">
                    <p className="text-[10px] text-neutral-500 mb-0.5">Recent Activity</p>
                    <p className="text-xs text-neutral-300">{messenger.recentActivity}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Proverb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center py-4"
        >
          <p className="text-xs text-neutral-600 italic">
            "Trust is earned through deeds, not words."
          </p>
        </motion.div>
      </div>
    </div>
  );
}