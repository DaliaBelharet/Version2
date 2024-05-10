import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import axios from 'axios';
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/footer'; 
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from '../../assets/login-pana.png';
import logo from '../../assets/avtr.png'; 

const defaultTheme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {

    e.preventDefault();
    try {
      const response = await axios(
        {
          method : "post",
          url: `http://localhost:5000/api/v1/auth/login`,
          withCredentials: true,
          data: {
              email,
              password,
          }
      })
      console.log(response.data);
      navigate('/home'); 
        // Gérer la réponse, par exemple rediriger l'utilisateur vers une page de confirmation
    } catch (error) {
        console.error("Erreur lors de la soumission du formulaire ",error);
        // Gérer les erreurs, par exemple afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }} />
      
      <Grid container component="main" sx={{ height: '100vh', paddingTop: '64px' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              marginTop: '200px',
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} />
            <Typography component="h1" variant="h5" fontWeight="bold">
              Connexion
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={email}  // Ajout de l'attribut value
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                value={password}  // Ajout de l'attribut value
                onChange={(e) => setPassword(e.target.value)} 
                autoComplete="current-password"
              />


              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Se souvenir de moi"
              />     
              <Button
                type="submit"
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: '#FF5733', 
                  '&:hover': {
                    bgcolor: '#E64A19',
                  },
                }}
              >
                Se connecter
              </Button>
              
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: 'black' }}>
                    Mot de passe oublié?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2" sx={{ color: 'black', fontWeight: 'bold' }}>
                    {"Vous n'avez pas de compte ? Inscrivez-vous"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
      <div className="footer-container"> 
        <Footer />
      </div>
    </ThemeProvider>
  );
}
