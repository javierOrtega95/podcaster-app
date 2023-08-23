const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24

export function oneDayAgo ({ currentDate, lastAPIFetchDate }: { currentDate: number, lastAPIFetchDate: number }) {
  const timeDifferenceInMilliseconds = Math.abs(currentDate - lastAPIFetchDate)

  return timeDifferenceInMilliseconds >= MILLISECONDS_PER_DAY
}
