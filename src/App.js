import { Container } from "@mui/material";

import Layout from "./lib/components/Layout";

import { base } from 'lib/themes';
import { FOOTER_PROPS } from 'lib/constants';


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
