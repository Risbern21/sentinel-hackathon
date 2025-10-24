import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { MessageCard } from './MessageCard';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet';
import { Sword, Feather, Scan } from 'lucide-react';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

const mockMessages = [
  {
    id: '1',
    sender: 'Takeda Clan',
    text: 'The cherry blossoms fall early this season. Perhaps we should meet at the usual place before the moon wanes.',
    timestamp: '2h ago',
    threatLevel: 'threat' as const,
    riskScore: 87,
    sentiment: 'Deceptive',
    anomalyReason: 'Coded language detected - "cherry blossoms" and "moon wanes" are known code phrases for covert meetings.',
  },
  {
    id: '2',
    sender: 'Oda Messenger',
    text: 'Supply routes are secure. The merchants will arrive as scheduled with rice and textiles.',
    timestamp: '5h ago',
    threatLevel: 'normal' as const,
    riskScore: 12,
    sentiment: 'Neutral',
  },
  {
    id: '3',
    sender: 'Unknown Contact',
    text: 'The winds shift from the east. Three ravens seen at dawn. The northern path grows narrow.',
    timestamp: '1d ago',
    threatLevel: 'suspicious' as const,
    riskScore: 64,
    sentiment: 'Uncertain',
    anomalyReason: 'Unusual metaphors and nature references may indicate hidden meanings.',
  },
  {
    id: '4',
    sender: 'Shimazu Rep.',
    text: 'We appreciate your hospitality during our last visit. Looking forward to continued peaceful relations.',
    timestamp: '1d ago',
    threatLevel: 'normal' as const,
    riskScore: 8,
    sentiment: 'Positive',
  },
  {
    id: '5',
    sender: 'Mōri Clan',
    text: 'The tea ceremony will proceed. All five cups have been prepared. West gate remains unlocked.',
    timestamp: '2d ago',
    threatLevel: 'threat' as const,
    riskScore: 92,
    sentiment: 'Deceptive',
    anomalyReason: 'Multiple coded elements detected - "five cups" and "west gate unlocked" suggest coordinated infiltration plan.',
  },
];

export function MessageFeed() {
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [messageInput, setMessageInput] = useState('');

  const handleScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 md:pb-6 pb-20">
      <div className="max-w-[600px] md:max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-red-100 mb-1">Message Scanner</h2>
          <p className="text-xs text-neutral-400 italic">"Words carry truth and lies in equal measure."</p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-4 bg-gradient-to-br from-amber-50/5 to-neutral-900/50 border-2 border-neutral-800 backdrop-blur-sm">
            <h3 className="text-red-200 text-sm">Analyze Message</h3>
            <div className="space-y-3">
              <h3 className="text-red-200 text-sm">Message Title</h3>
              <Textarea
              placeholder="Message title ex:daenior-chan clan"
              className="min-h-10 w-fit bg-neutral-950/50 border-neutral-700 text-neutral-200 placeholder:text-neutral-600 resize-none text-sm"
              />
              <Textarea
                placeholder="Paste message text here to analyze..."
                className="min-h-24 bg-neutral-950/50 border-neutral-700 text-neutral-200 placeholder:text-neutral-600 resize-none text-sm"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <Button
                className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg shadow-red-900/30 transition-all duration-300"
                onClick={handleScan}
                disabled={isScanning || !messageInput.trim()}
              >
                <Scan className="w-4 h-4 mr-2" />
                {isScanning ? 'Scanning...' : "Begin Scan"}
              </Button>
              
              {isScanning && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-2"
                >
                  <Progress value={scanProgress} className="h-1.5" />
                  <p className="text-[10px] text-neutral-500">
                    Analyzing patterns...
                  </p>
                </motion.div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Message Feed */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-4 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-red-200 text-sm">All Messages</h3>
              <div className="flex gap-1.5">
                <Badge variant="outline" className="border-red-700 text-red-400 flex items-center gap-1 text-[10px] px-1.5 py-0">
                  <Sword className="w-2.5 h-2.5" />
                  2
                </Badge>
                <Badge variant="outline" className="border-yellow-700 text-yellow-400 text-[10px] px-1.5 py-0">
                  1
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2.5">
              {mockMessages.map((msg) => (
                <MessageCard
                  key={msg.id}
                  message={msg}
                  onClick={() => setSelectedMessage(msg)}
                />
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Message Detail Sheet */}
      <Sheet open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <SheetContent 
          side="bottom" 
          className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-t-2 border-red-900/30 max-h-[85vh] overflow-y-auto"
        >
          {selectedMessage && (
            <>
              <SheetHeader>
                <SheetTitle className="text-red-200 flex items-center gap-2">
                  {selectedMessage.threatLevel === 'threat' && <Sword className="w-4 h-4 text-red-500" />}
                  {selectedMessage.threatLevel === 'normal' && <Feather className="w-4 h-4 text-green-500" />}
                  Message Analysis
                </SheetTitle>
                <SheetDescription className="text-neutral-400 text-xs">
                  Detailed AI assessment
                </SheetDescription>
              </SheetHeader>

              <div className="mt-4 space-y-4">
                {/* Message Text */}
                <div>
                  <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Message</h4>
                  <Card className="p-3 bg-amber-50/5 border-neutral-800">
                    <p className="text-neutral-300 text-sm">{selectedMessage.text}</p>
                  </Card>
                </div>

                {/* Sender Info */}
                <div>
                  <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-1">From</h4>
                  <p className="text-red-300 text-sm">{selectedMessage.sender}</p>
                  <p className="text-[10px] text-neutral-500">{selectedMessage.timestamp}</p>
                </div>

                {/* Risk Level */}
                <div>
                  <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Risk Assessment</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-400">Intent Score</span>
                        <span className={`
                          ${selectedMessage.riskScore > 70 ? 'text-red-400' : ''}
                          ${selectedMessage.riskScore > 40 && selectedMessage.riskScore <= 70 ? 'text-yellow-400' : ''}
                          ${selectedMessage.riskScore <= 40 ? 'text-green-400' : ''}
                        `}>
                          {selectedMessage.riskScore}%
                        </span>
                      </div>
                      <Progress 
                        value={selectedMessage.riskScore} 
                        className="h-1.5"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Card className="p-2 bg-neutral-950/50 border-neutral-800">
                        <p className="text-[10px] text-neutral-500 mb-0.5">Threat Level</p>
                        <p className={`
                          capitalize text-sm
                          ${selectedMessage.threatLevel === 'threat' ? 'text-red-400' : ''}
                          ${selectedMessage.threatLevel === 'suspicious' ? 'text-yellow-400' : ''}
                          ${selectedMessage.threatLevel === 'normal' ? 'text-green-400' : ''}
                        `}>
                          {selectedMessage.threatLevel}
                        </p>
                      </Card>
                      <Card className="p-2 bg-neutral-950/50 border-neutral-800">
                        <p className="text-[10px] text-neutral-500 mb-0.5">Sentiment</p>
                        <p className="text-neutral-300 text-sm">{selectedMessage.sentiment}</p>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Anomaly Reason */}
                {selectedMessage.anomalyReason && (
                  <div>
                    <h4 className="text-xs text-neutral-500 uppercase tracking-wider mb-2">
                      AI Analysis
                    </h4>
                    <Card className="p-3 bg-red-950/20 border-red-900/50">
                      <p className="text-sm text-red-200">{selectedMessage.anomalyReason}</p>
                    </Card>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline"
                    className="flex-1 border-red-700 text-red-400 hover:bg-red-950/30 text-sm"
                  >
                    Flag Urgent
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-800 text-sm"
                  >
                    Mark Safe
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}