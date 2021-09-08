const https = require('https')

exports.realToDollarService = (value) => {
  return new Promise((resolve, reject) => {
    https.get('https://economia.awesomeapi.com.br/json/last/USD-BRL', (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('close', () => {
        const jsonResponse = JSON.parse(data)
        const { USDBRL: { bid } } = jsonResponse
        resolve(value / bid)
      })
    }).on('error', (error) => reject(error))
  })
}