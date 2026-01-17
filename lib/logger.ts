/**
 * Conditional logging utility
 * Only logs in development mode to avoid exposing errors in production
 */

export const logError = (...args: unknown[]): void => {
  if (process.env.NODE_ENV === 'development') {
    console.error(...args);
  }
  // In production, you could send errors to a tracking service like Sentry:
  // if (import.meta.env.PROD) {
  //   captureException(args[0]);
  // }
};

export const logWarn = (...args: unknown[]): void => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(...args);
  }
};

export const logInfo = (...args: unknown[]): void => {
  if (process.env.NODE_ENV === 'development') {
    console.info(...args);
  }
};
