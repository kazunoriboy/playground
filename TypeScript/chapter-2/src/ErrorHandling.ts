function ask() {
  return prompt('When is your birthday?')
}

class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

/**
 * @throws {InvalidDateFormatError} ユーザーが誕生日を間違って入力した
 * @throws {DateIsInTheFutureError} ユーザーが未来の誕生日を入力した
 */
function parse(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
  let date = new Date(birthday)
  if (!isValid(date)) {
    return new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
  }
  if (date.getTime() > Date.now()) {
    return new DateIsInTheFutureError('Are you a timelord')
  }
  return date
}

function isValid(date: Date) {
  return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime())
}

let result = parse(ask())
if (result instanceof InvalidDateFormatError) {
  console.error(result.message)
} else if (result instanceof DateIsInTheFutureError) {
  console.info(result.message)
} else {
  console.info('Date is', result.toISOString())
}
