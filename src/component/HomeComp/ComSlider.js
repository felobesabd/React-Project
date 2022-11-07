import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider1.png'
import slider4 from '../../images/slider4.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'

let SliderCom = () => {
        const [index, setIndex] = useState(0);
    
        const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
        };

    return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

    <Carousel.Item className='background-slide background-slide1' interval={2000}>
    <div className='d-flex justify-content-center align-items-center'>
        <img
        className="d-block img-slide"
        src={prod4}
        alt="First slide"
        />
        <div className='mx-3'>
        <h3 className='slider-title'>There is a big discount</h3>
        <p className='slider-text'>Get up to 50%</p>
        </div>
    </div>
    </Carousel.Item>

    <Carousel.Item className='background-slide background-slide2' interval={2000}>
    <div className='d-flex flex-row justify-content-center align-items-center'>
        <img
        className="d-block img-slide"
        src={slider4}
        alt="First slide"
        />
        <div className='mx-3'>
        <h3 className='slider-title'>There is a big discount</h3>
        <p className='slider-text'>Get up to 50%</p>
        </div>
    </div>
    </Carousel.Item>

    <Carousel.Item className='background-slide background-slide3' interval={2000}>
    <div className='d-flex justify-content-center align-items-center'>
        <img
        className="d-block img-slide"
        src={prod3}
        alt="First slide"
        />
        <div className='mx-3'>
        <h3 className='slider-title'>There is a big discount</h3>
        <p className='slider-text'>Get up to 50%</p>
        </div>
    </div>
    </Carousel.Item>

    <Carousel.Item className='background-slide background-slide4' interval={2000}>
    <div className='d-flex justify-content-center align-items-center'>
        <img
        className="d-block img-slide"
        src={slider1}
        alt="First slide"
        />
        <div className='mx-3'>
        <h3 className='slider-title'>There is a big discount</h3>
        <p className='slider-text'>Get up to 50%</p>
        </div>
    </div>
    </Carousel.Item>

    </Carousel>
    )
}

export default SliderCom;