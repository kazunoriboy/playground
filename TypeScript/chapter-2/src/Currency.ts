type Unit2 = 'EUR' | 'GBP' | 'JPY' | 'USD'

type Currency = {
  unit: Unit2
  value: number
}

let Currency = {
  from(value: number, unit: Unit2): Currency {
    return {
      unit: unit,
      value
    }
  }
}

export default Currency
