export function GenerateProgressPercent(total: number, completed: number) {
  return Math.round((completed / total) * 100);
}