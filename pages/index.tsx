import React, { useState, useEffect } from "react";
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
import { dataFromSource, dataFromSpotify } from "../pages/api/Api";
//images
import logoKings from "../assets/logoKings.svg";
import miyoReyes from "../assets/miyo.svg";
import cory from "../assets/cory.svg";
import roberto from "../assets/roberto.svg";
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
import whatsapp from "../assets/whatsapp.svg";
//events
import rocky from "../assets/rocky.svg";
import festival from "../assets/festivalXalapa.svg";
import fortaleza from "../assets/fortaleza.svg";

type DjImage = {
  art: string;
  bitrate: string;
  djprofile: string;
  djusername: string;
  listeners: string;
  title: string;
  ulisteners: string;
};

export default function Home() {
  const [data, setData] = useState<DjImage>({
    art: "",
    bitrate: "",
    djprofile: "",
    djusername: "",
    listeners: "",
    title: "",
    ulisteners: "",
  });

  const [spotifyData, setSpotifyData] = useState({
    list: []
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

  const green = {
    background: "linear-gradient(133.92deg, #43E3BD -29.14%, #0E2766 167.13%)",
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

  useEffect(() => {
    handlerImage();
    handlerSpotifyList();
  }, []);

  const handlerImage = async () => {
    try {
      const response = await dataFromSource();
      if (response) {
        setData(response);
      }
    } catch (error) {
      return error;
    }
  };

  const handlerSpotifyList = async () => {
    try {
      const response: any = await dataFromSpotify();
      if (response) {
        setSpotifyData(response.props);
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <title>Kings Radio - Lo que quieres escuchar</title>
        <meta name="title" content="Kings Radio - Lo que quieres escuchar" />
        <meta
          name="description"
          content="La radio impactante con el mejor entretenimiento para M??xico y Latinoam??rica."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingsradiofm.com/" />
        <meta
          property="og:title"
          content="Kings Radio - Lo que quieres escuchar"
        />
        <meta
          property="og:description"
          content="La radio impactante con el mejor entretenimiento para M??xico y Latinoam??rica."
        />
        <meta property="og:image" content="/kingshare.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kingsradiofm.com/" />
        <meta
          property="twitter:title"
          content="Kings Radio - Lo que quieres escuchar"
        />
        <meta
          property="twitter:description"
          content="La radio impactante con el mejor entretenimiento para M??xico y Latinoam??rica."
        />
        <meta property="twitter:image" content="/kingshare.png" />
      </Head>

      <div className={`row ${styles.bg_header} d-flex align-items-baseline`}>
        <div className={`row ${styles.nav}`}>
          <div className={`col-sm-1 col-xs-12`}>
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
            {data.djusername === "MIYOREYES" ? (
              <Image
                src={miyoReyes}
                width={350}
                height={350}
                alt="Miyo Locutor"
              />
            ) : data.djusername === "TIBU" ? (
              <Image src={tibu} width={350} height={350} alt="Tibu Locutor" />
            ) : data.djusername === "ROBERTO" ? (
              <Image
                src={roberto}
                width={350}
                height={350}
                alt="Roberto Locutor"
              />
            ) : data.djusername === "MAYOR" ? (
              <Image
                src={mayor}
                width={350}
                height={350}
                alt="El Mayor Locutor"
              />
            ) : data.djusername === "MIGUELAGUILERA" ? (
              <Image src={mikeAguilar} width={350} height={350} alt="Mike DJ" />
            ) : data.djusername === "GILDARDOGONZALEZ" ? (
              <Image
                src={gildardo}
                width={350}
                height={350}
                alt="Gildardo DJ"
              />
            ) : (
              <Image
                src={daft}
                width={350}
                height={350}
                alt="Programaci??n General"
              />
            )}
          </div>
          <div className={`col-lg-6 col-md-12 ${styles.billboard}`}>

          <div className={`col-lg-6 col-md-12 ${styles.billboard_player}`}>
          <audio id="stream" controls preload="none">
            <source src="https://sp2.servidorrprivado.com/8298/stream" type="audio/mpeg" />
          </audio>
          </div>
            {data.djusername === "MIYOREYES" ? (
              <p className={styles.billboard_title}>
                Historias, Leyendas de M??xico y el Mundo
              </p>
            ) : data.djusername === "TIBU" ? (
              <p className={styles.billboard_title}>Noches de Show</p>
            ) : data.djusername === "ROBERTO" ? (
              <p className={styles.billboard_title}>Innovation Time</p>
            ) : data.djusername === "MAYOR" ? (
              <p className={styles.billboard_title}>Cr??nicas Deportivas</p>
            ) : data.djusername === "MIGUELAGUILERA" ? (
              <p className={styles.billboard_title}>Factor Cumbia</p>
            ) : data.djusername === "GILDARDOGONZALEZ" ? (
              <p className={styles.billboard_title}>Studio 54</p>
            ) : (
              <p className={styles.billboard_title}>Lo que quieres escuchar</p>
            )}
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
                <Link href="https://www.facebook.com/FMKingsRadio">
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
            {data.djusername === "MIYOREYES" ? (
              <p className={styles.billboard_broadcaster}>Con Miyo Reyes</p>
            ) : data.djusername === "TIBU" ? (
              <p className={styles.billboard_broadcaster}>Con El Tibu</p>
            ) : data.djusername === "ROBERTO" ? (
              <p className={styles.billboard_broadcaster}>Con Roberto Castro</p>
            ) : data.djusername === "MAYOR" ? (
              <p className={styles.billboard_broadcaster}>Con El Mayor</p>
            ) : data.djusername === "MIGUELAGUILERA" ? (
              <p className={styles.billboard_broadcaster}>
                Con DJ Mike Aguilera
              </p>
            ) : data.djusername === "GILDARDOGONZALEZ" ? (
              <p className={styles.billboard_broadcaster}>
                Con DJ Gildardo Gonz??lez
              </p>
            ) : (
              <p className={styles.billboard_broadcaster}>
                Programaci??n Diaria
              </p>
            )}
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
            responsive={responsive}
          >
              <CardCarousel
                title={"Fiesta de Fin de A??o"}
                descripion={"Festeja en grande con el ritmo de los Aguas Aguas"}
                date={"Diciembre 30 20:00 hrs, El Cauz"}
                link={"https://www.eventbrite.com.mx/e/los-aguas-aguas-en-cerveceria-brujula-tickets-479969490667"}
                eventPic={festival}
              />
              <CardCarousel
                title={"Concierto de Reyes"}
                descripion={
                  "Orquesta Filarm??nica de Xalapa en el IMAC"
                }
                date={"Jueves 5 de enero de 2023 a las 19:00 hrs"}
                link={"https://www.facebook.com/events/6349027801778156/?active_tab=discussion"}
                eventPic={rocky}
              /> 
              <CardCarousel
                title={"Visita nocturna Fortaleza de San Carlos"}
                descripion={
                  "Un scouting se aproxima en un lugar lleno de misterio e historia"
                }
                date={"Proximamente"}
                link={""}
                eventPic={fortaleza}
              />
            
          </Carousel>
        </div>
      </div>
      <div className="row">
        <div className={`col-12 ${styles.programs}`}>
          <h2>Programas</h2>
          <h3>Los m??s escuchados de la radio de habla hispana</h3>
        </div>
        <div className={styles.programs_bg}>
          <div className={styles.programs_section}>
            <CardBroadCaster
              broadcasterPic={cory}
              title={"Fresas con chile"}
              color={pink}
              broadcaster={"con Cory Villica??a"}
              copy={
                "Espect??culos, sociales y lo que ocurre en el mundo de la ??lite."
              }
              days={"Viernes"}
              hours={"5:50pm a 7:00pm"}
            />
            <CardBroadCaster
              broadcasterPic={miyoReyes}
              title={"Historias, Leyendas de M??xico y el Mundo"}
              color={black}
              broadcaster={"con Miyo Reyes"}
              copy={
                "Para los amantes de los temas paranormales, misterios sin resolver, entidades y rituales."
              }
              days={"Mi??rcoles y Viernes"}
              hours={"9:00pm a 11:00pm"}
            />
            <CardBroadCaster
              broadcasterPic={tibu}
              title={"Noche de Show"}
              color={purple}
              broadcaster={"con El Tibu"}
              copy={
                "Humor jarocho, Cine, Horoscopos y sesiones deportivas con invitados los martes."
              }
              days={"Martes y Jueves"}
              hours={"9:00pm a 12:00pm"}
            />
            <CardBroadCaster
              broadcasterPic={roberto}
              title={"Innovation Time"}
              color={green}
              broadcaster={"con Roberto Castro"}
              copy={
                "El espacio emprendedor para hablar de innovaci??n, negocios e inversi??n."
              }
              days={"Martes y Jueves"}
              hours={"2:00pm a 3:00pm"}
            />
            <CardBroadCaster
              broadcasterPic={mayor}
              title={"Cr??nicas Deportivas"}
              color={orange}
              broadcaster={"con El Mayor"}
              copy={
                "Noticias de deportes alrededor del mundo con la mejor narrativa."
              }
              days={"Martes a Viernes"}
              hours={"9:00am a 10:15am"}
            />
          </div>
        </div>
        <div className={`row ${styles.djSection_bg}`}>
          <div className={`col-12 ${styles.djSection_title}`}>
            <h2>Los mejores DJs</h2>
            <h3>Las tornamesas m??s poderosas de la radio</h3>
          </div>
          <div className={`col-lg-6 col-md-12 ${styles.djSection_content}`}>
            <Image src={mikeAguilar} alt="Mike Aguilar Dj" />
            <p className={styles.djSection_content_name}>Mike Aguilera</p>
            <p className={styles.djSection_content_title}>Factor Cumbia</p>
            <p className={styles.djSection_content_copy}>
              Lunes y Mi??rcoles de 5:00 a 7:00 pm <br />
              <br />
              Sintoniza los ritmos m??s movidos desde el coraz??n de la cumbia
              latina.
            </p>
          </div>
          <div className={`col-lg-6 col-md-12 ${styles.djSection_content}`}>
            <Image
              src={gildardo}
              alt="Dj Gildardo"
              style={{ marginBottom: "2rem" }}
            />
            <p className={styles.djSection_content_name}>
              DJ Gildardo Gonz??lez
            </p>
            <p className={styles.djSection_content_title}>Studio 54</p>
            <p className={styles.djSection_content_copy}>
              Mi??rcoles de 7:00 a 9:00 pm
            </p>
            <p className={styles.djSection_content_title}>Viernes Loko</p>
            <p className={styles.djSection_content_copy}>
              Viernes de 7:00 a 9:00 pm <br />
              <br />
              Enciende la pista de baile donde te encuentres.
            </p>
          </div>
        </div>
        <div className={`row ${styles.sponsors_content}`}>
          <div className={`col-12 ${styles.sponsors_title}`}>
            <h2>Patrocinadores</h2>
          </div>

          <div className={`col-lg-4 col-md-12 ${styles.sponsors_logo}`}>
            <a
              href="https://www.facebook.com/academiataekwondojaguares"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={jaguares}
                alt="Logo Escuela de Tae Kwon Do Jaguares"
              />
            </a>
          </div>

          <div className={`col-lg-4 col-md-12 ${styles.sponsors_logo}`}>
            <a
              href="https://www.facebook.com/Aytto.Tlalnelhuayocan"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={tlalne} alt="Municipio de Tlalnehuayocan" />
            </a>
          </div>
          <div className={`col-lg-4 col-md-12 ${styles.sponsors_logo}`}>
            <a
              href="https://www.facebook.com/CarlaMarquezWeddingplanner"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={carla} alt="Carla Marquez Wedding Planner" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className={`col-12 ${styles.spotify_title}`}>
          <h2>El Top 10 en M??xico</h2>
          <h3>Las canciones m??s escuchadas hoy por hoy en M??xico</h3>
        </div>
      </div>
      <div className={`row ${styles.spotify_content}`}>
      <div className='col-md-8 col-sm-12'>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Posici??n</th>
              <th scope="col">T??tulo</th>
              <th scope="col">Artista</th>
            </tr>
          </thead>
          {spotifyData.list.slice(0,10).map((value: any, index: number) => {
            return (
              <tbody key={index}>
                <tr>
                  <th scope="row">{index + 1}.</th>
                  <td>{value.track.name}</td>
                  <td>
                    {value.track?.artists[0]?.name} {value.track?.artists[1]?.name && ', ' }
                    {value.track?.artists[1]?.name} {value.track?.artists[2]?.name && ', '}
                    {value.track?.artists[2]?.name} {value.track?.artists[3]?.name && ', '}
                    {value.track?.artists[3]?.name}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      </div>
      <Link
        href="https://wa.link/h6n29v"
        className={`${styles.whatsapp}`}
        target="_blank"
      >
        <Image
          height={36}
          width={36}
          style={{ marginTop: "7.5px", marginLeft: "1.5px" }}
          src={whatsapp}
          alt="logo whatsapp"
        />
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
            <p>Todos los derechos reservados Kings Radio FM 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
}
