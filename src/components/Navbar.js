
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

 
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
      setActiveLink(link);
  };
    return (
        <AppBar position="static" color="transparent" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                   
                    <Box component="span" sx={{ mr: 2 }}>
                        <img src="ikona.jpeg" alt="Logo" style={{ height: '24px' }} />
                    </Box>
                    Powely Halls
                </Typography>
             
                <Button color="inherit" component={Link} to="/" sx={{ fontFamily:'cursive', color: 'black', paddingX:'1rem',fontFamily: ' cursive' , '&:hover': {
                                backgroundColor: 'pink'
                            }}} 
                 >Home</Button>
                <Button color="inherit" component={Link} to="/about" sx={{fontFamily:'cursive',  color: 'black', paddingX:'1rem', '&:hover': {
                                backgroundColor: 'pink'}}}>About</Button>
                <Button color="inherit" component={Link} to="/posts" sx={{ fontFamily:'cursive', color: 'black',paddingX:'1rem' , '&:hover': {
                                backgroundColor: 'pink' }}}>Posts</Button>
                <Button color="inherit" component={Link} to="/contact" sx={{fontFamily:'cursive',  color: 'black',paddingX:'1rem', '&:hover': {
                                backgroundColor: 'pink' }}}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
