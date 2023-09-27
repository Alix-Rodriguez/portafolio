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
import {Flotante} from '../components/Flotante'






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
        <title>Start Tech - Technology</title>
        <link rel="icon" href="/logo/logo7.png" />
        <meta name="description" content="Desarrollo web Diseño Publicidad Marketing" />
      </Head>

      <Flotante/>

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
      <section id='inicio' style={{background:`linear-gradient(90deg, rgba(22,50,111,1) 35%, rgba(44,87,177,1) 80%)`}} className='text-white  relative h-full '>
        <div className='h-full  w-full   absolute fondoColor'></div>
        <div className='h-full  w-full -rotate-180 absolute fondoColor'></div>
        

        {/* bg-[#04143c] */}
        <div className='text-white relative h-full lg:h-screen'>

      

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

          <div className='flex flex-col z-[2] relative py-5 lg:flex-row gap-y-9 h-4/5 items-center lg:gap-x-4 px-5 sm:px-11 w-full'>

            <div data-aos={`zoom-out-right`} className='border-4 shadow-2xl h-[90%] rounded-sm borde-inset p-7  flex justify-center flex-col items-center gap-y-10'>
              <Image src='icon/compu.svg' alt="Computadora" width={70} height={70} ></Image>
              <h2 className='titulo capitalize font-bold text-lg ' >Desarrollo web</h2>
              <h4 className='subtitulo w-11/12 text-center'>Nuestro equipo de trabajo puede desarrollar desde páginas tipo catálogo, las cuales muestran sus productos de una forma sencilla y efectiva, hasta sitios web en varios idiomas, todo de acuerdo con sus necesidades.</h4>
            </div>

            <div data-aos={`zoom-in`} className='border-4 shadow-2xl h-[90%] rounded-sm borde-inset p-7  flex justify-center flex-col items-center gap-y-10'>
              <Image src='icon/diseño.svg' alt="Diseño" width={70} height={70} ></Image>
              <h2 className='titulo capitalize font-bold text-lg '>Diseño a la medida</h2>
              <h4 className='w-11/12 subtitulo text-center'>¡Descubre el poder de un buen diseño web con nuestro servicio! En nuestro sitio, transformamos tus ideas en realidad digital. Nos especializamos en crear sitios web atractivos, intuitivos y de alto rendimiento que capturan la esencia de tu negocio y conectan con tus clientes.</h4>
            </div>

            <div data-aos={`fade-down`} className='border-4 shadow-2xl h-[90%] rounded-sm borde-inset p-7  flex justify-center flex-col items-center gap-y-10'>
              <Image src='/icon/seo.png' alt="Google" width={100} height={100} ></Image>
              <h2 className='titulo capitalize font-bold text-lg '>Seo</h2>
              <h4 className='w-11/12 subtitulo text-center'>¡Eleva tu negocio con nuestro servicio de SEO para Google! Optimizamos tu sitio con palabras clave relevantes, mejorando tu posición en los resultados de búsqueda y atrayendo más clientes. ¡Contáctanos hoy!</h4>
            </div>


          </div>
        </div>


        {/* SEGUNDO SECCION */}

        <div id="servicio" className='text-white pb-3 relative h-full lg:h-screen'>

        <Image src="/logo/logo6.png" className='absolute bottom-14' alt="start-tech  logo" width={250} height={1}></Image>

          <div className='flex justify-center z-[2] relative pt-7'>
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
          </div>

          <div className='flex h-4/5 mt-10 lg:flex-row flex-col items-center gap-y-9 lg:gap-x-4 z-[2] relative px-5 sm:px-11 w-full'>

            <div data-aos="flip-left" className='border-4 lg:pt-5  shadow-2xl relative h-[80%] rounded-sm borde-outset py-14 lg:p-3  flex justify-center flex-col items-center gap-y-4  '>
              <Image className='-translate-y-9 top-0 absolute' src='icon/angular.svg' alt="angular" width={70} height={70} ></Image>
              <h2 className='titulo capitalize text-lg font-bold' >AngularJS</h2>
              <h4 className='subtitulo lg:w-5/6 w-4/5 sm:w-4/6 leading-10 lg:text-base md:text-sm text-center'>El revolucionario framework de JavaScript, creado por Google, que te permite desarrollar aplicaciones web dinámicas. ¡Impulsa tu productividad y lleva tus proyectos web al siguiente nivel con AngularJS!</h4>
            </div>

            <div data-aos="flip-right" className='border-4 lg:pt-5  relative shadow-2xl h-[80%] rounded-sm borde-outset py-14 lg:p-3   flex justify-center flex-col items-center gap-y-4 '>
              <Image className='-translate-y-9 top-0 absolute' src='icon/react.svg' alt="react" width={70} height={70} ></Image>
              <h2 className='titulo capitalize text-lg font-bold'>ReactJS</h2>
              <h4 className='lg:w-5/6 w-4/5 sm:w-4/6 leading-10  subtitulo lg:text-base md:text-sm text-center'>¡Impulsa tus interfaces de usuario con ReactJS! Creado por Facebook, es la solución perfecta para desarrollar aplicaciones en una sola página.</h4>
            </div>

            <div data-aos="flip-left" className='border-4 lg:pt-5  relative shadow-2xl h-[80%] rounded-sm borde-outset py-14 lg:p-3   flex justify-center flex-col items-center gap-y-4 '>
              <Image className='-translate-y-9 top-0 absolute' src='icon/next.svg' alt="next" width={70} height={70} ></Image>
              <h2 className='titulo capitalize text-lg font-bold'>NextJS</h2>
              <h4 className='lg:w-5/6 w-4/5 sm:w-4/6 leading-10  subtitulo lg:text-base md:text-sm text-center'> ¡Lleva tu React al siguiente nivel con NextJS! Construye sitios web estáticos y aplicaciones web supercargadas.</h4>
            </div>

            <div data-aos="flip-down" className='border-4 lg:pt-5  relative shadow-2xl h-[80%] rounded-sm borde-outset py-14 lg:p-3   flex justify-center flex-col items-center gap-y-4 '>
              <Image className='-translate-y-9 top-0 absolute' src='icon/wordpress.svg' alt="wordpress" width={70} height={70} ></Image>
              <h2 className='titulo capitalize text-lg font-bold'>WordPress</h2>
              <h4 className='lg:w-5/6 w-4/5 sm:w-4/6 leading-10  subtitulo lg:text-base md:text-sm text-center'>¡Crea tu sitio web con WordPress! Es un CMS gratuito y de código abierto, ideal para blogs, tiendas online y mucho más.</h4>
            </div>


          </div>

        </div>

      </section>

      {/* TERCERA SECCION */}

      <section id="servicio" style={{ background: `url("image/diseno.jpg")`, backgroundSize: ' 100% 100%' }} className='text-white pb-3  relative h-full lg:h-screen'>

        <div className='h-full lg:h-screen w-full absolute fondoColor'></div>
        <div className='h-full  w-full rotate-180  absolute fondoColor-black'></div>
        <Image src="/logo/logo6.png" className='absolute bottom-14' alt="start-tech  logo" width={250} height={1}></Image>
        
        <div className='flex justify-center z-[2] relative pt-7'>
          <h1 className='titulo capitalize text-xl sm:text-3xl font-semibold'>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Las herramientas de diseño")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
        </div>

        <div className='flex h-4/5 mt-10 lg:flex-row flex-col items-center gap-y-9 lg:gap-x-4 z-[2] relative px-5 sm:px-11 w-full'>

          <div data-aos="flip-left" className='border-4 lg:pt-5  shadow-2xl relative h-[80%] rounded-sm borde-outset py-14 lg:p-3  flex justify-around flex-col items-center gap-y-4  '>
            <Image className='-translate-y-9 top-0 absolute' src='icon/canva.svg' alt="angular" width={70} height={70} ></Image>
            <h2 className='subtitulo_diseno capitalize text-6xl text_shadow_cv font-bold'>Canva</h2>
            <h4 className='subtitulo lg:w-5/6 w-4/5 sm:w-4/6 leading-10 lg:text-base md:text-sm text-center'> es una herramienta en línea que permite diseñar de manera sencilla y rápida todo tipo de contenido gráfico, desde contenido para redes sociales hasta presentaciones, pósters, folletos y tarjetas de invitación.</h4>
          </div>

          <div data-aos="flip-down" className='border-4 lg:pt-5  relative shadow-2xl h-[80%] rounded-sm borde-outset py-14 lg:p-3   flex justify-around flex-col items-center gap-y-4 '>
            <Image className='-translate-y-9 top-0 absolute' src='icon/ps.svg' alt="wordpress" width={70} height={70} ></Image>
            <h2 className='subtitulo_diseno text_shadow_ps text-6xl capitalize  font-bold' >Photoshop</h2>
            <h4 className='lg:w-5/6 w-4/5 sm:w-4/6 leading-10  subtitulo lg:text-base md:text-sm text-center'>es un programa informático de edición de imagen desarrollado por Adobe Systems. Es la herramienta más completa de retoque fotográfico y es ampliamente utilizada en el diseño gráfico, diseño web, 3D y fotografía.</h4>
          </div>


        </div>

      </section>

      {/* CUARTA SECCION */}

      <section style={{ background: `url("image/galaxia.png")` }} id='nosotros' className='h-full pb-7 sizeImage relative'>
        <div className='h-full  w-full   absolute fondoColor-black'></div>

        <div className='flex justify-center z-[2] text-white relative pt-7'>
          <h1 className='titulo capitalize text-xl sm:text-3xl font-semibold'>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Sobre nosotros")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
        </div>

        {/* <div className='flex flex-col lg:flex-row w-full top-0 h-full absolute'> */}

        <div className='h-[60vh] lg:h-[80vh] flex flex-col items-center justify-center w-full '>

          <div data-aos="zoom-in-up" className="glass sizeImage  relative z-[3] flex text-justify justify-center items-center">

            <div className="z-10 h-4/5 w-11/12  flex justify-center items-center">
              <h3 className="subtitulo  leading-loose text-white font-bold text-xs sm:text-base capitalize">
                <Typewriter
                  options={{
                    loop: false,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`¡Bienvenido a su solución integral para el desarrollo web y el diseño gráfico!
          En Start - Tech, nos enorgullece ofrecer una amplia gama de servicios de programación en múltiples lenguajes y framework, como a AngularJS, ReactJS, NextJS, WordPress, y más. Nuestro equipo de expertos programadores está equipado con las habilidades y la experiencia necesarias para llevar sus ideas a la vida digital.
          también ofrecemos soluciones de diseño gráfico de alta calidad. Ya sea que necesite un logotipo llamativo, un diseño de interfaz de usuario intuitivo o ilustraciones personalizadas, nuestro equipo de diseñadores gráficos talentosos está listo para superar sus expectativas.
          `)
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </h3>
            </div>

          </div>
        </div>


      </section >

      <Footer />


    </>
  )
}
