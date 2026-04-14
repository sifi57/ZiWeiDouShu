import { motion } from 'motion/react';

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-gold-500)] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-gold-300)] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 text-center max-w-2xl"
      >
        <h2 className="text-[var(--color-gold-500)] tracking-widest text-sm mb-6 uppercase">
          Zi Wei Dou Shu Personality Test
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-100">
          星轨回响
          <span className="block text-2xl md:text-3xl mt-4 font-normal text-gray-400">
            60种紫微文学人格测试
          </span>
        </h1>
        
        <p className="text-gray-400 leading-relaxed mb-12 text-lg">
          在浩瀚的星海中，每一颗星辰都映射着灵魂的碎片。<br/>
          回答20个问题，揭开你命盘深处的精神原型。
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-10 py-4 bg-transparent border border-[var(--color-gold-500)] text-[var(--color-gold-500)] rounded-full text-lg tracking-widest hover:bg-[var(--color-gold-500)] hover:text-black transition-colors duration-500"
        >
          开启星轨
        </motion.button>
      </motion.div>
    </div>
  );
}
