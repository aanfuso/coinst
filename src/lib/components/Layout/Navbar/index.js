import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  Toolbar,
} from '@mui/material';


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

        </Toolbar>
      </Container>
    </AppBar>
  );
};
