import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../data/questions';

interface QuizScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (optionIndex: number) => void;
}

export default function QuizScreen({ question, currentIndex, totalQuestions, onAnswer }: QuizScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* Progress indicator */}
      <div className="absolute top-12 left-0 w-full flex justify-center">
        <div className="text-[var(--color-gold-500)] tracking-widest text-sm">
          {String(currentIndex + 1).padStart(2, '0')} / {totalQuestions}
        </div>
      </div>

      <div className="w-full max-w-2xl z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-12 text-gray-100 leading-relaxed text-center">
              {question.text}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onAnswer(index)}
                  className="w-full text-left p-6 rounded-xl border border-gray-800 bg-[var(--color-ink-900)] text-gray-300 hover:border-[var(--color-gold-500)] hover:text-[var(--color-gold-400)] transition-all duration-300"
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
