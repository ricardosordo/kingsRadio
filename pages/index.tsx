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
//images
import logoKings from "../assets/logoKings.svg";
import miyoReyes from "../assets/miyo.svg";
import cory from "../assets/cory.svg";
import tibu from "../assets/tibu.svg";
import mikeAguilar from "../assets/mikeAguilar.svg";
import facebookLogo from "../assets/facebook.svg";
import jaguares from "../assets/jaguares.svg";
import tlalne from "../assets/tlalne.svg";
import carla from "../assets/carlaWedding.svg";
import spotify from "../assets/spotify.svg";
import tiktok from "../assets/tiktok.svg";
//testing
import tecate from "../assets/tecate.jpeg";

export default function Home() {
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <>
      <Head>
        <title>Kings Radio - Lo que quieres escuchar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`row ${styles.bg_header} d-flex align-items-baseline`}>
        <div className={`row ${styles.nav}`}>
        <div className="col-sm-1 col-xs-12">
          <Image src={logoKings} alt="Logo Kings Radio" />
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
          <Image
            src={miyoReyes}
            width={350}
            height={350}
            alt="Foto de Locutor"
          />
        </div>
        <div className={`col-lg-6 col-md-12 ${styles.billboard}`}>
          <p>Botones de Reproductor</p>
          <p className={styles.billboard_title}>
            Historias y Leyendas de México
          </p>
          <div className={`row ${styles.billboard_social}`}>
            <div className="col-8">
              <Image
                src={spotify}
                width={40}
                height={40}
                alt="Logo Facebook"
              />
              <Image
                src={facebookLogo}
                width={40}
                height={40}
                alt="Logo Facebook"
              />
              <Image
                src={tiktok}
                width={40}
                height={40}
                alt="Logo Facebook"
              />
            </div>
          </div>
          <p className={styles.billboard_broadcaster}>Con Miyo Reyes</p>
        </div>
      </div>
      </div>
      <div className="row">
        <div className={`col-12 ${styles.events_title}`}>
          <h2>Eventos</h2>
          <h3>Experiencias que recomendamos no perderte</h3>
        </div>
        <div className={`col-12 ${styles.events_carousel}`}>
          <Carousel responsive={responsive}>
            <div>
              <CardCarousel eventPic={tecate} />
            </div>
            <div>
              <CardCarousel eventPic={tecate} />
            </div>
            <div>
              <CardCarousel eventPic={tecate} />
            </div>
            <div>
              <CardCarousel eventPic={tecate} />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="row">
        <div className={`col-12 ${styles.programs}`}>
          <h2>Programas</h2>
          <h3>Los programa más escuchados de la radio de habla hispana</h3>
        </div>
        <div className={styles.programs_bg}>
          <div className={styles.programs_section}>
            <CardBroadCaster
              broadcasterPic={cory}
              title={"Fresas con chile"}
              color={pink}
              broadcaster={"con Cory Vicaña"}
              copy={"Moda y Chismes de la Famososo"}
              days={"Lunes y Martes"}
              hours={"9:00am - 11:00am"}
            />
            <CardBroadCaster
              broadcasterPic={miyoReyes}
              title={"Historias y Leyendas de Mexico"}
              color={black}
              broadcaster={"con Miyo Reyes"}
              copy={"Dos horas de terror y misterio"}
              days={"Martes y Viernes"}
              hours={"10:00am - 12:00am"}
            />
            <CardBroadCaster
              broadcasterPic={tibu}
              title={"Noche de Show"}
              color={purple}
              broadcaster={"con El Tibu"}
              copy={"Noches divertidas y coquetas"}
              days={"Jueves y Viernes"}
              hours={"12:00pm - 15:00pm"}
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
              width={420}
              height={420}
              alt="Logo Facebook"
            />
            <p className={styles.djSection_content_name}>Mike Aguilar</p>
            <p className={styles.djSection_content_title}>Factor Cumbia</p>
            <p className={styles.djSection_content_copy}>
              Los programa más escuchados de la radio de habla hispana
            </p>
          </div>
          <div className={`col-lg-6 col-md-12 ${styles.djSection_content}`}>
            <Image
              src={mikeAguilar}
              width={420}
              height={420}
              alt="Logo Facebook"
            />
            <p className={styles.djSection_content_name}>Gildardo Gonzalez</p>
            <p className={styles.djSection_content_title}>Studio 54</p>
            <p className={styles.djSection_content_copy}>
              Los programa más escuchados de la radio de habla hispana
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
              width={220}
              height={220}
              alt="Logo Escuela de Tae Kwon Do Jaguares"
            />
        </div>
        <div className={`col-lg-4 col-md-12 ${styles.sponsors_logo}`}>
        <Image
              src={tlalne}
              width={230}
              height={230}
              alt="Logo Facebook"
            />
        </div>
        <div className={`col-lg-4 col-md-12 ${styles.sponsors_logo}`}>
        <Image
              src={carla }
              width={230}
              height={230}
              alt="Logo Facebook"
            />
        </div>
        </div>
      </div>
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
            <p>Todos los derechos reservados Kings Radio Media 2022</p>
          </div>
        </div>
      </footer>
    </>
  );
}
