import React from 'react'
import Image from "next/image";
import styles from "../styles/Home.module.css";

const CardCarousel = ({ eventPic }) => {
  return (
    <div className={`card ${styles.events_cards}`} style={{'width': '18rem'}}>
        <Image src={eventPic} className="card-img-top" alt="..." />
    <div className="card-body">
    <p className={`${styles.events_description}`}><b>Tecate pal Norte</b></p>  
    <p>Conoce más</p>          
    </div>
    </div> 
  )
}

export default CardCarousel