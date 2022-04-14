function ask() {
  return prompt('When is your birthday?')
}

class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function parse(birthday: string): Date {
  let date = new Date(birthday)
  if (!isValid(date)) {
    throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError('Are you a timelord')
  }
  return date
}

function isValid(date: Date) {
  return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime())
}

try {
  let date = parse(ask())
  console.info('Date is', date.toISOString())
} catch (e) {
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message)
  } else if (e instanceof RangeError) {
    console.info(e.message)
  } else {
    throw e
  }
}
