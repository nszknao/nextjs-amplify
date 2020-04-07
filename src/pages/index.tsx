import { NextPage } from "next";
import Head from "next/head";
import { Grommet, grommet } from "grommet";
import API from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";
import awsconfig from "../aws-exports";
import Home from "../components/Home";

API.configure(awsconfig);
PubSub.configure(awsconfig);

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
