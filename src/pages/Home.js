import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const images = [
     '/slika1.jpg',
     '/slika2.jpeg',
     '/slika3.jpg',
     '/slika4.jpeg',

    'https://source.unsplash.com/1600x900/?wedding',
    'https://source.unsplash.com/1600x900/?wedding,hall',
    'https://source.unsplash.com/1600x900/?celebration',
    
];

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    };

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Slider {...settings}>
                {images.map((url, index) => (
                    <Box key={index} sx={{ position: 'relative' }}>
                        <Box
                            component="img"
                            src={url}
                            alt={`Slide ${index + 1}`}
                            sx={{
                                width: '100%',
                                height: '100vh',
                                objectFit: 'cover',
                                filter: 'brightness(50%)',
                            }}
                        />
                    </Box>
                ))}
            </Slider>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'left',
                    color: 'white',
                }}
            >
                <Typography  sx={{ fontSize:'8rem' , fontFamily: 'Precious' }}>
                    Powely
                </Typography>
                <Typography  sx={{  fontSize:'2rem' ,fontFamily: 'Precious' }}>
                    With you on your special days...
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;

