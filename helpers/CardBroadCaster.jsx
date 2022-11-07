import React from 'react'
import Image from "next/image";
import styles from "../styles/Home.module.css";

const CardBroadCaster = ({ broadcasterPic, color, title, broadcaster, copy, days, hours }) => {
  return (
    <div style={color} className={`row ${styles.programs_cards}`}>
     <div className={`col-lg-6 col-md-12 ${styles.programs_cards_img}`}>
            <Image 
            src={broadcasterPic}
            width={250}
            height={250}
            className="card-img-top" alt="..." /> 
        </div> 
        <div className={`col-lg-6 col-md-12 ${styles.programs_cards_content}`}>
            <p className={`${styles.programs_cards_content_title}`}>{title}</p>
            <p className={`${styles.programs_cards_content_name}`}>{broadcaster}</p>
            <p className={`${styles.programs_cards_content_description}`}>{copy}</p>
            <p className={`${styles.programs_cards_content_schedule}`}>{days}<br/>
            {hours}</p>
        </div>
           
    </div>
  )
}

export default CardBroadCaster 