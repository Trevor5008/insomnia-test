"use client"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import CurrencySymbol from "./components/CurrencySymbol"
import SelectList from "./components/SelectList"
import Button from "./components/Button"
import {
   priceFormatter,
   calculateChange
} from "./utils/helpers"

export default function Home() {
   const [data, setData] = useState(null)
   const [intervalValue, setIntervalValue] = useState(5000)
   const [previousRate, setPreviousRate] =
      useState(null)
   const [currentColor, setCurrentColor] =
      useState(null)
   const [changePercentage, setChangePercentage] =
      useState(0)
    const [pulse, setPulse] = useState(false)

    const router = useRouter()

   function handleNewInterval(newInterval) {
    setIntervalValue(newInterval * 1000)
   } 

   function getData() {
      const path =
         "https://api.coindesk.com/v1/bpi/currentprice.json"
      fetch(path)
         .then((res) => {
            if (res.ok) {
               return res.json()
            }
            throw new Error("Error fetching data")
         })
         .then((data) => {
            setData(data)
         })
         .catch((err) => {
            console.error(
               "Error fetching data:",
               err
            )
         })
   }

   useEffect(() => {
      getData()
      const intervalId = setInterval(
         getData,
         intervalValue
      )

      return () => clearInterval(intervalId)
   }, [intervalValue])

   // Change text color based on increase/decrease
   useEffect(() => {
      if (data && previousRate) {
         const currentRate =
            data.bpi.USD.rate_float
         // green indicates increase, red for decrease
         const changeColor =
            currentRate > previousRate
               ? "text-green-400"
               : currentRate < previousRate
               ? "text-red-400"
               : currentColor

         setCurrentColor(changeColor)
         if (currentRate !== previousRate) {
            const change = calculateChange(
               previousRate,
               currentRate
            )
            setChangePercentage(parseFloat(change.toFixed(3)))
         }
      }
      if (data) {
         const currentRate =
            data.bpi.USD.rate_float
         setPreviousRate(currentRate)
         setPulse(true)
         setTimeout(() => {
          setPulse(false)
         }, 1000)
      }
   }, [data])

   if (!data) return <h1>Loading...</h1>
   return (
      <main>
         <div>
            <h4 className={pulse ? `animate-pulse` : ''}>
               <CurrencySymbol
                  htmlSymbol={data.bpi.USD.symbol}
               />
               {priceFormatter(data.bpi.USD.rate)}
               &nbsp;
               <span className={currentColor}>{changePercentage > 0 ? '+' : ''}{changePercentage}%</span>
            </h4>
            <h4 className={pulse ? `animate-pulse` : ''}>
               <br />
               <CurrencySymbol
                  htmlSymbol={data.bpi.GBP.symbol}
               />
               {priceFormatter(data.bpi.GBP.rate)}
            </h4>
            <h4 className={pulse ? `animate-pulse` : ''}>
               <br />
               <CurrencySymbol
                  htmlSymbol={data.bpi.EUR.symbol}
               />
               {priceFormatter(data.bpi.EUR.rate)}
            </h4>
         </div>
         <div>
          <SelectList interval={intervalValue} changeInterval={handleNewInterval}/>
         </div>
         <div>
            <Button text='NFTs' onClick={() => router.push('/nfts')} />
         </div>
      </main>
   )
}
