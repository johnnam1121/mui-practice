import { Container, Grid } from '@mui/material';

const topStyle = {
  height: '10vh',
  backgroundColor: '#E5E2D9'
}
const bottomStyle = {
  height: '10vh',
  backgroundColor: '#00a99d'
}

export default function App() {
  return (
    <Container maxWidth={false} sx={{ px: 0 }}>
      <Grid container sx={{ width: '100%', mx: 0 }}>
        <Grid item xs={12} md={12} sx={topStyle}> blah</Grid>


        <Grid item xs={12} md={12} sx={{ bgColor: '#3fa9f5', height: '30vh' }}>

    test

        </Grid>



        <Grid item xs={12} md={12} sx={bottomStyle}>
          <Grid Container sx={{ display: 'flex' }}>
            <Grid item xs={6} md={6} >
              <ul>
                <li>some text heresome text heresome text heresome text here</li>
                <li>some text heresome text heresome text heresome text here</li>
                <li>some text heresome text heresome text heresome text here</li>
              </ul>
            </Grid>
            <Grid item xs={6} md={6} >
              <ul>
                <li>some text heresome text heresome text heresome text here</li>
                <li style={{ color: '#f36523' }}>accent colors</li>
                <li style={{ color: '#f36523' }}><button style={{ color: '#f36523' }}>like this</button></li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

// 00a99d GREEN
// f36523 ORANGE
// f70809 RED
// 3fa9f5 BLUE