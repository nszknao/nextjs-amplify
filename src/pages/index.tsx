import { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home";
import { Grommet, grommet } from "grommet";

const theme = {};

const App: NextPage = () => (
  <Grommet theme={grommet}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Home />

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </Grommet>
);

export default App;
