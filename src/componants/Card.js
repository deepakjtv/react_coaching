import React from 'react';
import './Card.css';
import { FaFilePdf, FaYoutube, FaBookmark,FaRegClock } from 'react-icons/fa';
import card_img from '../card_img.png';

function card(props) {
    return (
        <div className='card'>
            <a href="#" className='card_name'></a>
            <img src={card_img} alt="img-not-found" />
            <div className='dadlineTime'>{<FaRegClock style={{marginRight:20}}/>} {props.dadlineTime}</div>
            <div className='cardText'>{props.cardTxt}</div>
            <hr className='hrLine' style={{ borderTop: '.5px solid #111', opacity: .2, width: 350 }} />
            <div className='cardDetail_1'><span className=''><FaYoutube /></span>{props.cardDetail_1}</div>
            <div className='cardDetail_2'><span className=' icon-bookmark'><FaBookmark /></span>{props.cardDetail_2}
                <span className='icon-pdf '>{<FaFilePdf />}</span>{props.cardDetail_3}</div>
        </div>
    )
}
export default card;
