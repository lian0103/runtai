import React from "react";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarked ,faCalculator ,faBook ,faBarcode } from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import iconCat from '../../media/img/cat_icon.png';
import './style.scss';

const Footer = (props) => {
    const googleMapAPIkey = 'AIzaSyArsEw53_48xmlNKPc5giGWvb6qC_0XQHE';
    const center = {
        lat: 25.01713,
        lng: 121.297861
    }
    const zoom = 16;

    const handleOpen = () => {
        window.open("https://lin.ee/xcmauQ4");
    }
    return (
        <>
            <div className="footer" id="footer">
                <div className="containWidth">
                    <div className='footerInside'>
                        <div className="fbox mapbox" style={{ height: '300px', width: '400px' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: googleMapAPIkey }}
                                defaultCenter={center}
                                defaultZoom={zoom}
                            >
                            </GoogleMapReact>
                        </div>
                        <div className='fbox info'>
                            <h3>客服資訊</h3>
                            <p><FontAwesomeIcon icon={faMapMarked} /> 桃園市桃園區中正路1111號18樓</p>
                            <p><FontAwesomeIcon icon={faPhone} /> 0903-731-277</p>
                            <p onClick={handleOpen} style={{ "cursor": "pointer" }}>  <FontAwesomeIcon icon={faLine} /> 加入好友 </p>
                        </div>
                        <div className='fbox info'>
                            <h3>潤泰服務</h3>
                            <p><FontAwesomeIcon icon={faBarcode} />借貸諮詢</p>
                            <p><FontAwesomeIcon icon={faCalculator} />線上試算</p>
                            <p><FontAwesomeIcon icon={faBook} />理財規劃</p>
                        </div>
                        <img src={iconCat} />
                    </div>
                </div>
                <div className='copyright'>
                    Copyright © 2020 by 潤泰財富資產管理 All rights reserved ｜Design by OOO
                </div>
            </div>


        </>
    )
}

export default Footer;