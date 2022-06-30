import Head from "../../node_modules/next/head";
import SharePage from "../screens/SharePage";

const Home: React.FC = () =>  {
  return (
   <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <SharePage/>
   </div>
  )
}

export default Home;
