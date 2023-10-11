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
           
                        <div id="principal"
                            className="flex parallax relative flex-col justify-center items-center leading-none h-[40vh] sizeImage object-cover lg:h-[100vh] w-screen "
                            style={{backgroundImage: `url('image/start.png')`, backgroundPosition:'top'}}
                        >
                            

                        </div>
              

        </>
    )
}
