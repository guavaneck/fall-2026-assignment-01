import fs from 'fs';
import path from 'path';

type Gradebook = {
  [studentName: string]: {
    [subject: string]: number;
  };
};

const rawData = fs.readFileSync(
  path.join(__dirname, '../data/gradebook.json'),
  'utf-8',
);
const gradeBook: Gradebook = JSON.parse(rawData);

export function calculateSubjectAverage(subject: string): number {
  const grades = Object.values(gradeBook)
    .filter((g) => subject in g)
    .map((g) => g[subject]);

  if (grades.length === 0) return 0;

  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}
