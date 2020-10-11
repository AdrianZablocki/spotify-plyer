const durationConverter = (millis: number): string => {
  const minutes: number = Math.floor(millis / 60000);
  const seconds: string = ((millis % 60000) / 1000).toFixed(0).padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export default durationConverter;
