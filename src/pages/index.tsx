import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

import{ Metadata } from 'next';

export const metadata: Metadata = {
other:{
"dscvr:canvas:version": "vNext",
"og:image":"next.svg"
}

}
const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>💭SolFeed!</title>
        <meta
          name="description"
          content="This site will fly high 🦤"
        />
      <meta name="dscvr:canvas:version" content="vNext"/>
      <meta name="og:image" content="https://my-canvas.com/preview-image.png"/>
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
