import { questions } from '../data/questions';
import { results, ResultData } from '../data/results';

export interface RadarDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}

export interface CalculationResult {
  result: ResultData;
  radarData: RadarDataPoint[];
}

export function calculateResult(answers: number[]): CalculationResult {
  let scores = {
    yangYin: 0,
    rationalEmotional: 0,
    stableChange: 0,
    fameSubstance: 0
  };

  answers.forEach((ansIdx, qIdx) => {
    const q = questions[qIdx];
    if (q && q.options[ansIdx]) {
      const option = q.options[ansIdx];
      scores.yangYin += option.scores.yangYin;
      scores.rationalEmotional += option.scores.rationalEmotional;
      scores.stableChange += option.scores.stableChange;
      scores.fameSubstance += option.scores.fameSubstance;
    }
  });

  // Normalize to 0-100 for radar chart
  // Max possible score per dimension is around 60 (20 questions * 3 max score)
  const normalize = (val: number) => Math.max(0, Math.min(100, ((val + 60) / 120) * 100));

  const radarData: RadarDataPoint[] = [
    { subject: '动静(阳/阴)', A: normalize(scores.yangYin), fullMark: 100 },
    { subject: '理情(理/情)', A: normalize(scores.rationalEmotional), fullMark: 100 },
    { subject: '常变(稳/变)', A: normalize(scores.stableChange), fullMark: 100 },
    { subject: '虚实(名/实)', A: normalize(scores.fameSubstance), fullMark: 100 },
    { subject: '心力(综合)', A: 50 + (scores.yangYin + scores.rationalEmotional) / 4, fullMark: 100 },
  ];

  // Find closest result using Euclidean distance
  let minDistance = Infinity;
  let bestMatch = results[0];

  // Scale down user scores to match the vector scale (-10 to 10)
  const scaledUserVector = [
    (scores.yangYin / 60) * 10,
    (scores.rationalEmotional / 60) * 10,
    (scores.stableChange / 60) * 10,
    (scores.fameSubstance / 60) * 10
  ];

  results.forEach(res => {
    const dist = Math.sqrt(
      Math.pow(scaledUserVector[0] - res.vector[0], 2) +
      Math.pow(scaledUserVector[1] - res.vector[1], 2) +
      Math.pow(scaledUserVector[2] - res.vector[2], 2) +
      Math.pow(scaledUserVector[3] - res.vector[3], 2)
    );
    if (dist < minDistance) {
      minDistance = dist;
      bestMatch = res;
    }
  });

  return { result: bestMatch, radarData };
}
