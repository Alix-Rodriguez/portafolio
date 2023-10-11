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

      <nav className={` ${visible ? 'glass-menu bg-[rgba(18,28,79,1)]' : ''}  pt-2 sm:pt-0 transition-all  w-full top-0 z-[100] fixed`}>

        <div className={`md:hidden ${visible ? 'h-11' : 'h-16 '} transition_menu_height  flex justify-around items-center `}>

          <Link href='#up'>
            <Image className={` ${visible ? 'w-[6rem]' : ''} transition_menu_width `} src="/logo/5.svg" alt="logo" width={150} height={60} />
          </Link>

         <button onClick={() => setClick(!click)} className={` Button`}>
              <div className={`${!click ? 'div1' : ''} `}></div>
              <div className={`${!click ? 'div2' : ''} `}></div>
              <div className={`${!click ? 'div3' : ''} `}></div>
            </button>
        </div>

        <div className={`transition_menu_height ${visible ? 'h-12' : 'h-20'} w-full  hidden md:flex justify-center items-center`}>

          <ul className="text-white font-bold flex w-11/12 justify-between items-center">
            <Link className="hover:underline" href='#inicio'>
              <li>INICIO</li>
            </Link>
            <Link className="hover:underline" href='#portafolio'>
              <li>PORTAFOLIO</li>
            </Link>
            <Link href='#up'>
              <li>
                <Image className={` ${visible ? 'w-28' : ''} transition_menu_width`} src="/logo/5.svg" alt="logo" width={180} height={60} />
              </li>
            </Link>
            <Link className="hover:underline" href='#tecnologia'>
              <li>TECNOLOGIA</li>
            </Link>
            <Link className="hover:underline" href='#contacto'>
              <li>CONTACTO</li>
            </Link>
          </ul>
        </div>
      </nav>

      {/* menu adaptado */}
      <nav style={{ background: ' rgba(15,15,23,1)   ' }} className={` z-40 flex md:hidden  flex-col rounded-ee-full lg:hidden  transition-all justify-center  items-center opacity-95 fixed  h-screen w-[65%] 
          ${!click ? '' : '-translate-x-full'}`}>

        <ul className=' text-white font-bold flex basis-96 -translate-y-8 flex-col lg:hidden items-center justify-around '>

          <Link onClick={() => setClick(!click)} href='#inicio'>
            <li>INICIO</li>
          </Link>
          <Link onClick={() => setClick(!click)} href='#portafolio'>
            <li>PORTAFOLIO</li>
          </Link>
          <Link onClick={() => setClick(!click)} href='#tecnologia'>
            <li>TECNOLOGIA</li>
          </Link>
          <Link onClick={() => setClick(!click)} href='#contacto'>
            <li>CONTACTO</li>
          </Link>

        </ul>
      </nav>





    </>
  )
}
