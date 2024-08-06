import { Container } from "@mui/material";

import Layout from "./lib/components/Layout";

import { base } from 'lib/themes';

const FOOTER_PROPS = {
  topText: 'Made with ❤️ by',
  bottomText: 'Agustin Anfuso',
  url: 'https://anfu.space',
};

function App() {
  return (
    <Layout
      theme={base}
      footerProps={FOOTER_PROPS}
    >
      <Container sx={{ height: '65vh', mt: 10 }}>
      </Container>
    </Layout>
  );
}

export default App;
