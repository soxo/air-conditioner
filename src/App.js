import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import './App.css';
import ProTip from './Protip';
import AirConditioner from './components/AirConditioner';

function Copyright() {
  return (
    <Box my={4}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/YunYouJun/summer-gadgets">
          Summer Gadgets
        </Link>
        {' - '}
        <Link color="inherit" href="https://github.com/YunYouJun">
          YunYouJun
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </Box> 
  );
}

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography align="center" variant="h4" component="h1" gutterBottom>
          夏日小工具
        </Typography>
        <ProTip />
        <AirConditioner />
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;