import { AppBar, Avatar, Badge, Stack, styled, Toolbar, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

function NaveBar() {

  const CustomToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })
  return (
    <AppBar position='sticky'>
      <CustomToolbar>
        <Typography>This is Nave</Typography>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon color="action" />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&r=0&o=5&pid=1.9" />
        </Stack>

      </CustomToolbar>
    </AppBar>
  )
}

export default NaveBar