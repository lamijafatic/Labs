import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText,ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open) => () => {
        setOpenDrawer(open);
    };

    return (
        <React.Fragment>
            <AppBar position="static" color="transparent" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                        <Box component="span" sx={{ mr: 2 }}>
                            <img src="ikona.jpeg" alt="Logo" style={{ height: '24px' }} />
                        </Box>
                        Powely Halls
                    </Typography>
                    <Button color="inherit" component={Link} to="/" sx={{ fontFamily: 'cursive', color: 'black', paddingX: '1rem', fontFamily: ' cursive', '&:hover': { backgroundColor: 'pink' } }}>Home</Button>
                    <Button color="inherit" component={Link} to="/about" sx={{ fontFamily: 'cursive', color: 'black', paddingX: '1rem', '&:hover': { backgroundColor: 'pink' } }}>About</Button>
                    <Button color="inherit" component={Link} to="/posts" sx={{ fontFamily: 'cursive', color: 'black', paddingX: '1rem', '&:hover': { backgroundColor: 'pink' } }}>Halls</Button>
                    <Button color="inherit" component={Link} to="/contact" sx={{ fontFamily: 'cursive', color: 'black', paddingX: '1rem', '&:hover': { backgroundColor: 'pink' } }}>Contact</Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                <List sx={{backgroundColor:'#FFC0CB', height:'100vh'}}>
                <ListItem>
    <ListItemText primary={<span style={{ fontFamily: 'Lucida Handwriting, cursive', fontWeight:'bold' }}>Gallery</span>} />
</ListItem>

               
                    <ListItemButton component="a" href="https://www.anoush.com/banquet-halls/the-landmark" target="_blank">
                        <ListItemText primary={<span style={{ fontFamily: 'Lucida Handwriting, cursive' }}>Summer 2023</span>} />
                    </ListItemButton>
                    <ListItemButton component="a" href="https://landmarkvenues.com/our-venues/winter-wedding/" target="_blank">
                        <ListItemText primary={<span style={{ fontFamily: 'Lucida Handwriting, cursive' }}>Winter 2023</span>} />
                    </ListItemButton>
                    <ListItemButton component="a" href="https://www.anoush.com/banquet-halls/hummingbird-nest-ranch" target="_blank">
                        <ListItemText primary={<span style={{ fontFamily: 'Lucida Handwriting, cursive' }}>Spring 2024</span>} />
                    </ListItemButton>
                </List>
            </Drawer>
        </React.Fragment>
    );
}

export default Navbar;
