import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry, faThumbsUp, faAward, faUserTie } from '@fortawesome/free-solid-svg-icons';
import InfoModal from "../InfoModal";
import './style.scss';

const InfoBlock = (props) => {

    const news = [
        {title:"本身在銀行信用有瑕疵可以辦理嗎？",content:"在銀行的信用有瑕疵並不影響借款人所提供擔保品的價值，只要您所提供的擔保品是有價的，本公司將竭誠為您規劃屬於您的超彈性利率方案，讓您無後顧之憂。"},
        {title:"有車子可是想借錢，要向誰借呢？",content:"要先看您的車子在銀行是否有貸款，若是貸款已清償或無貸款的情形，除非是時間上過於急迫，又或者個人本身信用上有瑕疵，不然向銀行申辦貸款才是真正的理財、紓困的好方法。"},
        {title:"申請貸款人需要有什麼條件呢？",content:"依法貸款人須年滿20歲、為中華民國國民、且符合申辦貸款資格者。"},
    ];

    const services = [
        { "num": 1450, "txt": "件專案成功", "icon": faPeopleCarry },
        { "num": 1864, "txt": "名顧客推薦", "icon": faThumbsUp },
        { "num": 1280, "txt": "座得名獎項", "icon": faAward },
        { "num": 48, "txt": "名菁英成員", "icon": faUserTie },
    ]

    const [dataTarget,setDataTarget] = useState(undefined);
    const [isInfoModalshow, setIsInfoModalshow] = useState(false);

    return (
        <>
        <InfoModal 
            isInfoModalshow={isInfoModalshow}
            setIsInfoModalshow={setIsInfoModalshow}
            data={dataTarget}
        />
        <div className='infobox'>
            <div className='containWidth flexbox'>
                <div className='news'>
                    <h3>最新消息與公告</h3>
                    <ul>
                        {news.map((item, index) => {
                            return (
                                <li key={index} onClick={()=>{
                                    setDataTarget(item);
                                    setIsInfoModalshow(true);
                                }}>{item.title}</li>
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
        </>
    )
}

export default InfoBlock;