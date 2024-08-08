import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  Toolbar,
} from '@mui/material';

import MenuDrawer from './MenuDrawer';


export default function Bar(props) {
  const {
    appBarStyles,
    navigation = [],
    logo,
    right,
    left,
  } = props;

  return (
    <AppBar {...appBarStyles} >
      <Container disableGutters maxWidth="lg">
        <Toolbar>
          <Box sx={{ flexGrow: 1, pt: 2 }}>
            <Link
              href="/"
              underline="none"
            >
              {logo}
            </Link>
            {left}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
            <Stack spacing={1} direction="row">
              {navigation.map(({ anchor, text, options }) => (
                <Button
                  href={anchor}
                  key={anchor}
                  {...options}
                >
                  {text}
                </Button>
              ))}
              {right}
            </Stack>
          </Box>

          <MenuDrawer navigation={navigation} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
