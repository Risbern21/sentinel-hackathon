import { useState } from 'react';
import { BottomNavigation } from './components/BottomNavigation';
import { MobileHeader } from './components/MobileHeader';
import { DesktopHeader } from './components/DesktopHeader';
import { Dashboard } from './components/Dashboard';
import { MessageFeed } from './components/MessageFeed';
import { ThreatAnalysis } from './components/ThreatAnalysis';
import { MessengerProfiles } from './components/MessengerProfiles';
import { Settings } from './components/Settings';
import { Toaster } from './components/ui/sonner';
import { useIsDesktop } from './hooks/useMediaQuery';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const isDesktop = useIsDesktop();

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'messages':
        return <MessageFeed />;
      case 'insights':
        return <ThreatAnalysis />;
      case 'messengers':
        return <MessengerProfiles />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`min-h-screen bg-neutral-950 relative ${!isDesktop ? 'max-w-[600px] mx-auto' : ''}`}>
      {isDesktop ? (
        <DesktopHeader activeTab={activeTab} onTabChange={setActiveTab} />
      ) : (
        <MobileHeader />
      )}
      
      <main className="relative">
        {renderContent()}
      </main>
      
      {!isDesktop && (
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      )}
      
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#171717',
            border: '1px solid #991b1b',
            color: '#fca5a5',
            fontSize: '14px',
          },
        }}
      />
    </div>
  );
}