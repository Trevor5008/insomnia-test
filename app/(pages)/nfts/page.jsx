"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Button from "../../components/Button"
import { getNFTs } from "@/app/utils/helpers"

export default function TokensPage() {
   const router = useRouter()
   const [nfts, setNFTs] = useState(null)

   useEffect(() => {
    const fetchData = async () => {
        try {
          const data = await getNFTs()
          setNFTs(data.assets)
        } catch (error) {
          console.error('Error fetching NFTs:', error)
        }
      }
  
      fetchData()
   }, [])

   return (
      <div>
         <h1>NFTs</h1>
         {nfts ? (
            <ul>
               {nfts.map((nft) => (
                  <li key={nft.id}>{nft.name}</li>
                  // Render other properties of the NFT as needed
               ))}
            </ul>
         ) : (
            <p>Loading NFTs...</p>
         )}

         <Button
            text="Previous"
            onClick={() => router.push("/")}
         />
      </div>
   )
}
