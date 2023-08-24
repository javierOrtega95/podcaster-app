export function totalSecondsToTimeFormat (duration: string) {
  if (isTimeFormat(duration)) return duration

  const seconds = parseInt(duration, 10)
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  const timeFormat = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
  return timeFormat
}

function isTimeFormat (timeFormat: string) {
  const timeFormatRegex = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/

  return timeFormatRegex.test(timeFormat)
}
