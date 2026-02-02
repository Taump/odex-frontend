import { EXCHANGE_RATE_API_URL } from '../../../config/urls'

import fetch from 'isomorphic-fetch'

const request = (endpoint, options) => {
  return fetch(`${EXCHANGE_RATE_API_URL}${endpoint}`, {
    headers: {
    //  'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    ...options
  })
}

const keysToUpperCase = obj => {
    let u = {}
    for (let k in obj) {
        const v = obj[k]
        if (v && typeof v === 'object' && !Array.isArray(v))
            u[k.toUpperCase()] = keysToUpperCase(v)
        else
            u[k.toUpperCase()] = obj[k]
    }
    return u
}

export const fetchExchangeRates = async (baseCurrencies, quoteCurrencies) => {
    baseCurrencies = baseCurrencies.join(',')
    quoteCurrencies = quoteCurrencies.join(',')

    const response = await request(`/api/v3/simple/price?symbols=${baseCurrencies}&vs_currencies=${quoteCurrencies}`)

    if (response.status !== 200) {
        throw new Error('error')
    }

    const exchangeRates = await response.json()

    return keysToUpperCase(exchangeRates)
}


export const getExchangeRates = async (baseCurrencies, quoteCurrencies) => {
  let exchangeRates = await fetchExchangeRates(baseCurrencies, quoteCurrencies)

  return Object.keys(exchangeRates).map(symbol => {
    return {
      symbol: symbol,
      USD: exchangeRates[symbol].USD,
      EUR: exchangeRates[symbol].EUR,
      JPY: exchangeRates[symbol].JPY,
    }
  })
}