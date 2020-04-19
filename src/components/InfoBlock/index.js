import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry, faThumbsUp, faAward, faUserTie } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

const InfoBlock = (props) => {

    const news = [
        "提供專人諮詢 歡迎來電洽詢比較",
        "本身在銀行信用有瑕疵可以辦理嗎？",
        "有車子可是想借錢，要向誰借呢？",
        "申請貸款人需要有什麼條件呢？"
    ];

    const services = [
        { "num": 1450, "txt": "件專案成功", "icon": faPeopleCarry },
        { "num": 1864, "txt": "名顧客推薦", "icon": faThumbsUp },
        { "num": 1280, "txt": "座得名獎項", "icon": faAward },
        { "num": 48, "txt": "名菁英成員", "icon": faUserTie },
    ]

    return (
        <div className='infobox'>
            <div className='containWidth flexbox'>
                <div className='news'>
                    <h3>最新消息與公告</h3>
                    <ul>
                        {news.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className='records'>
                    {services.map((item, index) => {
                        return (
                            <div className='item' key={index}>
                                <FontAwesomeIcon icon={item.icon} /><br />
                                <span>{item.num}</span>{item.txt}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default InfoBlock;