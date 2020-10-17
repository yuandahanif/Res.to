const randomStr = (): string => {
  const salt = 'abcdefghijklmnopqrstuvwxyz';
  const randomSaltIndex = Math.floor(Math.random() * 26);
  return salt[randomSaltIndex];
};

const stringLimiter = (str: string, limit: number = 10): string => {
  const tripleDot = str.length >= limit ? '...' : '';
  return `${str.slice(0, limit)}${tripleDot}`;
};

export { randomStr, stringLimiter };
