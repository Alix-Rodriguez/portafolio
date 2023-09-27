import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from "react";


export const Flotante = () => {

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

           
            {visible === true &&  <Link href='#principal' >
                <div className="w-10 h-10 pl-2 hover:bg-[#0e318fcf]  transition pt-1 rounded-full rotate-90 flex items-center justify-center bg-black fixed z-10 bottom-9 left-5">
                    <Image src="/image/nav-arrow.png" alt="flecha de subida" width={30} height={30} ></Image>
                </div>
            </Link>
            }

        </>
    )
}
