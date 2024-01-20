import React from 'react'
import KoalaLogo from "@/public/favicon.svg"

export const KoalaDex = () => {
  return (
    <div className="justify-start items-start gap-2 inline-flex">
        <div className="h-14 w-14 relative justify-center align-middle">
            <img src={KoalaLogo.src} alt="Logo" className=''/>
        </div>
        <div className="flex-col justify-start items-start gap-2 inline-flex w-36">
            <div  className="text-white text-2xl font-normal capitalize">KoalaDex</div>
            <div className="text-sky-500 text-sm font-normal  leading-[21px]">Powerd BY ZetaChain</div>
        </div>
    </div>
  )
}
