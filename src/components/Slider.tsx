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





export const Slider = () => {


    return (
        <>
           
                        <div
                            className="flex relative flex-col justify-center items-center leading-none h-[50vh] lg:h-[100vh] w-screen bg-no-repeat 
                             "
                            style={{backgroundImage: `url('image/start.gif')`, backgroundSize: '100% 100%', backgroundPosition:'center center'}}
                        >
                            

                        </div>
              

        </>
    )
}
