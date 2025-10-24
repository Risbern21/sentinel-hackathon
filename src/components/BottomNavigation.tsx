import { Castle, ScrollText, BarChart3, Users, Settings } from 'lucide-react';
import { motion } from 'motion/react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const navItems = [
    { id: 'dashboard', icon: Castle, label: 'Home', symbol: '🏯' },
    { id: 'messages', icon: ScrollText, label: 'Scan', symbol: '📜' },
    { id: 'insights', icon: BarChart3, label: 'Intel', symbol: '📊' },
    { id: 'messengers', icon: Users, label: 'Clan', symbol: '👤' },
    { id: 'settings', icon: Settings, label: 'Rules', symbol: '⚙️' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950 via-neutral-900 to-neutral-900/95 border-t-2 border-red-900/30 backdrop-blur-lg z-50">
      <div className="max-w-[600px] mx-auto px-2 py-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className="relative flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-300"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-red-900/30 rounded-lg border border-red-700/50"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <div className="relative z-10">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-red-400' : 'text-red-300/60'}`} />
                </div>
                <span className={`text-[10px] relative z-10 ${isActive ? 'text-red-200' : 'text-red-300/50'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
