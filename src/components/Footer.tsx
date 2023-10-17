import Image from "next/image"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Footer = () => {

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });



  }, []);




  return (
    <>


      <footer  style={{ background: `linear-gradient(-90deg, rgba(15,15,23,1) 77%, rgba(18,28,79,1) 91%)` }} id="contacto" className=" text-white ">
      <div className=" h-full gap-y-14 lg:gap-y-0 lg:h-[60vh]  flex flex-col lg:flex-row justify-center py-8 px-5">

        <div className="w-full lg:w-[33%] gap-y-4 lg:gap-y-0 flex flex-col  items-center ">
          <div >
            <Image  src="/logo/5.svg" alt="start-tech logo" width={200} height={1}></Image>
          </div>

       

        </div>

        <div className="w-full lg:w-[33%] gap-y-3 lg:gap-y-0  flex items-center lg:items-start flex-col justify-around">
          <h3  className=" font-bold titulo pl-5 uppercase text-lg  sm:text-2xl">Porque Elegirme?</h3>
          <hr className="w-[35%] -translate-y-3   lg:-translate-y-10 border-[2px]  border-[#0e318fcf]" />

          <p className="basis-3/6  subtitulo font-medium text-center  w-[90%]">Porque más que un desarrollador, estoy comprometido con el crecimiento y éxito personal, buscando la forma de cada dia aprender cosas nuevas.</p>

        </div>

        <div className="w-full lg:w-[33%] flex flex-col gap-y-3 lg:gap-y-0 items-center lg:items-start justify-around">
          <h3  className="uppercase font-bold titulo pl-5 text-lg  sm:text-2xl">Contacto</h3>
          <hr className="w-[30%] -translate-y-3 lg:-translate-y-10 border-[2px]  border-[#0e318fcf]" />
        
          <div className="flex basis-3/6  justify-center items-start gap-x-1">
          <Image  src="/icon/email.svg" alt="email" width={30} height={30}></Image>
            <a className="hover:underline" href="mailto:starttech0705@gmail.com">alixm.081@gmail.com</a>
          </div>
        
          

          

        </div>

        </div>

        <div className="flex justify-center">
          <h6 className="capitalize text-base sm:text-lg">© 2023 rights reserved desing by Alix Rodriguez</h6>
          
        </div>

      </footer>



    </>
  )
}
