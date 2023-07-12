export const priceFormatter = (price) => {
   const formattedPrice = price.split(".")
   const rounded = Math.ceil(
      Number(formattedPrice[1]) / 100
   )
   return (
      formattedPrice[0] + "." + rounded.toString()
   )
}

export async function getData() {
   const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
   )

   if (!res) {
      throw new Error("Failed to fetch data")
   }

   return res.json()
}
