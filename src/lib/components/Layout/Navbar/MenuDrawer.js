import { useState } from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function MenuDrawer(props) {
  const { navigation = [] } = props;
  const [isMenuOpen, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  }

  const menu = () => (
    <Box
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      role="presentation"
      sx={{width: 250}}
    >
      <List>
        {navigation.map(({anchor, text}) => (
          <ListItemButton key={text} component="a" href={anchor} >
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'center' }}>
        {/* <SocialLinks /> */}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: { md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="main menu"
        aria-controls="menu-appbar"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
      >
        {menu()}
      </Drawer>
    </Box>
  );
};

export default MenuDrawer;
