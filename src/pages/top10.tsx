import Head from "../../node_modules/next/head";
import TopTenTable from "../screens/TopTenTable";

const Home: React.FC = () =>  {
  return (
   <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <TopTenTable/>
   </div>
  )
}

export default Home;
