export const priceFormatter = (price) => {
   const formattedPrice = price.split(".")
   const rounded = Math.ceil(
      Number(formattedPrice[1]) / 100
   )
   return (
      formattedPrice[0] + "." + rounded.toString()
   )
   }

   export const calculateChange = (previous, current) => {
    const change = ((current - previous) / previous) * 100
    return change
   }