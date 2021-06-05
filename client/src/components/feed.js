import axios from 'axios';
import react, {useState, useEffect} from 'react';
import { getToken } from '../@_services/authentication';

function Feed(){
    const [theme_color, set_theme_color] = useState(localStorage.getItem("theme_color"))
    const [videos, setVideos] = useState([{category:{}, channel: {}, tags: [0]}])
    const [accToken, setaccToken] = useState(getToken)

    useEffect(() => {
        axios.get('http://localhost/feed').then(response => {
            const videos = response.data
            console.log(videos)
            setVideos(videos)

        })
    }, [])

    function Video(props){
        const video = props.video
        const tags = video.tags
        return(
            <div className="p-6 relative" style={{top: "80px"}}>
                <img src={video.thumbnail} className="rounded-lg hover:shadow-xl" />
                <div className="float-left flex my-2">
                    <img src={video.channel.icon} className="h-12 w-12 rounded-full mr-2 mt-1"/>
                    <div className="text-left">
                        <h3 className={"text-md float-left cursor-pointer font-semibold hover:text-"+theme_color+"-500"}>{video.title}</h3>
                        <p className={"text-xs cursor-pointer hover:text-"+theme_color+"-500"}>
                            <a href={"/channel/"+video.channel.name}>
                                {video.channel.name}
                            </a>
                        </p>
                        <div className="flex">
                            <p className={"text-xs cursor-pointer hover:text-"+theme_color+"-500"}>
                                <a href={"/category/"+video.category.name}>
                                    {video.category.name}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div class="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-1 xs:sm:grid-cols-1 gap-2">
           {videos.map(video => 
               <a href={"/live/"+video.id} className="cursor-pointer">
                   <Video video={video}/>
               </a>
           )}
        </div>
    )
}


export default Feed;