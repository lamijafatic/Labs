import React, { useState, useEffect } from 'react';
import { Grid, Typography, Avatar, Card, CardMedia, CardContent } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const theme_contact = createTheme({
  typography: {
   
    fontSize: 20,
    fontWeight: 'bold',
   
  },
});

const About = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const count = localStorage.getItem('visitCount');
    const newCount = count ? parseInt(count, 10) + 1 : 1;
    setVisitCount(newCount);
    localStorage.setItem('visitCount', newCount);
  }, []);

  const handleMouseEnter1 = () => {
    setHover1(true);
  };

  const handleMouseLeave1 = () => {
    setHover1(false);
  };

  const handleMouseEnter2 = () => {
    setHover2(true);
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
  };

  const hoverStyle1 = {
    color: hover1 ? '#e75480' : 'inherit',
    fontSize: hover1 ? 25 : 23,
  };

  const hoverStyle2 = {
    color: hover2 ? '#e75480' : 'inherit',
    fontSize: hover2 ? 25 : 23,
  };

  return (
    <ThemeProvider theme={theme_contact}>
      <Grid container spacing={2} style={{padding:10}}>
       
        <Grid item xs={12} md={6}>
          <Typography
            style={{ margin: 20, fontFamily:'Lucida Handwriting', fontSize:40 }}
            
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            About Us
          </Typography>
          <Typography
            style={hoverStyle1}
            variant="body1"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel euismod diam. Integer et odio non magna vestibulum cursus et et urna. Nulla auctor ipsum urna, eget aliquet massa laoreet ac. Nunc mattis interdum enim, at maximus nisl condimentum vel. Nulla rhoncus nibh quis enim commodo iaculis. Duis urna est, bibendum sed condimentum ut, vehicula ut nulla. Nunc suscipit turpis nisi, id accumsan elit ornare non. Suspendisse feugiat, arcu vitae ultrices tincidunt, purus mauris pulvinar mi, non egestas massa metus et justo. Pellentesque velit libero, eleifend id iaculis quis, egestas.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Avatar 
            alt="Avatar"
            src="slika15.jpg"
            sx={{ width: '100%', height: 'auto', borderRadius: '50%' }}
          />
        </Grid>

        
        <Grid item xs={12} md={6}>
          <Card sx={{ width: '100%' }}>
            <CardMedia
              component="img"
              height="200" 
              image="pozadina.jpg"
              alt="Card Image"
            />
            <CardContent sx={{ padding: 1 }}> 
              <Typography variant="h5" component="div">
                Avenue Marleny 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel euismod diam. Integer et odio non magna vestibulum cursus et et urna. Nulla auctor ipsum urna, eget aliquet massa laoreet ac. Nunc mattis interdum enim, at maximus nisl condimentum vel.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            style={hoverStyle2}
            variant="h5"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            Tekst
          </Typography>
          <Typography
            style={hoverStyle2}
            variant="body1"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel euismod diam. Integer et odio non magna vestibulum cursus et et urna. Nulla auctor ipsum urna, eget aliquet massa laoreet ac. Nunc mattis interdum enim, at maximus nisl condimentum vel. Nulla rhoncus nibh quis enim commodo iaculis. Duis urna est, bibendum sed condimentum ut, vehicula ut nulla. Nunc suscipit turpis nisi, id accumsan elit ornare non. Suspendisse feugiat, arcu vitae ultrices tincidunt, purus mauris pulvinar mi, non egestas massa metus et justo. Pellentesque velit libero, eleifend id iaculis quis, egestas.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              marginTop: 4,
              padding: 2,
              textAlign: 'center',
              backgroundColor: '#f4f4f4',
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: 'Lucida Handwriting, sans-serif' }}>
              Visitor Counter
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {visitCount}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default About;
