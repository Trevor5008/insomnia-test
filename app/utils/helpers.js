const axios = require('axios')
const apiKey = process.env.API_KEY

export const priceFormatter = (price) => {
   const formattedPrice = price.split(".")
   const rounded = Math.ceil(
      Number(formattedPrice[1]) / 100
   )
   return (
      formattedPrice[0] + "." + rounded.toString()
   )
}

export const calculateChange = (
   previous,
   current
) => {
   const change =
      ((current - previous) / previous) * 100
   return change
}

export const getNFTs = async () => {
    const options = {
        method: 'GET',
        url: 'https://opensea13.p.rapidapi.com/assets/',
        params: {
          collection_slug: 'cryptopunks',
          order_direction: 'desc',
          limit: '20',
          include_orders: 'false'
        },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'opensea13.p.rapidapi.com'
        }
      };
  
    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}
