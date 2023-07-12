"use client"
import { useState } from "react"
import Button from "./Button"

export const SelectList = ({
   interval,
   changeInterval
}) => {
   const [newInterval, setNewInterval] =
      useState(interval)

   const handleChange = (e) => {
      setNewInterval(e.target.value)
   }

   const handleIntervalSelect = () => {
    changeInterval(newInterval)
   }

   return (
      <div>
         <label
            htmlFor="interval"
            className="block text-sm font-medium leading-6 text-white"
         >
            Interval
         </label>
         <div className="flex items-center mt-2 rounded-md shadow-sm">
            <input
               type="number"
               name="interval"
               id="interval"
               className="block w-20 rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               min={1} // users cannot select less than 1 second interval
               placeholder={interval/1000}
               onChange={handleChange}
            />
            <span className="text-gray-500 sm:text-sm ml-2">
               seconds
            </span>
         </div>
         <Button
            text="Set Interval"
            onClick={handleIntervalSelect}
         />
      </div>
   )
}

export default SelectList
