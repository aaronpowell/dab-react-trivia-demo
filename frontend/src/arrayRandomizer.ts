export const arrayRandomizer = <T>(array: T[]) =>
  [...array].sort(() => Math.random() - 0.5);
