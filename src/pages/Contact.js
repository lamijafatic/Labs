import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles'; 
import { createTheme } from '@mui/material/styles'; 
import './contact.css'; 

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        
        const savedName = localStorage.getItem('name');
        const savedEmail = localStorage.getItem('email');
        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
        if (!message) newErrors.message = 'Message is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
         
            console.log({ name, email, message });
           
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
        }
    };

    const theme = createTheme({
      
        typography: {
            fontFamily: 'Lucida Handwriting, sans-serif',

            
            
        },
        button: {
            color: '#ffffff',
            backgroundColor: '#f44336',
        },
       
        components: {
           
            
            MuiBox: {
                styleOverrides: {
                    root: {
                        borderRadius: '30px',
                    },
                },
            },
        },
       
    });

    return ( 
        <ThemeProvider theme={theme}>
            <Container>
               
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}  className="form-container" style={{
                    backgroundColor:'#ffffff',
                    height: '70vh',
                }} >
                     <Typography variant="h4" className="naslov" component="h1" gutterBottom>
                    Contact Us
                </Typography>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        error={!!errors.message}
                        helperText={errors.message}
                    />
                    <Button type="submit" variant="contained"  sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
    
}

export default Contact;
