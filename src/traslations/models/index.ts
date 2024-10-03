export enum Languages {
  ES = 'es',
  EN = 'en',
}

export const languageMapping: Record<string, Languages> = {
  Inglés: Languages.EN,
  Español: Languages.ES,
};

export type LanguageValues = (typeof Languages)[keyof typeof Languages];
