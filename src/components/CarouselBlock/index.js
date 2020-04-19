import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.scss';


const CarouselBlock = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleLink = () => {
        alert('ok');
    }

    return (
        <div className='carouselBlock'>

            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                interval={15000}
            >
                <Carousel.Item>
                    <img src="https://picsum.photos/1100/460/?random=1" alt="First slide" />
                    <Carousel.Caption onClick={handleLink} style={{ 'cursor': 'pointer' }}>
                        <h3>最新優利專案</h3>
                        <p>前三個月固定利率1.68%，第四個月機動利率2.5%起</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://picsum.photos/1100/460/?random=2" alt="Second slide" />
                    <Carousel.Caption onClick={handleLink} style={{ 'cursor': 'pointer' }}>
                        <h3>個人信用貸款</h3>
                        <p>個人信貸免押、免保、免照會<br />讓您的資金運作更加靈活。</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://picsum.photos/1100/460/?random=3" alt="Third slide" />
                    <Carousel.Caption onClick={handleLink} style={{ 'cursor': 'pointer' }}>
                        <h3>二順位貸款</h3>
                        <p>貸款額度可高於信用貸款<br />取得資金速度比房屋貸款快</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>

    )
}

export default CarouselBlock;