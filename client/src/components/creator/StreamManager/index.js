import Chat from './Chat';
import StreamInfo from './Info';
import QuickActions from './QuickActions';
import {useState} from 'react';

function StreamManager(){
    const [theme_color, setThemeColor] = useState(window.localStorage.getItem("theme_color"));
    return(
        <div className="dark:bg-black bg-white mx-auto flex" style={{height:"100%", width:"100%"}}>
            <div>
                <video autoPlay muted style={{height:"600px", width:"1200px"}} className="bg-black" controls>
                    <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
                    <source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <div className="w-full flex" style={{height: "276px"}}>
                    <StreamInfo theme={theme_color}/>
                    <QuickActions theme={theme_color}/>
                </div>
            </div>
            <Chat />
        </div>
    )
}
export default StreamManager;