export function getFormatDate(date: string) {
  const [year, month, day] = date.split('T')[0]?.split('-');
  if (!year || !month || !day) return '';
  return `${day}.${month}.${year}`;
}

export const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
