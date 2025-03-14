import VideoCard from './VideoCard'
import ImageCard from './ImageCard'
const Dashboard = ({assets,searchTerm,setSearchTerm }) => {
    return (
        <main>
            <h2>
                Welcome to Drive AI
            </h2>
            <input
                className="main-search"
                placeholder="🔍 Search on the Drive"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <div className="uploads-container">
            {assets?.length > 0 ?(assets.map(asset => 
                asset.resource_type == "image" &&
                    <ImageCard key={asset.asset_id} asset={asset} />
                ||
                    <VideoCard key={asset.asset_id} asset={asset} />               
            ))
            :
            ( <p>No assets found</p>)
            }
                
            </div>
        </main>    )
}
export  default Dashboard;