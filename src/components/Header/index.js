import React, { useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Header = (props) => {
    const menuItems = ["最新優利專案", "個人信用貸款", "二順位貸款", "汽車貸款"];
    const [activeOne, setActiveOne] = useState(menuItems[0]);

    return (
        <div className="head">
            <div className="headInfo">
                <div className="containWidth">
                    <ul>
                        {menuItems.map((item, index) => {
                            if (activeOne == item) {
                                return (
                                    <li className='active' onClick={() => {
                                        setActiveOne(item);
                                    }} key={index}>{item}</li>
                                )
                            } else {
                                return (
                                    <li onClick={() => {
                                        setActiveOne(item);
                                    }} key={index}>{item}</li>
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