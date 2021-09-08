const { realToDollarService } = require('../services/real-to-dollar-service')

exports.convertRealToDollar = async (req, res) => {
  try {
    const value = parseFloat(req.params.valor_real)

    if (isNaN(value) || value < 0) {
      res.status(400).json({
        message: 'You must provide a non-negative number'
      })
      return
    }

    const result = await realToDollarService(value)

    res.json({
      from: 'BRL',
      to: 'USD',
      originalValue: value,
      convertedValue: result,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Internal server error'
    })
  }
}