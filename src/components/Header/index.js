import React, { useState } from 'react';
import './style.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import routesConfig from '../../config/router';

const Header = (props) => {
    const menuItems = ["最新優利專案", "個人信用貸款", "二順位貸款", "汽車貸款"];
    const [activeOne, setActiveOne] = useState(menuItems[0]);

    console.log(routesConfig);
    return (
        <div className="head">
            <div className="headInfo">
                <div className="containWidth">
                    <ul>
                        {routesConfig.map(item => {
                            if (activeOne == item.txt) {
                                return (
                                    <Link className='active' onClick={() => {
                                        setActiveOne(item.txt);
                                    }} key={item.key} to={item.path}>{item.txt}</Link>
                                )
                            } else {
                                return (
                                    <Link onClick={() => {
                                        setActiveOne(item.txt);
                                    }} key={item.key} to={item.path}>{item.txt}</Link>
                                )
                            }

                        })}
                    </ul>
                    <div className="contact">
                        <span>
                            <FontAwesomeIcon icon={faCoffee} />
                            服務據點</span>
                    </div>
                </div>
            </div>

            <div className="headMenu">
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