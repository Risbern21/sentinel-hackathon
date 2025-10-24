import { motion } from 'motion/react';
import { SamuraiLogo } from './SamuraiLogo';
import { Castle, ScrollText, BarChart3, Users, Settings } from 'lucide-react';

interface DesktopHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function DesktopHeader({ activeTab, onTabChange }: DesktopHeaderProps) {
  const navItems = [
    { id: 'dashboard', icon: Castle, label: 'Home' },
    { id: 'messages', icon: ScrollText, label: 'Scan' },
    { id: 'insights', icon: BarChart3, label: 'Intelligence' },
    { id: 'messengers', icon: Users, label: 'Clans' },
    { id: 'settings', icon: Settings, label: 'Rules' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-900/95 border-b-2 border-red-900/30 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo and Title */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <SamuraiLogo size={56} />
            <div className="flex flex-col justify-center">
              <h1 className="text-red-50 text-xl leading-tight tracking-wide">
                Daimyo's Sentinel
              </h1>
              <p className="text-xs text-red-300/70 italic leading-tight mt-0.5">
                Uncover deceit hidden in plain sight
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`
                    relative flex items-center gap-2 px-4 py-2.5 rounded-lg 
                    transition-all duration-300
                    ${isActive 
                      ? 'text-red-200' 
                      : 'text-red-300/60 hover:text-red-300/90'
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabDesktop"
                      className="absolute inset-0 bg-red-900/30 rounded-lg border border-red-700/50"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <Icon className="w-5 h-5 relative z-10" />
                  <span className="text-sm relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
