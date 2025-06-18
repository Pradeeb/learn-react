import Stack from '@mui/material/Stack'
import './App.css'
import LeftBar from './components/LeftBar'
import Contend from './components/Contend'
import RightBar from './components/RightBar'
import { Box, Container } from '@mui/material'
import NaveBar from './components/NaveBar'
import DashboardLayoutBasic from './components/DashboardLayoutBasic'


function App() {


  return (
    <>
    {/* <Box>
    <NaveBar/>
    <Container maxWidth='xl'>
      <Stack direction="row" spacing={1} sx={{ justifyContent: "space-between", alignItems: "flex-start"}}>
        <LeftBar />
        <Contend />
        <RightBar />
      </Stack>
    </Container>
    </Box> */}
    <DashboardLayoutBasic/>
    </>
  )
}

export default App
