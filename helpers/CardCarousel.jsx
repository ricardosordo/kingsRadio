import React from 'react'
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link';

const CardCarousel = ({ eventPic, title, descripion, date, link }) => {
  return (
    <div className={`card ${styles.events_cards}`}>
        <Image src={eventPic} className="card-img-top" alt="..." />
    <div className="card-body">
    <p className={`${styles.events_description}`}><b>{title}</b></p>  
    <p style={{'fontWeight' : '400'}}>{descripion}</p>
    <p style={{'fontWeight' : '700'}}>{date}</p>
    <Link href={link} target='_blank' >
    <button className='btn mt-3 mb-2 btn-dark'>
    Conocer más
    </button> 
   </Link>          
    </div>
    </div> 
  )
}

export default CardCarousel