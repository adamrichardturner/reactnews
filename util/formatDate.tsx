function formatDate(isoDateStr: string): string {
  const now = new Date()
  const inputDate = new Date(isoDateStr)

  // Difference in milliseconds
  const diff = now.getTime() - inputDate.getTime()

  // Constants for time intervals in milliseconds
  const SECOND = 1000
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR

  if (diff < HOUR) {
    const minutes = Math.floor(diff / MINUTE)
    return minutes + (minutes === 1 ? ' minute ago' : ' minutes ago')
  } else if (diff < DAY) {
    const hours = Math.floor(diff / HOUR)
    return hours + (hours === 1 ? ' hour ago' : ' hours ago')
  } else {
    const locale = navigator.language // Get user's locale

    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }

    const formattedDate = inputDate.toLocaleDateString(locale, options)

    // Extract day and append appropriate suffix
    const day = inputDate.getDate()
    const dayWithSuffix =
      day + (['st', 'nd', 'rd'][((((day + 90) % 100) - 10) % 10) - 1] || 'th')

    return formattedDate.replace(/^(\d+)/, dayWithSuffix)
  }
}

export default formatDate
