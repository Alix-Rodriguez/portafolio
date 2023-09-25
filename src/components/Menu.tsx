import Image from "next/image"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Link from 'next/link'

export const Menu = () => {



  const [click, setClick] = useState<Boolean>(true)


  return (
    <>
      {/* <nav style={{ background:' #1c4c57 ' }} className="glass opacity-80 z-[2] w-full h-20 flex justify-center items-center">
        <ul className="text-white flex w-11/12 justify-between items-center">
            <li>INICIO</li>
            <li>NOSOTROS</li>
            <li>
            <Image src="/logo/logo3.png" alt="logo" width={180} height={60} />
            </li>
            <li>SERVICIOS</li>
            <li>CONTACTO</li>
        </ul>
    </nav> */}

      <nav style={{ background: ' #0e318fcf   ' }} className=" glass-menu w-full fixed z-[5]">
        <div className="glass-effect">
        </div>

        <div className="md:hidden h-16 flex justify-around items-center ">
        <Image src="/logo/logo3.png" alt="logo" width={150} height={60} />

        <RxHamburgerMenu onClick={() => setClick(!click)} className={`text-white ${click ? '' : 'hidden'}`} size="2.5rem" />
        </div>

        <div className=" w-full h-20 hidden md:flex justify-center items-center">
          <ul className="text-white flex w-11/12 justify-between items-center">
            <Link href='#inicio'>
              <li>INICIO</li>
            </Link>
            <Link href='#nosotros'>
              <li>NOSOTROS</li>
            </Link>
            <Link href='#up'>
              <li>
                <Image src="/logo/logo3.png" alt="logo" width={180} height={60} />
            </li>
            </Link>
            <Link href='#servicio'>
              <li>SERVICIOS</li>
            </Link>
            <Link href='#contacto'>
              <li>CONTACTO</li>
            </Link>
          </ul>
        </div>
      </nav>

      {/* menu adaptado */}
      <nav style={{ background: ' #0e318fcf   ' }} className={`bg-white z-[100] flex md:hidden flex-col rounded-ee-full lg:hidden justify-center  items-center opacity-95 fixed  h-screen w-screen 
          ${!click ? '' : '-translate-x-full'}`}>

          <a className=''>
            <Image src="/logo/logo3.png" alt="logo" width={180} height={60} />
          </a>
        <div className='bg-white absolute top-10 right-10  lg:hidden '>
          <GrClose onClick={() => setClick(!click)} className={`animate-pulse ${!click ? '' : 'hidden'}`} size="2.5rem" />
        </div>

        <ul className=' text-white flex basis-96 -translate-y-8 flex-col lg:hidden items-center justify-around '>

          <li>INICIO</li>
          <li>NOSOTROS</li>
          <li>SERVICIOS</li>
          <li>CONTACTO</li>

        </ul>
      </nav>





    </>
  )
}
