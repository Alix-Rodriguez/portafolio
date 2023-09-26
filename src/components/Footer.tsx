import Image from "next/image"
import { useState } from "react"
import Link from 'next/link'

export const Footer = () => {





  return (
    <>


    <footer className="bg-[#0c0c0c] h-full text-white flex py-20 px-5" >

    <div className="w-[33%]">
    <Image src="/logo/a.svg" alt="start-tech logo" width={200} height={1}></Image>
    </div>

    <div className="w-[33%]">
        <h3>Porque preferirnos?</h3>

        <p>Porque, más que una empresa, somos un equipo comprometido con tu crecimiento y posicionamiento para potenciar tu marca en el mundo digital.</p>

    </div>
    <div className="w-[33%]">
        <h3>Contacto</h3>

    </div>

    </footer>



    </>
  )
}
