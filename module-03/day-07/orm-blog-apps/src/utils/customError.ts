export interface CustomError {
  statusCode: number;
  message: string;
}

export const createCustomError = (statusCode: number, message: string) => {
  return { statusCode, message } as CustomError;
};
