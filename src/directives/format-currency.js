import Decimal from 'decimal.js'

const formatCurrencyText = (value, config) => {
  const formatter = new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.value || 'USD',
    minimumFractionDigits: config.minimumFractionDigits
  })


  const number = parseFloat(value)
  console.log('### value: ', value, number)

  const convertedNumber = config.rate ? new Decimal(number).div(config.rate).toFixed(2) : number
  return formatter.format(isNaN(convertedNumber) ? 0 : convertedNumber)
}

const formatCurrency = {
  // 生命週期hooks(el, binding)
  mounted(el, binding) {
    el._originalValue = parseFloat(el.textContent)
    const config = binding.value
    el.textContent = formatCurrencyText(el._originalValue, config)
  },
  updated(el, binding) {
    console.log('### directive update: ', el, binding.value)
    const config = binding.value
    el.textContent = formatCurrencyText(el._originalValue, config)
  }
}

export default formatCurrency