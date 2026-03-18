/**
 * Types and constants for document AI features.
 */

export type DocAiImproveMode =
  | 'grammar'
  | 'writing'
  | 'shorter'
  | 'longer'
  | 'professional'
  | 'casual'
  | 'straightforward'
  | 'confident'
  | 'friendly';

export const DocAiImproveModes: DocAiImproveMode[] = [
  'grammar',
  'writing',
  'shorter',
  'longer',
  'professional',
  'casual',
  'straightforward',
  'confident',
  'friendly',
];

export const DocAiTranslateLanguages: string[] = [
  'English',
  'Spanish',
  'French',
  'German',
  'Portuguese',
  'Italian',
  'Dutch',
  'Russian',
  'Chinese, Simplified',
  'Chinese, Traditional',
  'Japanese',
  'Korean',
  'Arabic',
  'Hebrew',
  'Indonesian',
  'Vietnamese',
  'Filipino',
];
