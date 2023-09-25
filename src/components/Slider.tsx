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
            backgroundImage: `url('image/d.jpg')`
        },
        texto: 'Donde las ideas cobran vida',
        // }
    },
    {
        id: 2,
        fondo: {
            backgroundImage: `url('image/galaxia.png')`,
        },
        texto: 'Innovación a tu alcance',
    },

];





export const Slider = () => {


    return (
        <>
           
                        <div
                            className="flex relative flex-col justify-center items-center leading-none h-[50vh] lg:h-[80vh] w-screen bg-no-repeat 
                             "
                            style={{backgroundImage: `url('image/start.gif')`, backgroundSize: '100% 100%', backgroundPosition:'center center'}}
                        >
                            {/* <div className='h-full  w-full -rotate-180  absolute fondoColor-black'></div> */}


                            {/* <div data-aos="flip-down" className="vidrio relative z-[2] flex flex-col">

                                <div className="z-10 w-1/4 h-20 sm:h-44 sm:w-2/4 bg-cover absolute"
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

                            </div> */}

                        </div>
              

        </>
    )
}
