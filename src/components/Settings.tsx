import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { Settings2, Shield, Scan, Save } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Settings() {
  const [sensitivity, setSensitivity] = useState([65]);
  const [aiMode, setAiMode] = useState('hybrid');
  const [autoScan, setAutoScan] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [detailedLogs, setDetailedLogs] = useState(false);

  const handleSave = () => {
    toast.success('Settings saved', {
      description: 'Your rules have been updated.',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 md:pb-6 pb-20">
      <div className="max-w-[600px] md:max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-red-100 mb-1 flex items-center gap-2">
            <Settings2 className="w-5 h-5" />
            Daimyo's Rules
          </h2>
          <p className="text-xs text-neutral-400 italic">"Set the laws by which betrayal shall be judged."</p>
        </motion.div>

        {/* Detection Settings */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-4 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800">
            <div className="flex items-center gap-2 mb-4">
              <Scan className="w-4 h-4 text-red-400" />
              <h3 className="text-red-200 text-sm">Threat Detection</h3>
            </div>

            <div className="space-y-4">
              {/* Sensitivity Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <Label className="text-neutral-300 text-sm">Detection Sensitivity</Label>
                  <span className="text-xs text-red-400">{sensitivity[0]}%</span>
                </div>
                <Slider
                  value={sensitivity}
                  onValueChange={setSensitivity}
                  max={100}
                  step={1}
                  className="mb-1"
                />
                <p className="text-[10px] text-neutral-500">
                  Higher sensitivity detects more threats but may increase false positives.
                </p>
              </div>

              <Separator className="bg-neutral-800" />

              {/* AI Mode */}
              <div>
                <Label className="text-neutral-300 mb-2 block text-sm">AI Detection Mode</Label>
                <RadioGroup value={aiMode} onValueChange={setAiMode}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-neutral-950/50 border border-neutral-800 hover:border-red-900/50 transition-colors">
                      <RadioGroupItem value="keyword" id="keyword" />
                      <div className="flex-1">
                        <Label htmlFor="keyword" className="text-neutral-300 cursor-pointer text-xs">
                          Keyword-Only
                        </Label>
                        <p className="text-[10px] text-neutral-500">Fast detection</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-neutral-950/50 border border-neutral-800 hover:border-red-900/50 transition-colors">
                      <RadioGroupItem value="nlp" id="nlp" />
                      <div className="flex-1">
                        <Label htmlFor="nlp" className="text-neutral-300 cursor-pointer text-xs">
                          NLP-Anomaly Detection
                        </Label>
                        <p className="text-[10px] text-neutral-500">Advanced analysis</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-neutral-950/50 border border-red-900/50 hover:border-red-800/70 transition-colors">
                      <RadioGroupItem value="hybrid" id="hybrid" />
                      <div className="flex-1">
                        <Label htmlFor="hybrid" className="text-neutral-300 cursor-pointer text-xs">
                          Full Hybrid Mode
                        </Label>
                        <p className="text-[10px] text-neutral-500">Best accuracy (Recommended)</p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Behavior Settings */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-4 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-4 h-4 text-red-400" />
              <h3 className="text-red-200 text-sm">Behavior & Alerts</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-950/50">
                <div className="flex-1">
                  <Label htmlFor="auto-scan" className="text-neutral-300 cursor-pointer text-xs">
                    Automatic Scanning
                  </Label>
                  <p className="text-[10px] text-neutral-500 mt-0.5">
                    Auto-scan new messages
                  </p>
                </div>
                <Switch
                  id="auto-scan"
                  checked={autoScan}
                  onCheckedChange={setAutoScan}
                />
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-950/50">
                <div className="flex-1">
                  <Label htmlFor="notifications" className="text-neutral-300 cursor-pointer text-xs">
                    Threat Notifications
                  </Label>
                  <p className="text-[10px] text-neutral-500 mt-0.5">
                    Alert on high-risk messages
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-950/50">
                <div className="flex-1">
                  <Label htmlFor="detailed-logs" className="text-neutral-300 cursor-pointer text-xs">
                    Detailed Analysis Logs
                  </Label>
                  <p className="text-[10px] text-neutral-500 mt-0.5">
                    Keep comprehensive records
                  </p>
                </div>
                <Switch
                  id="detailed-logs"
                  checked={detailedLogs}
                  onCheckedChange={setDetailedLogs}
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2"
        >
          <Button
            variant="outline"
            className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-800 text-sm"
          >
            Reset
          </Button>
          <Button
            onClick={handleSave}
            className="flex-1 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg shadow-red-900/30 text-sm"
          >
            <Save className="w-3.5 h-3.5 mr-1.5" />
            Save Changes
          </Button>
        </motion.div>

        {/* Proverb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center py-4"
        >
          <p className="text-xs text-neutral-600 italic">
            "The wise daimyo knows when to trust, and when to question."
          </p>
        </motion.div>
      </div>
    </div>
  );
}