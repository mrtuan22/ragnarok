
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const contentStyleHeader = {

    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    width: "100%",
};
const contentStyleJob = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',


}



function HomePage(props) {
    const { arrCarousel } = useSelector(state => state.HeaderCarouselReducer);

    const { arrJob } = useSelector(state => state.JobReducer);

    const renderHeaderCarousel = () => {
        return arrCarousel?.map((item, index) => {
            return <div key={index}>
                <img style={contentStyleHeader} src={item} alt={item} />

            </div>
        })
    }


    //render carousel job
    const renderCarouselClass = () => {

        return arrJob?.map((card, index) => {
            console.log("card:", card.url)
            return <div className="cardJob" key={index}>
                <div className="cardJob__header">
                    <img style={contentStyleJob} src={require(card.url).default} alt={card.url} />

                </div>
                <div className="cardJob__text">
                    <h1>{card.name}</h1>
                </div>

            </div>
        })


    }
    return <section id="homeBody" className="homeBody">
        <div className="homeBody__content">
            <div className="headerCarousel">
                <Carousel autoplay>
                    {renderHeaderCarousel()}
                </Carousel>,
            </div>
            <section id="class" className="class">
                <h1>Nghề nghiệp</h1>
                <div className="carousel">
                    <Carousel slidesToShow={4} draggable
                        arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined />}>
                        {renderCarouselClass()}
                    </Carousel>
                </div>
            </section>
        </div>
    </section>
}

export default HomePage;