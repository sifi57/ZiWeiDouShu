import { motion } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { CalculationResult } from '../utils/calculateResult';

interface ResultScreenProps {
  data: CalculationResult;
  onRestart: () => void;
}

export default function ResultScreen({ data, onRestart }: ResultScreenProps) {
  const { result, radarData } = data;

  return (
    <div className="min-h-screen py-20 px-6 flex flex-col items-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-gold-500)] tracking-widest text-sm mb-4">你的紫微命格</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-100">{result.name}</h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 italic">「{result.title}」</h2>
        </div>

        {/* Radar Chart */}
        <div className="w-full h-[300px] md:h-[400px] mb-16">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
              <PolarGrid stroke="#333" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 14, fontFamily: 'var(--font-serif)' }} />
              <Radar
                name="命格维度"
                dataKey="A"
                stroke="var(--color-gold-500)"
                fill="var(--color-gold-500)"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Analysis Sections */}
        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          <section>
            <h3 className="text-xl text-[var(--color-gold-400)] mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-[var(--color-gold-400)] mr-4"></span>
              核心特质
            </h3>
            <p className="whitespace-pre-line">{result.coreTraits}</p>
          </section>

          <section>
            <h3 className="text-xl text-[var(--color-gold-400)] mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-[var(--color-gold-400)] mr-4"></span>
              精神原型
            </h3>
            <p className="whitespace-pre-line">{result.spiritualArchetype}</p>
          </section>

          <section>
            <h3 className="text-xl text-[var(--color-gold-400)] mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-[var(--color-gold-400)] mr-4"></span>
              阴影映射
            </h3>
            <p className="whitespace-pre-line">{result.shadowMapping}</p>
          </section>

          <section>
            <h3 className="text-xl text-[var(--color-gold-400)] mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-[var(--color-gold-400)] mr-4"></span>
              现代生存指南
            </h3>
            <p className="whitespace-pre-line">{result.survivalGuide}</p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <button
            onClick={onRestart}
            className="px-8 py-3 border border-gray-700 text-gray-400 rounded-full hover:border-[var(--color-gold-500)] hover:text-[var(--color-gold-500)] transition-colors duration-300"
          >
            重新测试
          </button>
        </div>
      </motion.div>
    </div>
  );
}
