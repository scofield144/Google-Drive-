import Head from "next/head";
import {useState, useEffect} from "react";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import SideBar from "@/components/SideBar";
 
const  Home = () => {

  const [assets, setAssets] = useState([]);
 
const   getData= async () => {
  try {
    const data = await fetch(`/api/assets`);
    const media = await data.json();
    console.log("API response", media);
    setAssets(media);
  }
  catch (error) {
    console.log("Error fetching data",error);
  }
} 
useEffect(() => {  
  getData();
}, []);  
  console.log("Assets", assets);
  
  const  onHandleNewUpload = (asset)  => {
    setAssets((prev) => [asset, ...prev]);
  }
  return (
    <>
      <Head> 
        <title>Google Drive Clone</title>
        <meta name="description" content="Main page of Google Drive  " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />        
      </Head> 
      
      <Header />
      
      <div className="main-container">           
        <SideBar onHandleNewUpload={onHandleNewUpload} />
        <Dashboard assets={assets}/>        
      </div>
      
    </>
  )
}  
export default Home;