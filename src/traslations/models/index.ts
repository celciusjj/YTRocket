export enum Languages {
  ES = 'es',
  EN = 'en',
  PT = 'pt',
}

export type LanguageValues = typeof Languages[keyof typeof Languages];
