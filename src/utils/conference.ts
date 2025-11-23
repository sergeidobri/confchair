export function getFormatDate(date: string) {
  const [year, month, day] = date.split('T')[0]?.split('-');
  if (!year || !month || !day) return '';
  return `${day}.${month}.${year}`;
}
