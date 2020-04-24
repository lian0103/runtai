import React from "react";
import CarouselBlock from '../components/CarouselBlock';
import InfoBlock from '../components/InfoBlock';
import demo04 from '../media/img/demo04.jpg';
const Home = (props) => {

    return (
        <>
            <CarouselBlock />
            <InfoBlock />

            <div className="containWidth">
                <div className="preferentialBox">
                    <h2>我想找...</h2>
                    <div className="content">
                        <img src={demo04} alt="demo04" />
                        <div className="txtbox">
                            <h3>最新優利專案</h3>
                            <p>貸款額度: 新台幣最高100萬元<br />
                            貸款利率: 月利率1.68%起<br />
                            貸款期間: 最長7年<br />
                            貸款費用: 6,000元<br />
                            準備文件: 身分證、財力證明文件<br />
                            (所得稅扣繳憑單、薪轉存摺封面及近半年內頁、薪資證明、報稅資料擇一即可)</p>
                            <span>更多</span>
                        </div>
                    </div>
                </div>

                <div className="preferentialBox">
                    <h2>我想問...</h2>
                    <div className="content">
                        <img src={demo04} alt="demo04" />
                        <div className="txtbox">
                            <h3>汽車貸款有什麼優點？</h3>
                            <p>申請門檻低：汽車抵押貸款因為有汽車作為抵押，貸款公司對借款人比較放心，<br />
                                所以對徵信沒有太嚴格的要求，簡直是有信用「瑕疵」的借款人的「福音」。<br /><br />
                                放款速度快：車子抵押貸款流程簡單，貸款公司的審批速度很快。借款人將手續準備齊全，<br />
                                最快當天便可獲得貸款資金，對於急需資金的借款人來說，<br />
                                辦理汽車抵押貸款，無疑是快速獲得資金的好辦法。
                            </p>
                            <span>更多</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;