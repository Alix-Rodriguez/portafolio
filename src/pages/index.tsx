import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Menu } from '../components/Menu';
import { Slider } from '../components/Slider';
import Typewriter from 'typewriter-effect';


const inter = Inter({ subsets: ['latin'] })


const gradiant = {
  background: 'linear-gradient(90deg, rgba(32,154,220,1) 17%, rgba(12,71,186,1) 34%, rgba(83,186,241,1) 57%, rgba(12,71,186,1) 85%)'
}


export default function Home() {
  return (
    <>
      <Menu />
      <Slider />


      {/* PRIMERA SECCION */}
      <section style={gradiant} className='text-white h-full lg:h-screen'>
      

        <div className='flex justify-center pt-7'>
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

        <div className='flex flex-col py-5 lg:flex-row gap-y-9 h-4/5 items-center lg:gap-x-4 px-5 sm:px-11 w-full'>

          <div className='border-4 shadow-2xl h-[90%] rounded-sm borde-inset p-7  flex justify-center flex-col items-center gap-y-10'>
            <Image src='icon/compu.svg' alt="Computadora" width={70} height={70} ></Image>
            <h2 className='titulo capitalize font-bold text-lg ' >Desarrollo web</h2>
            <h4 className='subtitulo w-11/12 text-center'>Nuestro equipo de trabajo puede desarrollar desde páginas tipo catálogo, las cuales muestran sus productos de una forma sencilla y efectiva, hasta sitios web en varios idiomas, todo de acuerdo con sus necesidades.</h4>
          </div>

          <div className='border-4 shadow-2xl h-[90%] rounded-sm borde-inset p-7  flex justify-center flex-col items-center gap-y-10'>
            <Image src='icon/diseño.svg' alt="Diseño" width={70} height={70} ></Image>
            <h2 className='titulo capitalize font-bold text-lg '>Diseño a la medida</h2>
            <h4 className='w-11/12 subtitulo text-center'>¡Descubre el poder de un buen diseño web con nuestro servicio! En nuestro sitio, transformamos tus ideas en realidad digital. Nos especializamos en crear sitios web atractivos, intuitivos y de alto rendimiento que capturan la esencia de tu negocio y conectan con tus clientes.</h4>
          </div>

          <div className='border-4 shadow-2xl h-[90%] rounded-sm borde-inset p-7  flex justify-center flex-col items-center gap-y-10'>
            <Image src='icon/google.svg' alt="Google" width={70} height={70} ></Image>
            <h2 className='titulo capitalize font-bold text-lg '>Seo</h2>
            <h4 className='w-11/12 subtitulo text-center'>¡Eleva tu negocio con nuestro servicio de SEO para Google! Optimizamos tu sitio con palabras clave relevantes, mejorando tu posición en los resultados de búsqueda y atrayendo más clientes. ¡Contáctanos hoy!</h4>
          </div>


        </div>

      </section>


      {/* SEGUNDO SECCION */}

      <section style={{ background: `url("image/galaxia.png")` }} className='text-white pb-3 relative h-full lg:h-screen'>

        <div className='h-full lg:h-screen w-full absolute fondoColor'></div>

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

          <div className='border-4 lg:pt-5  shadow-2xl relative h-[80%] rounded-sm borde-outset py-14 lg:p-3  flex justify-center flex-col items-center gap-y-4  '>
            <Image className='-translate-y-9 top-0 absolute' src='icon/angular.svg' alt="angular" width={70} height={70} ></Image>
            <h2 className='titulo capitalize text-lg font-bold' >AngularJS</h2>
            <h4 className='subtitulo lg:w-5/6 w-4/5 sm:w-4/6 leading-10 lg:text-base md:text-sm text-center'>Nuestro equipo de trabajo puede desarrollar desde páginas tipo catálogo, las cuales muestran sus productos de una forma sencilla y efectiva, hasta sitios web en varios idiomas, todo de acuerdo con sus necesidades.</h4>
          </div>

          <div className='border-4 lg:pt-5  relative shadow-2xl h-[80%] rounded-sm borde-outset py-14 lg:p-3   flex justify-center flex-col items-center gap-y-4 '>
            <Image className='-translate-y-9 top-0 absolute' src='icon/react.svg' alt="react" width={70} height={70} ></Image>
            <h2 className='titulo capitalize text-lg font-bold'>ReactJS</h2>
            <h4 className='lg:w-5/6 w-4/5 sm:w-4/6 leading-10  subtitulo lg:text-base md:text-sm text-center'>¡Descubre el poder de un buen diseño web con nuestro servicio! En nuestro sitio, transformamos tus ideas en realidad digital. Nos especializamos en crear sitios web atractivos, intuitivos y de alto rendimiento que capturan la esencia de tu negocio y conectan con tus clientes.</h4>
          </div>

          <div className='border-4 lg:pt-5  relative shadow-2xl h-[80%] rounded-sm borde-outset py-14 lg:p-3   flex justify-center flex-col items-center gap-y-4 '>
            <Image className='-translate-y-9 top-0 absolute' src='icon/next.svg' alt="next" width={70} height={70} ></Image>
            <h2 className='titulo capitalize text-lg font-bold'>NextJS</h2>
            <h4 className='lg:w-5/6 w-4/5 sm:w-4/6 leading-10  subtitulo lg:text-base md:text-sm text-center'>¡Eleva tu negocio con nuestro servicio de SEO para Google! Optimizamos tu sitio con palabras clave relevantes, mejorando tu posición en los resultados de búsqueda y atrayendo más clientes. ¡Contáctanos hoy!</h4>
          </div>

          <div className='border-4 lg:pt-5  relative shadow-2xl h-[80%] rounded-sm borde-outset py-14 lg:p-3   flex justify-center flex-col items-center gap-y-4 '>
            <Image className='-translate-y-9 top-0 absolute' src='icon/wordpress.svg' alt="wordpress" width={70} height={70} ></Image>
            <h2 className='titulo capitalize text-lg font-bold'>WordPress</h2>
            <h4 className='lg:w-5/6 w-4/5 sm:w-4/6 leading-10  subtitulo lg:text-base md:text-sm text-center'>¡Eleva tu negocio con nuestro servicio de SEO para Google! Optimizamos tu sitio con palabras clave relevantes, mejorando tu posición en los resultados de búsqueda y atrayendo más clientes. ¡Contáctanos hoy!</h4>
          </div>


        </div>

      </section>

      {/* TERCERA SECCION */}

      <section className='h-full lg:h-screen relative'>

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

        <div className='flex flex-col lg:flex-row w-full top-0 h-[76rem] lg:h-full absolute'>

          <div style={{ background: `url("image/flayer.jpg")` }} className='h-screen w-full sizeImage lg:w-2/4'>

          </div>

          <div style={{ background: `url("image/nosotros.jpg")` }} className='h-screen flex items-center justify-center sizeImage bg-no-repeat w-full lg:w-2/4'>

            <div className='h-screen w-full lg:w-2/4 absolute fondoColor-black'></div>

            <div className="glass flex text-justify justify-center items-center">

              <div className="z-10 h-4/5 w-11/12  flex justify-center items-center">
                <h3 className="subtitulo leading-loose text-white font-bold text-xs sm:text-base capitalize">
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

          {/* creemos en la creación de soluciones digitales que no solo cumplen, sino que superan las expectativas de nuestros clientes. Ya sea que esté buscando desarrollar un sitio web desde cero, rediseñar un sitio web existente o crear gráficos impresionantes, Start - Tech es su socio confiable. */}

        </div>

      </section>

    </>
  )
}
