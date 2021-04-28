import { DateTime } from 'luxon'

const toDateFormat = (date: string) => {
  return DateTime.fromISO(date).toFormat('d. LLL yyyy')
}

export default toDateFormat
