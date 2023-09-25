import { Swiper, SwiperSlide } from "swiper/react";

// * Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

///* import required modules
import { Pagination, Navigation } from "swiper/modules";
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const slider = [
    {
        // fondo: {
        id: 1,
        fondo: {
            backgroundImage: `url('image/6.png')`,
        },
        texto: 'Tu puerta de entrada al mundo digital',
        // }
    },
    {
        id: 2,
        fondo: {
            backgroundImage: `url('image/5.png')`
        },
        texto: 'Innovación a tu alcance',
    },
    {
        id: 3,
        fondo: {
            backgroundImage: `url('image/4.png')`
        },
        texto: 'Donde las ideas cobran vida',
    }
];





export const Slider = () => {

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
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                data-swiper-autoplay="100"
                className="mySwiper swiper-slide"
                id="up"
            >
                {slider.map((sli) => (
                    <SwiperSlide key={sli.id}>
                        <div
                            className="flex relative flex-col justify-center items-center leading-none h-screen w-screen bg-no-repeat bg-cover lg:bg-center "
                            style={sli.fondo}
                        >
                            <div className="absolute h-screen w-full mySwipersli"></div>

                            <div data-aos="flip-down" className="vidrio flex flex-col">

                                <div  className="z-10 w-1/4 h-20 sm:h-44 sm:w-2/4 bg-cover absolute"
                                    style={{ backgroundImage: "url('image/marco.png')" }} ></div>

                                <div className="z-10 w-1/4 h-20 sm:h-44 sm:w-2/4 bg-cover absolute rotate-180 bottom-0 right-0"
                                    style={{ backgroundImage: "url('image/marco.png')" }} ></div>

                                <div className=" z-10 flex text-center justify-center pt-14">

                                    <h1 className="text-white text-2xl titulo">Start-Tech</h1>

                                </div>

                                <div className="z-10 flex justify-center ">
                                    <Image src="/logo/logo3.png" alt="logo" width={180} height={60} />
                                </div>

                                <div className="z-10 h-4/5 flex justify-center">
                                    <h3 className="subtitulo text-xs  sm:text-base text-white capitalize">
                                        <Typewriter
                                            options={{
                                                loop: true,
                                            }}
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString(`${sli.texto}`)
                                                    .pauseFor(2000)
                                                    .deleteAll()
                                                    .start();
                                            }}
                                        />
                                    </h3>
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}
