import Image from "next/image"
import { useState } from "react"
import Link from 'next/link'

export const Footer = () => {





  return (
    <>


      <footer  className="bg-[#0c0c0c] text-white">
      <div className=" h-full gap-y-14 lg:gap-y-0 lg:h-[60vh]  flex flex-col lg:flex-row justify-center py-8 px-5">

        <div className="w-full lg:w-[33%] gap-y-4 lg:gap-y-0 flex flex-col  items-center ">
          <div>
            <Image src="/logo/logo6.png" alt="start-tech logo" width={250} height={1}></Image>
          </div>

          <div className="flex basis-3/6 justify-center items-center">
          <Image  src="/icon/email.svg" alt="email" width={30} height={30}></Image>
            <p className="pl-1">starttech0705@gmail.com</p>
          </div>

        </div>

        <div className="w-full lg:w-[33%] gap-y-3 lg:gap-y-0  flex items-center lg:items-start flex-col justify-around">
          <h3 className=" font-bold titulo pl-5 uppercase text-lg  sm:text-2xl">Porque preferirnos?</h3>
          <hr className="w-[35%] -translate-y-3   lg:-translate-y-10 border-[2px]  border-[#0e318fcf]" />

          <p className="basis-3/6  subtitulo font-medium text-center  w-[90%]">Porque, más que una empresa, somos un equipo comprometido con tu crecimiento y posicionamiento  para potenciar  tu marca en el mundo digital.</p>

        </div>

        <div className="w-full lg:w-[33%] flex flex-col gap-y-3 lg:gap-y-0 justify-around">
          <h3 className="uppercase font-bold titulo pl-5 text-lg  sm:text-2xl">Redes sociales</h3>
          <hr className="w-[30%] -translate-y-3 lg:-translate-y-10 border-[2px]  border-[#0e318fcf]" />
        
        {/* <div className="basis-3/6  w-[40%]">

         
        </div> */}
        
          <div className="basis-3/6 flex justify-around items-start w-[40%] sm:w-[30%] lg:w-[40%]">
            <a href="https://www.facebook.com/profile.php?id=61551645911954" target="_black">
              <Image style={{    filter: 'contrast(4.5)'}} src="/icon/face.svg" alt="redes sociales instagram" width={50} height={50}></Image>
            </a>
            <a href="https://instagram.com/start_techoficial?igshid=YTQwZjQ0NmI0OA==" target="_black">
              <Image style={{    filter: 'contrast(1.5)'}} src="/icon/insta.svg" alt="redes sociales instagram" width={50} height={50}></Image>
            </a>
          </div>

          

        </div>

        </div>

        <div className="flex justify-center">
          <h6 className="capitalize text-base sm:text-lg">© 2023 rights reserved desing by start - tech</h6>
          
        </div>

      </footer>



    </>
  )
}
