import '../App.css'
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

  const Custombutton = styled(Button)({
    backgroundColor: 'burlywood',
    color: 'black',
    "&:hover": {
      backgroundColor: 'tomato',
      color: 'white',
    }
  })

function LearnMUI() {
  return (
    <Container>
      <Typography variant='h5' color='green'>Button Typography </Typography>
      <Typography variant='p' component='h6' sx={{ fontSize: "20px" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ipsam repellendus tempore, deserunt ducimus, necessitatibus corporis, placeat sit obcaecati tempora eaque facilis officiis? Ipsam, eveniet error. Fugit ipsum voluptates alias?
      </Typography>
      <br></br>
      <Typography variant='h5' color='green'>Button Learn </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" disabled>disabled</Button>
        <Button variant="contained" disableElevation>disableElevation</Button>
        <Button variant="contained" disableElevation color='error'>error</Button>
        <Button variant="contained" disableElevation size='large'>large</Button>
        <Button variant="contained" sx={{ backgroundColor: 'burlywood', color: 'black' }}>Contained</Button>
        <Button variant="contained" sx={{ backgroundColor: 'burlywood', color: 'black' }} endIcon={<SendIcon />}>Send</Button>
      </Stack>
      <br></br>
      <Typography variant='h5' color='green'>customize Button & Theam Learn </Typography>
      <Stack spacing={2} direction="row">
        <Custombutton>Custom button</Custombutton>
      </Stack>
      <br></br>
      <Typography variant='h5' color='green'>Box</Typography>
      <Stack spacing={2} direction="row"></Stack>
      <Box sx={{ backgroundColor: 'burlywood', color: 'black' }}>
        <Typography >Learn Box</Typography>
      </Box>
      <br></br>
      <Typography variant='h5' color='green'>Grid</Typography>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Custombutton>size=8</Custombutton>
        </Grid>
        <Grid size={4}>
          <Custombutton>size=4</Custombutton>
        </Grid>
        <Grid size={4}>
          <Custombutton>size=4</Custombutton>
        </Grid>
        <Grid size={8} backgroundColor="green">
          <Custombutton>size=8</Custombutton>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LearnMUI