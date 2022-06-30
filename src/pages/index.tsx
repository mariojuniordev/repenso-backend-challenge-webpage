import Head from "../../node_modules/next/head";
import FormPage from "../screens/FormPage";

const Home: React.FC = () =>  {
  return (
   <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <FormPage/>
   </div>
  )
}

export default Home;
