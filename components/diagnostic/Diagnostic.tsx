'use client';

/**
 * Diagnostic: interactive Fit for Digital, Fit for AI. assessment.
 *
 * Single-file UI for simplicity: intro -> quiz -> result. State held in a
 * reducer, persisted to localStorage so accidental tab close does not lose
 * progress. No backend, no analytics, no email gate. All scoring happens in
 * the browser.
 *
 * Reset and Back are first-class controls. The result page links to /#contact
 * for the conversion step.
 */

import { useEffect, useReducer } from 'react';
import { Link, type AppLocale } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import {
  DIMENSIONS,
  QUESTIONS,
  type AnswerValue,
  type DimensionId,
} from './questions';
import { computeScore, isComplete, countAnswered, type Answers } from './scoring';

type Phase = 'intro' | 'quiz' | 'result';

interface State {
  phase: Phase;
  current: number;
  answers: Answers;
  hydrated: boolean;
}

type Action =
  | { type: 'HYDRATE'; state: State }
  | { type: 'START' }
  | { type: 'ANSWER'; questionId: string; value: AnswerValue }
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'SUBMIT' }
  | { type: 'RESET' };

const STORAGE_KEY = 'innovia-diagnostic-v1';

function initialState(): State {
  const answers: Answers = {};
  QUESTIONS.forEach((q) => {
    answers[q.id] = null;
  });
  return { phase: 'intro', current: 0, answers, hydrated: false };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'HYDRATE':
      return { ...action.state, hydrated: true };
    case 'START':
      return { ...state, phase: 'quiz', current: 0 };
    case 'ANSWER':
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.value },
      };
    case 'NEXT':
      if (state.current < QUESTIONS.length - 1) {
        return { ...state, current: state.current + 1 };
      }
      return state;
    case 'PREV':
      if (state.current > 0) {
        return { ...state, current: state.current - 1 };
      }
      return state;
    case 'SUBMIT':
      return { ...state, phase: 'result' };
    case 'RESET':
      return { ...initialState(), hydrated: true };
    default:
      return state;
  }
}

export default function Diagnostic({ locale }: { locale: AppLocale }) {
  const t = useTranslations('diagnostic');
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const stored = JSON.parse(raw) as State;
        dispatch({ type: 'HYDRATE', state: stored });
        return;
      }
    } catch {
      // ignore parse errors, fall through
    }
    dispatch({ type: 'HYDRATE', state: { ...initialState(), hydrated: true } });
  }, []);

  // Persist on every change after hydration.
  useEffect(() => {
    if (!state.hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore quota errors
    }
  }, [state]);

  if (!state.hydrated) {
    return (
      <section className="container-x py-24">
        <p className="text-body text-slate-500">{t('loading')}</p>
      </section>
    );
  }

  if (state.phase === 'intro') {
    return <Intro locale={locale} onStart={() => dispatch({ type: 'START' })} answeredCount={countAnswered(state.answers)} onReset={() => dispatch({ type: 'RESET' })} />;
  }

  if (state.phase === 'quiz') {
    return (
      <Quiz
        locale={locale}
        current={state.current}
        answers={state.answers}
        onAnswer={(qid, v) => dispatch({ type: 'ANSWER', questionId: qid, value: v })}
        onPrev={() => dispatch({ type: 'PREV' })}
        onNext={() => dispatch({ type: 'NEXT' })}
        onSubmit={() => dispatch({ type: 'SUBMIT' })}
        onReset={() => dispatch({ type: 'RESET' })}
      />
    );
  }

  return <Result locale={locale} answers={state.answers} onReset={() => dispatch({ type: 'RESET' })} />;
}

// ──────────────────────────── Intro ────────────────────────────

function Intro({
  locale,
  onStart,
  answeredCount,
  onReset,
}: {
  locale: AppLocale;
  onStart: () => void;
  answeredCount: number;
  onReset: () => void;
}) {
  const t = useTranslations('diagnostic');
  const hasProgress = answeredCount > 0;
  return (
    <section className="relative overflow-hidden bg-tint">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 12% 30%, rgba(7,154,156,0.18), transparent 45%), radial-gradient(circle at 85% 20%, rgba(0,92,254,0.10), transparent 50%)',
        }}
      />
      <div className="container-x relative max-w-3xl py-24">
        <p className="eyebrow mb-4">{t('eyebrow')}</p>
        <h1 className="text-h1 lg:text-display mb-6 text-ink-700">{t('title')}</h1>
        <p className="mb-8 flex items-start text-h4 text-teal-700">
          <span className="accent-bar mt-2 shrink-0" />
          <span>{t('subtitle')}</span>
        </p>
        <p className="mb-6 text-body-lg text-slate-500">{t('intro1')}</p>
        <p className="mb-10 text-body-lg text-slate-500">{t('intro2')}</p>

        <DimensionList locale={locale} />

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button onClick={onStart} className="btn-primary">
            {hasProgress ? t('cta.resume') : t('cta.start')}
            <span aria-hidden>→</span>
          </button>
          {hasProgress && (
            <button onClick={onReset} className="btn-secondary">
              {t('cta.reset')}
            </button>
          )}
          <p className="text-body-sm text-slate-500">{t('meta.duration')}</p>
        </div>
      </div>
    </section>
  );
}

function DimensionList({ locale }: { locale: AppLocale }) {
  const t = useTranslations('diagnostic');
  return (
    <div className="rounded-xl border border-slate-200 bg-paper p-6">
      <p className="mb-4 text-caption uppercase tracking-wider text-slate-500">
        {t('dimensionsHeading')}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {DIMENSIONS.map((d) => (
          <li key={d.id} className="flex items-start gap-2 text-body text-ink-700">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
            <span>{d.label[locale]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ──────────────────────────── Quiz ────────────────────────────

function Quiz({
  locale,
  current,
  answers,
  onAnswer,
  onPrev,
  onNext,
  onSubmit,
  onReset,
}: {
  locale: AppLocale;
  current: number;
  answers: Answers;
  onAnswer: (questionId: string, value: AnswerValue) => void;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onReset: () => void;
}) {
  const t = useTranslations('diagnostic');
  const question = QUESTIONS[current];
  const dim = DIMENSIONS.find((d) => d.id === question.dimension)!;
  const value = answers[question.id];
  const total = QUESTIONS.length;
  const progressPct = ((current + 1) / total) * 100;
  const isLast = current === total - 1;
  const complete = isComplete(answers);

  return (
    <section className="bg-paper py-16">
      <div className="container-x max-w-3xl">
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between text-caption uppercase tracking-wider text-slate-500">
            <span>
              {t('quiz.questionLabel', { current: current + 1, total })}
            </span>
            <span>{dim.label[locale]}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-teal-500 transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <h2 className="mb-8 text-h2 text-ink-700">{question.prompt[locale]}</h2>

        <ul className="mb-10 space-y-3">
          {question.options.map((opt) => {
            const selected = value === opt.value;
            return (
              <li key={opt.value}>
                <button
                  type="button"
                  onClick={() => onAnswer(question.id, opt.value)}
                  className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${
                    selected
                      ? 'border-teal-500 bg-teal-100/40'
                      : 'border-slate-200 bg-paper hover:border-teal-300 hover:bg-tint'
                  }`}
                >
                  <span
                    className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                      selected ? 'border-teal-500 bg-teal-500' : 'border-slate-200 bg-paper'
                    }`}
                  >
                    {selected && <span className="h-2 w-2 rounded-full bg-paper" />}
                  </span>
                  <span className="text-body text-ink-700">{opt.label[locale]}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={onPrev}
              disabled={current === 0}
              className="btn-secondary disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span aria-hidden>←</span>
              {t('quiz.back')}
            </button>
            <button onClick={onReset} className="btn-secondary">
              {t('cta.reset')}
            </button>
          </div>
          {isLast ? (
            <button
              onClick={onSubmit}
              disabled={!complete}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t('quiz.submit')}
              <span aria-hidden>→</span>
            </button>
          ) : (
            <button
              onClick={onNext}
              disabled={value === null || value === undefined}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t('quiz.next')}
              <span aria-hidden>→</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────── Result ────────────────────────────

function Result({
  locale,
  answers,
  onReset,
}: {
  locale: AppLocale;
  answers: Answers;
  onReset: () => void;
}) {
  const t = useTranslations('diagnostic');
  const score = computeScore(answers);
  const dimensionMap: Record<DimensionId, number> = score.dimensions.reduce(
    (acc, d) => ({ ...acc, [d.id]: d.pct }),
    {} as Record<DimensionId, number>,
  );

  const bucketKey = score.bucket;
  const bucketTitle = t(`result.buckets.${bucketKey}.title`);
  const bucketBody = t(`result.buckets.${bucketKey}.body`);

  return (
    <>
      <section className="relative overflow-hidden bg-tint">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(circle at 12% 30%, rgba(7,154,156,0.18), transparent 45%), radial-gradient(circle at 85% 20%, rgba(0,92,254,0.10), transparent 50%)',
          }}
        />
        <div className="container-x relative max-w-3xl py-20">
          <p className="eyebrow mb-4">{t('result.eyebrow')}</p>
          <div className="mb-6 flex items-baseline gap-4">
            <span className="font-display text-[6rem] font-bold leading-none text-teal-700 lg:text-[8rem]">
              {score.overall}%
            </span>
            <span className="text-body-lg text-slate-500">{t('result.scoreLabel')}</span>
          </div>
          <h1 className="mb-4 text-h2 text-ink-700">{bucketTitle}</h1>
          <p className="text-body-lg text-slate-500">{bucketBody}</p>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="container-x max-w-3xl">
          <h2 className="mb-8 text-h3 text-ink-700">{t('result.breakdownTitle')}</h2>
          <ul className="space-y-5">
            {DIMENSIONS.map((d) => {
              const pct = dimensionMap[d.id] ?? 0;
              return (
                <li key={d.id}>
                  <div className="mb-2 flex items-center justify-between text-body text-ink-700">
                    <span className="font-medium">{d.label[locale]}</span>
                    <span className="font-mono text-body-sm text-slate-500">{pct}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${
                        pct >= 70 ? 'bg-teal-500' : pct >= 50 ? 'bg-brandblue-500' : 'bg-warning'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-navy-800 py-16 text-paper">
        <div className="container-x max-w-3xl text-center">
          <p className="eyebrow mb-3 text-teal-300">{t('result.ctaEyebrow')}</p>
          <h2 className="mb-4 text-h2 text-paper">{t('result.ctaTitle')}</h2>
          <p className="mx-auto mb-8 max-w-xl text-body-lg text-slate-200">
            {t('result.ctaBody')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/#contact" className="btn-primary bg-teal-500 hover:bg-teal-700">
              {t('result.ctaPrimary')}
              <span aria-hidden>→</span>
            </Link>
            <Link href="/whitepapers" className="btn-secondary">
              {t('result.ctaSecondary')}
            </Link>
            <button onClick={onReset} className="text-body-sm font-medium text-slate-200 underline decoration-slate-300 underline-offset-4 hover:text-paper">
              {t('cta.reset')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
