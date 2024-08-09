import { Container, Link, Typography } from "@mui/material";

export default function Footer(props) {
  const {
    topText = 'Made with ❤️',
    bottomText = '',
    url = '/',
  } = props;
  const today = new Date();
  const year = today.getFullYear();

  return (
    <Container
      component="footer"
      disableGutters
      maxWidth={false}
      sx={{ py: 10 }}
    >
      <Typography gutterBottom variant="body2" textAlign="center">
        {topText}
      </Typography>
      <Typography textAlign="center">
        <Link href={url} underline="none" target="_blank">
          {bottomText}
        </Link>
      </Typography>
      <Typography variant="body2" textAlign="center" >
        &copy; {year} &thinsp;
        All rights reserved.
      </Typography>
    </Container>
  );
};
