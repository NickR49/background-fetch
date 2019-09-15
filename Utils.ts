export const timeString = () => {
  return new Date().toLocaleTimeString('en-NZ');
};

export const log = (logEntry: string) => {
  const timestampedLogEntry = `${timeString()} - ${logEntry}`;
  console.log(timestampedLogEntry);
};
