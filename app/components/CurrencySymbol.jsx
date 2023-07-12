import he from 'he'

export default function CurrencySymbol({ htmlSymbol }) {
    const symbol = he.decode(htmlSymbol)
    return (
      <div className='inline'>{symbol}</div>
    )
  }