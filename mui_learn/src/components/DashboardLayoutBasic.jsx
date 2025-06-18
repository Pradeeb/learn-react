import React from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  marginBottom: theme.spacing(1),
}));

const NAV_ITEMS = [
  { title: 'Dashboard', icon: <DashboardIcon /> },
  { title: 'Orders', icon: <ShoppingCartIcon /> },
  { title: 'Reports', icon: <BarChartIcon /> },
  { title: 'Sales', icon: <DescriptionIcon /> },
  { title: 'Traffic', icon: <DescriptionIcon /> },
  { title: 'Integrations', icon: <LayersIcon /> },
];

export default function DashboardLayoutBasic(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {NAV_ITEMS.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            MUI Dashboard Layout
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile drawer */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {/* Dashboard Content */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Skeleton height={20} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton height={20} />
          </Grid>
          <Grid item xs={4}>
            <Skeleton height={100} />
          </Grid>
          <Grid item xs={8}>
            <Skeleton height={100} />
          </Grid>
          <Grid item xs={12}>
            <Skeleton height={150} />
          </Grid>
          <Grid item xs={3}>
            <Skeleton height={100} />
          </Grid>
          <Grid item xs={3}>
            <Skeleton height={100} />
          </Grid>
          <Grid item xs={3}>
            <Skeleton height={100} />
          </Grid>
          <Grid item xs={3}>
            <Skeleton height={100} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
