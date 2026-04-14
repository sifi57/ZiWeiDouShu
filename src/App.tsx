import { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';
import { calculateResult, CalculationResult } from './utils/calculateResult';

type AppState = 'start' | 'quiz' | 'result';

export default function App() {
  const [appState, setAppState] = useState<AppState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [resultData, setResultData] = useState<CalculationResult | null>(null);

  const handleStart = () => {
    setAppState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finished quiz
      const result = calculateResult(newAnswers);
      setResultData(result);
      setAppState('result');
    }
  };

  const handleRestart = () => {
    setAppState('start');
  };

  return (
    <div className="min-h-screen bg-[var(--color-ink-950)] text-gray-100 font-serif selection:bg-[var(--color-gold-500)] selection:text-black">
      {appState === 'start' && <StartScreen onStart={handleStart} />}
      {appState === 'quiz' && (
        <QuizScreen
          question={questions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {appState === 'result' && resultData && (
        <ResultScreen data={resultData} onRestart={handleRestart} />
      )}
    </div>
  );
}
