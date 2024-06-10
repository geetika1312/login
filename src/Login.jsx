import React from 'react';
import { Container, Box, Typography, Button, TextField, Checkbox, FormControlLabel, Link, Divider } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';

const Login = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 13,
          borderRadius: 5,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img src="https://img.utdstc.com/icon/5eb/83f/5eb83f2ee024ae927778b986e073a1d6d967d2dd8571326fb5f505a44dd82d25:200" alt="Evernote Logo" style={{ width: 50, marginBottom: 0 }} />
        <Typography component="h1" variant="h5" style={{ fontFamily: 'Emerald, serif', fontWeight: 700, fontSize: '2.5rem', }}>
          Evernote
        </Typography>
        <Typography variant="subtitle1" gutterBottom style={{ fontFamily: 'Arial', marginBottom: '16px' }}>
          Remember everything important.
        </Typography>
        <Button
          variant="outlined"
          startIcon={<img src="https://th.bing.com/th/id/OIP.JflGW8e1fT4_ttSuFTQXJwHaHj?rs=1&pid=ImgDetMain" alt="Google Logo" style={{ width: 15, marginRight: 8 }} />} // Original Google logo
          fullWidth
          sx={{ mt: 1, mb: 1, fontFamily: 'Arial' }}
        >
          Continue with Google
        </Button>
        <Button
          variant="outlined"
          startIcon={<AppleIcon />}
          fullWidth
          sx={{ mb: 1, fontFamily: 'Arial' }}
        >
          Continue with Apple
        </Button>
        <Divider sx={{ width: '100%' }}>or</Divider>
        <TextField
          label="Email address or username"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{
            '& .MuiInputLabel-root': {
              transform: 'translateY(-50%)', // Move label up by half of its height
              top: '50%', // Align the top of label with the middle of TextField
              paddingLeft: '8px', // Add left padding to the label
            },
            '& .MuiOutlinedInput-root': { 
              height: '36px',
              position: 'relative', // Required for label positioning
            }
          }}
        />
        <Button
          variant="contained"
          color="success"
          fullWidth
        >
          Continue
        </Button>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me for 30 days"
          sx={{ mt: 1, fontSize: '0.8rem', '& .MuiFormControlLabel-label': { fontSize: '0.8rem' } }} // Decrease the font size of label
        />
        <Typography variant="body2" sx={{ fontSize: '0.8rem', mt: 5 }}> {/* Added margin-top: 2 */}
          Don't have an account?
        </Typography>
        <Link href="#" variant="body2" sx={{ fontSize: '0.8rem', color: 'green', textDecoration: 'none' }}>
          Create account
        </Link>
      </Box>
    </Container>
  );
}

export default Login;
