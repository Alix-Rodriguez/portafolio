import Image from "next/image"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Link from 'next/link'

export const Menu = () => {
  const [click, setClick] = useState<Boolean>(true)




  return (
    <>

      <nav style={{ background: ' #0e318fcf   ' }} className="transition-all fixed sm:relative  glass-menu w-full  z-[5]">
        <div className="glass-effect">
        </div>

        <div className="md:hidden h-16 flex justify-around items-center ">

          <Link href='#up'>
            <Image src="/logo/logo3.png" alt="logo" width={150} height={60} />
          </Link>

          <RxHamburgerMenu onClick={() => setClick(!click)} className={`text-white ${click ? '' : 'hidden'}`} size="2.5rem" />
        </div>

        <div className=" w-full h-20 hidden md:flex justify-center items-center">
          <ul className="text-white flex w-11/12 justify-between items-center">
            <Link className="hover:underline" href='#inicio'>
              <li>INICIO</li>
            </Link>
            <Link className="hover:underline" href='#nosotros'>
              <li>NOSOTROS</li>
            </Link>
            <Link  href='#up'>
              <li>
                <Image src="/logo/logo3.png" alt="logo" width={180} height={60} />
              </li>
            </Link>
            <Link className="hover:underline" href='#servicio'>
              <li>SERVICIOS</li>
            </Link>
            <Link className="hover:underline" href='#contacto'>
              <li>CONTACTO</li>
            </Link>
          </ul>
        </div>
      </nav>

      {/* menu adaptado */}
      <nav style={{ background: ' #0e318fcf   ' }} className={`bg-white z-[100] flex md:hidden  flex-col rounded-ee-full lg:hidden justify-center transition-all  items-center opacity-95 fixed  h-screen w-screen 
          ${!click ? '' : '-translate-x-full'}`}>


        <Link href='#up'>
          <Image src="/logo/logo3.png" alt="logo" width={180} height={60} />
        </Link>
        <div className='bg-white absolute top-10 right-10  lg:hidden '>
          <GrClose onClick={() => setClick(!click)} className={`animate-pulse ${!click ? '' : 'hidden'}`} size="2.5rem" />
        </div>

        <ul className=' text-white flex basis-96 -translate-y-8 flex-col lg:hidden items-center justify-around '>

          <Link href='#inicio'>
            <li>INICIO</li>
          </Link>
          <Link href='#nosotros'>
            <li>NOSOTROS</li>
          </Link>
          <Link href='#servicio'>
            <li>SERVICIOS</li>
          </Link>
          <Link href='#contacto'>
            <li>CONTACTO</li>
          </Link>

        </ul>
      </nav>





    </>
  )
}
