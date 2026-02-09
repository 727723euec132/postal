const severityMap = {
  rain: 1,
  storm: 2,
  flood: 3,
  wind: 1,
};

export const predictDelayDays = (weatherFactors = []) => {
  const score = weatherFactors.reduce((total, factor) => {
    const key = factor.toLowerCase();
    return total + (severityMap[key] ?? 0);
  }, 0);

  if (score >= 5) return 3;
  if (score >= 3) return 2;
  if (score >= 1) return 1;
  return 0;
};
