import Image from 'next/image'
import { Menu } from '../components/Menu';
import { Slider } from '../components/Slider';
import Typewriter from 'typewriter-effect';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import Head from 'next/head';
import { Flotante } from '../components/Flotante'
import { img } from '@/recursos/recursos';





export default function Home() {



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

      <Head>
        <title>Start_Tech - Dev </title>
        <link rel="icon" href="/logo/logo7.png" />
        <meta name="description" content="Desarrollo web Diseño Publicidad Marketing" />
      </Head>
      <Flotante />

      <FloatingWhatsApp
        phoneNumber="+584120532998"
        avatar="/logo/logo1.png"
        accountName="Start - Tech"
        statusMessage="Donde Las Ideas Cobran Vida"
        chatMessage="Hola un gusto saludarle!!!. Como podemos ayudarle?  "
        placeholder="Escriba un mensaje..."
        allowClickAway={true}
        notification={true}
      />

      <Menu />
      <Slider />


      {/* PRIMERA SECCION */}
      <section id='inicio' style={{ background: `linear-gradient(90deg, rgba(15,15,23,1) 77%, rgba(18,28,79,1) 91%)` }} className='text-white overflow-x-hidden   relative h-full '>


        <div className='text-white relative h-full lg:h-[130vh]'>



          <div className='flex justify-center z-[2] relative pt-7'>
            <h1 className='titulo capitalize text-xl sm:text-3xl font-semibold'>
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("lo que hacemos")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </h1>
          </div>

          <div className='flex flex-col z-[2] overflow-hidden relative py-5 lg:flex-row gap-y-9 h-4/5 items-center lg:gap-x-4 px-5 sm:px-11 w-full'>

            <div data-aos={`zoom-out-right`} style={{ boxShadow: "5px 5px 20px 0px rgba(196, 163, 255, 1)" }} className='border-4   shadow-2xl h-[90%] rounded-sm borde-inset p-7  flex justify-center flex-col items-center gap-y-10'>
              <Image src='icon/compu.svg' alt="Computadora" width={70} height={70} ></Image>
              <h2 className='titulo capitalize font-bold text-lg ' >Desarrollo web</h2>
              <h4 className='subtitulo w-11/12 text-center'>Nuestro equipo de trabajo puede desarrollar desde páginas tipo catálogo, las cuales muestran sus productos de una forma sencilla y efectiva, hasta sitios web en varios idiomas, todo de acuerdo con sus necesidades.</h4>
            </div>

            <div data-aos={`zoom-in`} style={{ boxShadow: "5px 5px 20px 0px rgba(196, 163, 255, 1)" }} className='border-4  shadow-2xl h-[90%] rounded-sm borde-inset p-7  flex justify-center flex-col items-center gap-y-10'>
              <Image src='/icon/diseno.png' alt="Diseño" width={70} height={70} ></Image>
              <h2 className='titulo capitalize font-bold text-lg '>Diseño a la medida</h2>
              <h4 className='w-11/12 subtitulo text-center'>¡Descubre el poder de un buen diseño web con nuestro servicio! En nuestro sitio, transformamos tus ideas en realidad digital. Nos especializamos en crear sitios web atractivos, intuitivos y de alto rendimiento que capturan la esencia de tu negocio y conectan con tus clientes.</h4>
            </div>

            <div data-aos={`fade-down`} style={{ boxShadow: "5px 5px 20px 0px rgba(196, 163, 255, 1)" }} className='border-4 shadow-2xl h-[90%] rounded-sm borde-inset p-7  flex justify-center flex-col items-center gap-y-10'>
              <Image src='/icon/seo.png' alt="Google" width={100} height={100} ></Image>
              <h2 className='titulo capitalize font-bold text-lg '>Seo</h2>
              <h4 className='w-11/12 subtitulo text-center'>¡Eleva tu negocio con nuestro servicio de SEO para Google! Optimizamos tu sitio con palabras clave relevantes, mejorando tu posición en los resultados de búsqueda y atrayendo más clientes. ¡Contáctanos hoy!</h4>
            </div>


          </div>
        </div>


      </section>
      {/* SEGUNDO SECCION */}

      <section style={{ backgroundImage: `url("image/tech.png")`, backgroundSize: '100% 100%' }} id="tecnologia" className='text-white pb-3 relative h-[65vh] parallax lg:h-screen'>


        {/* <div className='flex justify-center z-[2] relative pt-2'>
          <h1 className='titulo capitalize text-xl sm:text-3xl font-semibold'>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Las tecnologías que usamos")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
        </div> */}

      </section>

    

      {/* CUARTA SECCION */}

      <section style={{ background: `linear-gradient(-90deg, rgba(15,15,23,1) 77%, rgba(18,28,79,1) 91%)` }} id='portafolio' className=' h-full pb-7  sizeImage relative'>

        <div className='flex justify-center z-[2] text-white relative pt-7'>
          <h1 className='titulo capitalize text-xl sm:text-3xl font-semibold'>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Nuestros trabajos realizados")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
        </div>

      
        <div className='w-[90%] m-auto'>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 relative z-20 gap-4">
            {img.map((item) => {
              return (
                <div data-aos="zoom-in-up" className='grid lg:grid-cols-1 lg:grid-rows-2 gap-4' key={item.id}>
                  <Image className='hover:scale-[1.5] transition-all' src={item.img} alt={item.alt} width={300} height={300} ></Image>
                  <Image className='hover:scale-[1.5] transition-all' src={item.img_movil} alt={item.alt} width={300} height={300} ></Image>
                </div>
              )
            })}
          </div>
        </div>

      </section >
            
      <Footer />

      {/* ¡Bienvenido a su solución integral para el desarrollo web y el diseño gráfico!
          En Start - Tech, nos enorgullece ofrecer una amplia gama de servicios de programación en múltiples lenguajes y framework, como a AngularJS, ReactJS, NextJS, WordPress, y más. Nuestro equipo de expertos programadores está equipado con las habilidades y la experiencia necesarias para llevar sus ideas a la vida digital.
          también ofrecemos soluciones de diseño gráfico de alta calidad. Ya sea que necesite un logotipo llamativo, un diseño de interfaz de usuario intuitivo o ilustraciones personalizadas, nuestro equipo de diseñadores gráficos talentosos está listo para superar sus expectativas. */}
    </>
  )
}
