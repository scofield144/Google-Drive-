import Head from "next/head";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";



const  Home =() => {
  return (
    <>
      <Head>
        <title>Google Drive Clone</title>
        <meta name="description" content="Main page of Google Drive  " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />        
      </Head> 
      <Header />
      <div className="main-container">     
      
        
      </div>
    </>
  );
}
export default Home;
