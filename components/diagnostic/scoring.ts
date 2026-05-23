/**
 * Scoring helpers for the Fit for Digital. Fit for AI. diagnostic.
 *
 * Per-dimension score = arithmetic mean of its question scores.
 * Overall score = arithmetic mean of the 7 dimension scores (NOT mean of all
 *   questions, so a dimension with fewer questions still carries equal weight).
 *
 * Bucket interpretation maps overall % to a tier the result page uses to set
 * the message. Tiers are intentionally tight so most mid-tier operators land
 * in "foundational gaps" on a first honest read.
 */

import { DIMENSIONS, QUESTIONS, type AnswerValue, type DimensionId } from './questions';

export type Answers = Record<string, AnswerValue | null>;

export interface DimensionScore {
  id: DimensionId;
  pct: number;
}

export interface ScoreResult {
  overall: number;
  dimensions: DimensionScore[];
  bucket: 'exposed' | 'gaps' | 'strong' | 'operator';
}

export function computeScore(answers: Answers): ScoreResult {
  const dimensionScores: DimensionScore[] = DIMENSIONS.map((dim) => {
    const dimQuestions = QUESTIONS.filter((q) => q.dimension === dim.id);
    const values = dimQuestions
      .map((q) => answers[q.id])
      .filter((v): v is AnswerValue => v !== null && v !== undefined);
    const pct = values.length === 0 ? 0 : values.reduce<number>((a, b) => a + b, 0) / values.length;
    return { id: dim.id, pct: Math.round(pct) };
  });

  const overallRaw =
    dimensionScores.reduce((a, b) => a + b.pct, 0) / dimensionScores.length;
  const overall = Math.round(overallRaw);

  let bucket: ScoreResult['bucket'];
  if (overall < 50) bucket = 'exposed';
  else if (overall < 70) bucket = 'gaps';
  else if (overall < 85) bucket = 'strong';
  else bucket = 'operator';

  return { overall, dimensions: dimensionScores, bucket };
}

export function isComplete(answers: Answers): boolean {
  return QUESTIONS.every((q) => {
    const v = answers[q.id];
    return v !== null && v !== undefined;
  });
}

export function countAnswered(answers: Answers): number {
  return QUESTIONS.filter((q) => answers[q.id] !== null && answers[q.id] !== undefined).length;
}
