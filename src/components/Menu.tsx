import Image from "next/image"
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Link from 'next/link'

export const Menu = () => {
  const [click, setClick] = useState<Boolean>(true)

  let [visible, setVisible] = useState(false)

  useEffect(() => {
    const Visible = () => {
      if (window.scrollY >= 90) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    };
    window.addEventListener("scroll", Visible);
  }, []);



  return (
    <>

      <nav className={` ${visible ? 'glass-menu bg-[#16326f]' : ''}  pt-2 sm:pt-0 transition-all  w-full top-0 z-[5] fixed`}>

        <div className={`md:hidden ${visible ? 'h-11' : 'h-16 '} transition_menu_height  flex justify-around items-center `}>

          <Link href='#up'>
            <Image className={` ${visible ? 'w-[6rem]' : ''} transition_menu_width `} src="/logo/5.svg" alt="logo" width={150} height={60} />
          </Link>

          {/* <RxHamburgerMenu onClick={() => setClick(!click)} className={`text-white ${click ? '' : 'hidden'}`} size="2.5rem" /> */}
          <button className="Button">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>

        <div className={`transition_menu_height ${visible ? 'h-12' : 'h-20'} w-full  hidden md:flex justify-center items-center`}>

          <ul className="text-white font-bold flex w-11/12 justify-between items-center">
            <Link className="hover:underline" href='#inicio'>
              <li>INICIO</li>
            </Link>
            <Link className="hover:underline" href='#nosotros'>
              <li>NOSOTROS</li>
            </Link>
            <Link href='#up'>
              <li>
                <Image className={` ${visible ? 'w-28' : ''} transition_menu_width`} src="/logo/5.svg" alt="logo" width={180} height={60} />
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
      <nav style={{ background: ' #0e318fcf   ' }} className={`bg-white z-[100] flex md:hidden  flex-col rounded-ee-full lg:hidden  transition-all  items-center opacity-95 fixed  h-screen w-screen 
          ${!click ? '' : '-translate-x-full'}`}>


        <Link href='#up'>
          <Image src="/logo/logo3.png" alt="logo" width={180} height={60} />
        </Link>
        <div className='bg-white absolute top-10 right-10  lg:hidden '>
          <GrClose onClick={() => setClick(!click)} className={`animate-pulse ${!click ? '' : 'hidden'}`} size="2.5rem" />
        </div>

        <ul className=' text-white font-bold flex basis-96 -translate-y-8 flex-col lg:hidden items-center justify-around '>

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
