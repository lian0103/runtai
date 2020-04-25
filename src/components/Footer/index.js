import React from "react";
import GoogleMapReact from 'google-map-react';
import './style.scss';

const Footer = (props) => {
    const googleMapAPIkey = 'AIzaSyArsEw53_48xmlNKPc5giGWvb6qC_0XQHE';
    const center = {
        lat: 25.01713,
        lng: 121.297861
    }
    const zoom = 16;
    return (
        <>
            <div className="footer" id="footer">
                <div className="containWidth">
                    <div className='footerInside'>
                        <div className="mapbox" style={{ height: '300px', width: '400px' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: googleMapAPIkey }}
                                defaultCenter={center}
                                defaultZoom={zoom}
                            >
                            </GoogleMapReact>
                        </div>
                        <div className='info'>
                            <h3>聯繫資訊</h3>
                            <p>桃園市桃園區中正路1111號18樓</p>
                            <p>0903-731-277</p>
                        </div>
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