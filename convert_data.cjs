const fs = require('fs');

let questionsContent = fs.readFileSync('src/data/questions.ts', 'utf-8');
questionsContent = questionsContent.replace(/export interface.*?}\n/gs, '');
questionsContent = questionsContent.replace(/export const questions: Question\[\] =/g, 'const questions =');
questionsContent += '\nmodule.exports = { questions };\n';
fs.writeFileSync('miniprogram_export/data/questions.js', questionsContent);

let resultsContent = fs.readFileSync('src/data/results.ts', 'utf-8');
resultsContent = resultsContent.replace(/export interface.*?}\n/gs, '');
resultsContent = resultsContent.replace(/export const detailedResults: ResultData\[\] =/g, 'const results =');
resultsContent = resultsContent.replace(/export const results: ResultData\[\] = detailedResults;/g, '');
resultsContent += '\nmodule.exports = { results };\n';
fs.writeFileSync('miniprogram_export/data/results.js', resultsContent);
console.log('Data converted successfully.');
