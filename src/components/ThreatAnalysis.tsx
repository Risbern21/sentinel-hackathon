import { motion } from 'motion/react';
import { Card } from './ui/card';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertTriangle, Shield } from 'lucide-react';

const threatDistribution = [
  { name: 'Normal', value: 1209, color: '#16a34a' },
  { name: 'Suspicious', value: 22, color: '#ca8a04' },
  { name: 'Threat', value: 16, color: '#dc2626' },
];

const keywordData = [
  { keyword: 'cherry blossoms', count: 8 },
  { keyword: 'moon wanes', count: 6 },
  { keyword: 'ravens', count: 4 },
  { keyword: 'tea ceremony', count: 7 },
  { keyword: 'west gate', count: 5 },
];

export function ThreatAnalysis() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 md:pb-6 pb-20">
      <div className="max-w-[600px] md:max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-red-100 mb-1">Threat Intelligence</h2>
          <p className="text-xs text-neutral-400 italic">"Patterns reveal what words conceal."</p>
        </motion.div>

        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-3 bg-gradient-to-br from-red-950/30 to-neutral-950/90 border-red-900/30">
              <div className="flex flex-col items-center text-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mb-1" />
                <p className="text-xs text-neutral-500 mb-0.5">Threats</p>
                <p className="text-xl text-red-400">16</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-3 bg-gradient-to-br from-yellow-950/20 to-neutral-950/90 border-yellow-900/30">
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="w-5 h-5 text-yellow-500 mb-1" />
                <p className="text-xs text-neutral-500 mb-0.5">Review</p>
                <p className="text-xl text-yellow-400">22</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-3 bg-gradient-to-br from-green-950/20 to-neutral-950/90 border-green-900/30">
              <div className="flex flex-col items-center text-center">
                <Shield className="w-5 h-5 text-green-500 mb-1" />
                <p className="text-xs text-neutral-500 mb-0.5">Safe</p>
                <p className="text-xl text-green-400">1,209</p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Distribution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-4 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800">
            <h3 className="text-red-200 mb-3 text-sm">Message Distribution</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={threatDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {threatDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#171717',
                    border: '1px solid #404040',
                    borderRadius: '8px',
                    color: '#e5e5e5',
                    fontSize: '12px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Coded Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-4 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800">
            <h3 className="text-red-200 mb-3 text-sm">Coded Keywords</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={keywordData}>
                <XAxis 
                  dataKey="keyword" 
                  stroke="#525252"
                  tick={{ fill: '#a3a3a3', fontSize: 10 }}
                  angle={-20}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  stroke="#525252" 
                  tick={{ fill: '#a3a3a3', fontSize: 10 }}
                  width={25}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#171717',
                    border: '1px solid #404040',
                    borderRadius: '8px',
                    color: '#e5e5e5',
                    fontSize: '11px',
                  }}
                />
                <Bar 
                  dataKey="count" 
                  fill="#dc2626"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Network Map */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-4 bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-neutral-800">
            <h3 className="text-red-200 mb-2 text-sm">Messenger Network</h3>
            <p className="text-[10px] text-neutral-500 mb-3">Connections based on message patterns</p>
            
            <div className="relative h-64 bg-neutral-950/50 rounded-lg border border-neutral-800 flex items-center justify-center">
              {/* Simplified network visualization */}
              <div className="relative w-full h-full p-4">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="30%" y1="30%" x2="70%" y2="30%" stroke="#dc2626" strokeWidth="1" opacity="0.3" />
                  <line x1="70%" y1="30%" x2="80%" y2="60%" stroke="#dc2626" strokeWidth="1" opacity="0.3" />
                  <line x1="30%" y1="30%" x2="20%" y2="60%" stroke="#ca8a04" strokeWidth="1" opacity="0.3" />
                  <line x1="20%" y1="60%" x2="50%" y2="70%" stroke="#16a34a" strokeWidth="1" opacity="0.3" />
                  <line x1="80%" y1="60%" x2="50%" y2="70%" stroke="#16a34a" strokeWidth="1" opacity="0.3" />
                </svg>

                {/* Nodes */}
                <motion.div
                  className="absolute"
                  style={{ left: '30%', top: '30%', transform: 'translate(-50%, -50%)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="w-12 h-12 rounded-full bg-red-950/80 border-2 border-red-600 flex items-center justify-center">
                    <span className="text-[10px] text-neutral-200">Takeda</span>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                </motion.div>

                <motion.div
                  className="absolute"
                  style={{ left: '70%', top: '30%', transform: 'translate(-50%, -50%)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-12 h-12 rounded-full bg-red-950/80 border-2 border-red-600 flex items-center justify-center">
                    <span className="text-[10px] text-neutral-200">Mōri</span>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                </motion.div>

                <motion.div
                  className="absolute"
                  style={{ left: '20%', top: '60%', transform: 'translate(-50%, -50%)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-950/80 border-2 border-yellow-600 flex items-center justify-center">
                    <span className="text-[10px] text-neutral-200">Unknown</span>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-yellow-600 animate-pulse" />
                </motion.div>

                <motion.div
                  className="absolute"
                  style={{ left: '80%', top: '60%', transform: 'translate(-50%, -50%)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <div className="w-12 h-12 rounded-full bg-green-950/80 border-2 border-green-600 flex items-center justify-center">
                    <span className="text-[10px] text-neutral-200">Oda</span>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse" />
                </motion.div>

                <motion.div
                  className="absolute"
                  style={{ left: '50%', top: '70%', transform: 'translate(-50%, -50%)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-green-950/80 border-2 border-green-600 flex items-center justify-center">
                    <span className="text-[10px] text-neutral-200">Shimazu</span>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse" />
                </motion.div>
              </div>
            </div>

            <div className="flex gap-3 mt-3 justify-center">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <span className="text-[10px] text-neutral-400">High Risk</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-yellow-600" />
                <span className="text-[10px] text-neutral-400">Medium</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-600" />
                <span className="text-[10px] text-neutral-400">Low Risk</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Proverb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center py-4"
        >
          <p className="text-xs text-neutral-600 italic">
            "Data reveals the invisible hand of betrayal."
          </p>
        </motion.div>
      </div>
    </div>
  );
}