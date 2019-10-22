export const MS_PER_SECOND = 1000;
export const MS_PER_MINUTE = 60 * MS_PER_SECOND;
export const MS_PER_HOUR = 60 * MS_PER_MINUTE;

export function formatDuration(duration) {
  let remaining = duration;
  const hours = Math.floor(remaining / MS_PER_HOUR);

  remaining -= hours * MS_PER_HOUR;
  const minutes = Math.floor(remaining / MS_PER_MINUTE);

  remaining -= minutes * MS_PER_MINUTE;
  const seconds = Math.floor(remaining / MS_PER_SECOND);

  remaining -= seconds * MS_PER_SECOND;
  const millisecond = Math.floor(remaining);

  const pad2 = n => ('00' + n).slice(-2);
  const pad3 = n => ('000' + n).slice(-3);

  return `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}.${pad3(
    millisecond,
  )}`;
}
