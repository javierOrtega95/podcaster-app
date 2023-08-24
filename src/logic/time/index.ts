const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24

export function oneDaySinceLastFetch (lastFetchDate: number) {
  const timeDifferenceInMilliseconds = Math.abs(Date.now() - lastFetchDate)

  return timeDifferenceInMilliseconds >= MILLISECONDS_PER_DAY
}
