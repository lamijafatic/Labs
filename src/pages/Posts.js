import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { Rating } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles'; 
import Slider from 'react-slick';
import './about.css';
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  contentContainer: {
    margin: '16px', 
  },
}));

const Posts = () => {
  const classes = useStyles();
  const images = [
    '/slika5.jpg',
    '/slika8.jpg',
    '/slika9.jpg',
    '/slika4.jpg',
  ];
  const images1 = [
    '/slika10.jpg',
    '/slika11.jpg',
    '/slika12.jpg',
    '/slika13.jpg',
  ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      autoplay: true,
     
    };

  return (
    <>
    <Typography style={{fontFamily:'Lucida Handwriting', paddingLeft:40,paddingTop:20, fontSize:'35px'}}>Our Halls</Typography>
      <Grid container spacing={2} className={classes.contentContainer}>
        <Grid item xs={12} md={6}>
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index} className={classes.imageContainer}>
              <img src={url} alt={`Slide ${index + 1}`} className={classes.image} />
            </div>
          ))}
        </Slider>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <Rating name="rating" value={4} readOnly />
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
  <Typography>
    <strong>Description:</strong> Nestled in the heart of Cityville, our grand banquet hall number 1 exudes timeless elegance and charm. With its soaring ceilings, exquisite chandeliers, and opulent decor, it sets the stage for unforgettable events. From lavish weddings to corporate galas, this versatile venue caters to every occasion with style and sophistication. Boasting state-of-the-art amenities and impeccable service, it ensures a seamless and memorable experience for you and your guests.<br/>
    <strong>Address:</strong> 123 Main Street, Cityville, State, ZIP Code<br/>
    <strong>Included:</strong> 
    <ul>
      <li>State-of-the-art audiovisual equipment</li>
      <li>Professional sound system</li>
      <li>High-speed Wi-Fi</li>
      <li>Decorative lighting</li>
      <li>Ample parking space</li>
    </ul>
    <strong><span style={{fontWeight: 'bold'}}>Price:</span></strong> $25000 per event.
  </Typography>
</AccordionDetails>

            </Accordion>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.contentContainer}>
        <Grid item xs={12} md={6}>
        <Box p={2}>
            <Rating name="rating" value={4} readOnly />
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
  <Typography>
    <strong>Description:</strong> Nestled in the heart of Cityville, our grand banquet hall number 1 exudes timeless elegance and charm. With its soaring ceilings, exquisite chandeliers, and opulent decor, it sets the stage for unforgettable events. From lavish weddings to corporate galas, this versatile venue caters to every occasion with style and sophistication. Boasting state-of-the-art amenities and impeccable service, it ensures a seamless and memorable experience for you and your guests.<br/>
    <strong>Address:</strong> 123 Main Street, Cityville, State, ZIP Code<br/>
    <strong>Included:</strong> 
    <ul>
      <li>State-of-the-art audiovisual equipment</li>
      <li>Professional sound system</li>
      <li>High-speed Wi-Fi</li>
      <li>Decorative lighting</li>
      <li>Ample parking space</li>
    </ul>
    <strong><span style={{fontWeight: 'bold'}}>Price:</span></strong> $25000 per event.
  </Typography>
</AccordionDetails>

            </Accordion>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index} className={classes.imageContainer}>
              <img src={url} alt={`Slide ${index + 1}`} className={classes.image} />
            </div>
          ))}
        </Slider>
         
        </Grid>
      </Grid>
      
      <Grid container spacing={2} className={classes.contentContainer}>
        <Grid item xs={12} md={6}>
        <Slider {...settings}>
          {images1.map((url, index) => (
            <div key={index} className={classes.imageContainer}>
              <img src={url} alt={`Slide ${index + 1}`} className={classes.image} />
            </div>
          ))}
        </Slider>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <Rating name="rating" value={5} readOnly />
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
  <Typography>
    <strong>Description:</strong> Situated amidst lush greenery on the outskirts of Cityville, our elegant banquet hall number 2 offers a serene and picturesque setting for your special events. With its modern architecture, spacious interiors, and panoramic views of the surrounding landscape, it provides a tranquil retreat away from the hustle and bustle of the city. Whether you're hosting a romantic wedding or a corporate conference, this versatile venue caters to your every need with grace and style.<br/>
    <strong>Address:</strong> 456 Park Avenue, Cityville, State, ZIP Code<br/>
    <strong>Included:</strong> 
    <ul>
      <li>Customizable lighting options</li>
      <li>Flexible seating arrangements</li>
      <li>Outdoor patio for cocktail receptions</li>
      <li>Complimentary valet parking</li>
      <li>On-site catering services</li>
    </ul>
    <strong><span style={{fontWeight: 'bold'}}>Price:</span></strong> $35000 per event.
  </Typography>
</AccordionDetails>

            </Accordion>
          </Box>
        </Grid>
      </Grid>
     
    </>
  );
}

export default Posts;

