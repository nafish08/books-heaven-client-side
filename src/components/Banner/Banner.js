import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/pbn3QbY/pexels-pixabay-159711.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</h3>
                        <p>- George R.R. Martin</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/k258jgR/pexels-janko-ferlic-590493.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>“Reading is essential for those who seek to rise above the ordinary.”</h3>
                        <p>- Jim Rohn</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/bXhTTZy/pexels-olena-bohovyk-3646172.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>“Books are a uniquely portable magic.”</h3>
                        <p>- Stephen King</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;