const { questions } = require('../data/questions.js');
const { results } = require('../data/results.js');

function calculateResult(answers) {
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

  const normalize = (val) => Math.max(0, Math.min(100, ((val + 60) / 120) * 100));

  const radarData = [
    { subject: '动静(阳/阴)', A: normalize(scores.yangYin), fullMark: 100 },
    { subject: '理情(理/情)', A: normalize(scores.rationalEmotional), fullMark: 100 },
    { subject: '常变(稳/变)', A: normalize(scores.stableChange), fullMark: 100 },
    { subject: '虚实(名/实)', A: normalize(scores.fameSubstance), fullMark: 100 },
    { subject: '心力(综合)', A: 50 + (scores.yangYin + scores.rationalEmotional) / 4, fullMark: 100 },
  ];

  let minDistance = Infinity;
  let bestMatch = results[0];

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

module.exports = {
  calculateResult
};
