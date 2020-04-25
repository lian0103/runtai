import React, { useState } from 'react';
import './style.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {routesConfig} from '../../config/router';
import { useLocation } from "react-router-dom";

const Header = (props) => {
    const { pathname } = useLocation();
    const hasTargetRoute =  routesConfig.find( item => item.path == pathname ) ;
    const targetRoute = hasTargetRoute === undefined ? {"path":''} : hasTargetRoute;
    const [activeOne, setActiveOne] = useState(targetRoute.path);
    const isHome = targetRoute.path == '/' ? true:false;

    const handleMove = () => {
        let target = document.getElementById('footer');
        let bodyTop = target.scrollTop;
        window.scrollTo(bodyTop,2000);//改
    }
    const [scrollState,setScrollState] = useState(window.pageYOffset);
    window.addEventListener('scroll',function(){
        let bodyTop =window.pageYOffset;
        setScrollState(bodyTop);
    });

    const headstyle = {"position":"fixed","top":"0","zIndex":"10"};

    return (
        <div className="head">
            <div className="headInfo" style={scrollState >= 80 ? headstyle:{}}>
                <div className="containWidth">
                    <ul>
                        {routesConfig.map(item => {
                            if (item.path == activeOne) {
                                return (
                                    <Link className='active' onClick={() => {
                                        setActiveOne(item.path);
                                    }} key={item.key} to={item.path}>{item.txt}</Link>
                                )
                            } else {
                                return (
                                    <Link onClick={() => {
                                        setActiveOne(item.path);
                                    }} key={item.key} to={item.path}>{item.txt}</Link>
                                )
                            }

                        })}
                    </ul>
                    <div className="contact">
                        <span onClick={handleMove}>
                            <FontAwesomeIcon icon={faCoffee} />
                            服務據點</span>
                    </div>
                </div>
            </div>

            <div className="headMenu"
                style={isHome?{}:{"position":"unset","top":"unset","left":"unset","backgroundColor": "#CC6"}}
            >
                <div className="containWidth">
                    <div className='logobox'>
                        <img src="https://picsum.photos/45/45/?random=1" />
                        <strong>潤泰財富資產管理</strong>
                        <span>RUN TAI</span>
                    </div>
                    <div className='contactInfo'>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;