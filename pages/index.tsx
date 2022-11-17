import React, { useState, useEffect } from 'react';
import Head from "next/head";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "../helpers/CardCarousel";
import CardBroadCaster from "../helpers/CardBroadCaster";
import { dataFromSource } from '../pages/api/Api'
//images
import logoKings from "../assets/logoKings.svg";
import miyoReyes from "../assets/miyo.svg";
import cory from "../assets/cory.svg";
import mayor from "../assets/mayor.svg";
import tibu from "../assets/tibu.svg";
import mikeAguilar from "../assets/mikeAguilar.svg";
import gildardo from "../assets/gildardo.svg";
import facebookLogo from "../assets/facebook.svg";
import jaguares from "../assets/jaguares.svg";
import tlalne from "../assets/tlalne.svg";
import carla from "../assets/carlaWedding.svg";
import spotify from "../assets/spotify.svg";
import tiktok from "../assets/tiktok.svg";
import daft from "../assets/daft.svg";
//icons
import whatsapp from "../assets/whatsapp.svg"
//events
import rocky from "../assets/rocky.svg";
import festival from "../assets/festivalXalapa.svg";
import fortaleza from "../assets/fortaleza.svg"


type DjImage = {
  art: string,
  bitrate:string,
  djprofile: string,
  djusername: string,
  listeners: string,
  title: string,
  ulisteners: string,
}


export default function Home() {

  const [data, setData] = useState<DjImage>({
    art: '',
    bitrate:'',
    djprofile: '',
    djusername: '',
    listeners: '',
    title: '',
    ulisteners: '',
  });

  
 
  const pink = {
    background: "linear-gradient(109.93deg, #FF006E -8.86%, #3C05B1 109.09%)",
  };
  const black = {
    background: "linear-gradient(108.81deg, #6637EC -20.88%, #110338 121.48%)",
  };
  const purple = {
    background:
      "linear-gradient(110.39deg, #3E0AD1 -0.21%, #3674DE 71.94%, #06E3D6 113.27%)",
  };
  const orange = {
    background:
      "linear-gradient(109.01deg, #F3C110 -11.01%, #D36528 62.56%, #580808 112.74%)",
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  const handlerImage = async () => {
    try {
      const response = await dataFromSource();
      if(response){
        setData(response);
      }
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    handlerImage();
  }, [])
  
  return (
    <>
      <Head>
  
        <link rel="icon" href="/favicon.ico" />
        
        <title>Kings Radio - Lo que quieres escuchar</title>
        <meta name="title" content="Kings Radio - Lo que quieres escuchar"/>
        <meta name="description" content="La radio impactante con el mejor entretenimiento para México y Latinoamérica."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://kingsradiofm.com/" />
        <meta property="og:title" content="Kings Radio - Lo que quieres escuchar" />
        <meta property="og:description" content="La radio impactante con el mejor entretenimiento para México y Latinoamérica." />
        <meta property="og:image" content="/kingsOg.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kingsradiofm.com/" />
        <meta property="twitter:title" content="Kings Radio - Lo que quieres escuchar" />
        <meta property="twitter:description" content="La radio impactante con el mejor entretenimiento para México y Latinoamérica." />
        <meta property="twitter:image" content="/kingsOg.svg" />
      </Head>

      <div className={`row ${styles.bg_header} d-flex align-items-baseline`}>
        <div className={`row ${styles.nav}`}>
        <div className={`col-sm-1 col-xs-12`}>
          <Image 
          src={logoKings} 
          alt="Logo Kings Radio" 
          />
        </div>
        <div className={`col-sm-10 col-xs-12 ${styles.fonts_nav}`}>
          <Link href="/">Nosotros</Link>
          <Link href="/">Contacto</Link>
          <Link href="/">Ventas</Link>
        </div>
      </div>

      <div className={`row ${styles.header}`}>
        <div className="col-12">
          <h1>Ahora sonando</h1>
        </div>
      </div>
      <div className={`row ${styles.card_playList}`}>
        <div className={`col-lg-6 col-md-12  ${styles.broadcasterPic}`}>
          { data.djusername === "MIYOREYES" ?
          <Image
            src={miyoReyes}
            width={350}
            height={350}
            alt="Miyo Locutor"
          />
         : data.djusername === "TIBU" ?
            <Image
            src={tibu}
            width={350}
            height={350}
            alt="Tibu Locutor"
          />
          : data.djusername === "MAYOR" ?
          <Image
          src={mayor}
          width={350}
          height={350}
          alt="El Mayor Locutor"
        /> 
        : data.djusername === "MIGUELAGUILERA" ?
            <Image
            src={mikeAguilar}
            width={350}
            height={350}
            alt="Mike DJ"
          />
          : data.djusername === "GILDARDOGONZALEZ" ?
            <Image
            src={gildardo}
            width={350}
            height={350}
            alt="Gildardo DJ"
          />  
          :
          <Image
          src={daft}
          width={350}
          height={350}
          alt="Programación General"
        />
        }
        </div>
        <div className={`col-lg-6 col-md-12 ${styles.billboard}`}>
        <iframe className={`${styles.billboard_player}`} src="https://servidorrprivado.com/mp3/kingsrad/?t=default"></iframe>
        
        
        { data.djusername === "MIYOREYES" ?
          <p className={styles.billboard_title}>
            Historias, Leyendas de México y el Mundo
          </p>
          : data.djusername === "TIBU" ?
          <p className={styles.billboard_title}>
            Noches de Show
          </p>
          : data.djusername === "MAYOR" ?
          <p className={styles.billboard_title}>
            Crónicas Deportivas
          </p>
           : data.djusername === "MIGUELAGUILERA" ?
           <p className={styles.billboard_title}>
             Factor Cumbia
           </p>
            : data.djusername === "GILDARDOGONZALEZ" ?
            <p className={styles.billboard_title}>
              Studio 54
            </p>
             :
            <p className={styles.billboard_title}>
              Lo que quieres escuchar
            </p>
          } 
          <div className={`row ${styles.billboard_social}`}>
            <div className="col-8">
              <Link href="https://open.spotify.com/show/4MuzSmGbyP6hBR6U6od2p4?si=E-ksvfz4RKi8Mv58fkAATQ">
              <Image
                src={spotify}
                width={40}
                height={40}
                alt="Spotify icon"
              />
              </Link>
              <Link href="https://www.facebook.com/miyoreyes16">
              <Image
                src={facebookLogo}
                width={40}
                height={40}
                alt="Facebook icon"
              />
            </Link>
            <Link href="https://www.tiktok.com/@miyoreyesoficial?fbclid=IwAR0gfQ4Vf5u0Osxs7c2r7hmWmO5pSUCuTypzPp_m8WcrHlNkMX_A5q3lOj4">
              <Image
                src={tiktok}
                width={40}
                height={40}
                alt="Logo Facebook"
              />
            </Link>
            </div>
          </div>
          { data.djusername === "MIYOREYES" ?
          <p className={styles.billboard_broadcaster}>
            Con Miyo Reyes
          </p>
          : data.djusername === "TIBU" ?
          <p className={styles.billboard_broadcaster}>
            Con El Tibu
          </p>
           : data.djusername === "MAYOR" ?
           <p className={styles.billboard_broadcaster}>
             Con El Mayor
           </p>
           : data.djusername === "MIGUELAGUILERA" ?
           <p className={styles.billboard_broadcaster}>
             Con DJ Mike Aguilera
           </p>
            : data.djusername === "GILDARDOGONZALEZ" ?
            <p className={styles.billboard_broadcaster}>
                Con DJ Gildardo González
            </p>
             :
            <p className={styles.billboard_broadcaster}>
              Programación Diaria
            </p>
          } 
        </div>
      </div>
      </div>
      <div className="row">
        <div className={`col-12 ${styles.events_title}`}>
          <h2>Eventos</h2>
          <h3>Experiencias que recomendamos no perderte</h3>
        </div>
        <div className={`col-12 ${styles.events_carousel}`}>
          <Carousel 
          arrows={false} 
          showDots={true}
          swipeable={true}
          responsive={responsive}>
            <div>
              <CardCarousel 
              title={'Festival Internacional Xalapa y su Cultura'} 
              descripion={'Expositores de productos locales'} 
              date={'Del 25 al 27 de noviembre, Parque Juaréz'}
              link={'https://egobierno.xalapa.gob.mx/festival_cultura/'} 
              eventPic={festival} />
            </div>
            <div>
            <CardCarousel 
              title={'Transilvanos en Xalapa 4'} 
              descripion={'Función interactiva de la película The Rocky Horror Picture Show.'} 
              date={'Sábado 19 de noviembre de 2022 a las 20:00 hrs'}
              link={'https://www.facebook.com/butacafantastica'} 
              eventPic={rocky} />
            </div>
            <div>
            <CardCarousel 
              title={'Visita nocturna Fortaleza de San Carlos'} 
              descripion={'Un nuevo scouting se aproxima en un lugar lleno de misterio e historia'} 
              date={'Proximamente'}
              link={''} 
              eventPic={fortaleza} />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="row">
        <div className={`col-12 ${styles.programs}`}>
          <h2>Programas</h2>
          <h3>Los más escuchados de la radio de habla hispana</h3>
        </div>
        <div className={styles.programs_bg}>
          <div className={styles.programs_section}>
            <CardBroadCaster
              broadcasterPic={cory}
              title={"Fresas con chile"}
              color={pink}
              broadcaster={"con Cory Villicaña"}
              copy={"Espectáculos, sociales y lo que ocurre en el mundo de la élite."}
              days={"Viernes"}
              hours={"5:50pm - 7:00pm"}
            />
              <CardBroadCaster
              broadcasterPic={mayor}
              title={"Crónicas Deportivas"}
              color={orange}
              broadcaster={"con El Mayor"}
              copy={"Noticias de deportes alrededor del mundo con la mejor narrativa."}
              days={"Martes y Viernes"}
              hours={"9:00pm - 10:00pm"}
            />
            <CardBroadCaster
              broadcasterPic={miyoReyes}
              title={"Historias, Leyendas de México y el Mundo"}
              color={black}
              broadcaster={"con Miyo Reyes"}
              copy={"Para los amantes de los temas paranormales, misterios sin resolver, entidades y rituales."}
              days={"Miércoles y Viernes"}
              hours={"9:00pm - 11:00pm"}
            />
            <CardBroadCaster
              broadcasterPic={tibu}
              title={"Noche de Show"}
              color={purple}
              broadcaster={"con El Tibu"}
              copy={"Humor jarocho, Cine, Horoscopos y sesiones deportivas con invitados los martes."}
              days={"Jueves"}
              hours={"9:00pm - 12:00pm"}
            />
          </div>
        </div>
        <div className={`row ${styles.djSection_bg}`}>
          <div className={`col-12 ${styles.djSection_title}`}>
            <h2>Los mejores DJs</h2>
            <h3>Las tornamesas más poderosas de la radio</h3>
          </div>
          <div className={`col-lg-6 col-md-12 ${styles.djSection_content}`}>
            <Image
              src={mikeAguilar}
              alt="Logo Facebook"
            />
            <p className={styles.djSection_content_name}>Mike Aguilar</p>
            <p className={styles.djSection_content_title}>Factor Cumbia</p>
            <p className={styles.djSection_content_copy}>
              Lunes y Miércoles de 5:00 a 7:00 pm
            </p>
            <p className={styles.djSection_content_copy}>
              Sintoniza los ritmos más movidos desde el corazón de la cumbia latina.
            </p>
          </div>
          <div className={`col-lg-6 col-md-12 ${styles.djSection_content}`}>
            <Image
              src={gildardo}
              alt="Logo Facebook"
              style={{'marginBottom': '2rem'}}
            />
            <p className={styles.djSection_content_name}>DJ Gildardo González</p>
            <p className={styles.djSection_content_title}>Studio 54</p>
            <p className={styles.djSection_content_copy}>
              Miércoles de 7:00 a 9:00 pm
            </p>
            <p className={styles.djSection_content_title}>Viernes Loko</p>
            <p className={styles.djSection_content_copy}>
              Viernes de 7:00 a 9:00 pm
            </p>
            <p className={styles.djSection_content_copy}>
            Enciende la pista de baile donde te encuentres.
            </p>
          </div>
        </div>
        <div className={`row ${styles.sponsors_content}`}>
          <div className={`col-12 ${styles.sponsors_title}`}>
            <h2>Patrocinadores</h2>
          </div>
       
        <div className={`col-lg-4 col-md-12 ${styles.sponsors_logo}`}>
        <Image
              src={jaguares}
              alt="Logo Escuela de Tae Kwon Do Jaguares"
            />
        </div>
        <div className={`col-lg-4 col-md-12 ${styles.sponsors_logo}`}>
        <Image
              src={tlalne}
              alt="Municipio de Tlalnehuayocan"
            />
        </div>
        <div className={`col-lg-4 col-md-12 ${styles.sponsors_logo}`}>
        <Image
              src={carla}
              alt="Carla Marquez Wedding Planner"
            />
        </div>
        </div>
      </div>

      <Link href="https://wa.link/h6n29v"  className={`${styles.whatsapp}`} 
      target="_blank" >
      <Image 
      height={36}
      width={36}
      style={{'marginTop': '7px'}}
      src={whatsapp} alt="logo whatsapp" />
      </Link>
            
      <footer className="row">
        <div className={styles.footer_content}>
          <div className="col-12">
          <ul>
            <Link href="/">Inicio</Link>
            <Link href="/">Nosotros</Link>
            <Link href="/">Contacto</Link>
            <Link href="/">Ventas</Link>
          </ul>    
          </div>
          <div className={`${styles.footer_copyright}`}>
            <p>Todos los derechos reservados Kings Radio FM 2022</p>
          </div>
        </div>
      </footer>
    </>
  );
}
