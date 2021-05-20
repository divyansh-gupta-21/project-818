import { PlayIcon, PauseIcon } from '@heroicons/react/outline';
import './player.css';
import {useState, useRef, useEffect} from 'react';

function Player(props){
    const [themeColor, setTheme] = useState(window.localStorage.getItem("theme_color"))

    const [vStat, setStat] = useState(true)
    const [videoVol, setVol] = useState(window.localStorage.getItem("videoVol") || 100);
    const [vmuted, setvmuted] = useState(window.localStorage.getItem("vmuted") || false);

    const stream = props.stream;

    const video = useRef(),
    play_btn = useRef(),
    juice = useRef(),
    bufJuice = useRef(),
    mute_btn = useRef()

    useEffect(() => {
        video.current.muted = vmuted;
        video.current.volume = videoVol / 100;
    }, [])


    function togglePlayPause(){
        if(video.current.paused){
            setStat(true)
            video.current.play();
        }else{
            setStat(false)
            video.current.pause();
        }
    }

    function updateJuice() {
        var juicePos = video.current.currentTime / video.current.duration
        juice.current.style.width = juicePos * 100 + "%"
        if(video.current.ended){
            setStat(false)
        }
    }

    function updateBufferedJuice(){
        var duration =  video.current.duration;
        if (duration > 0) {
        for (var i = 0; i < video.current.buffered.length; i++) {
                if (video.current.buffered.start(video.current.buffered.length - 1 - i) < video.current.currentTime) {
                    bufJuice.current.style.width = (video.current.buffered.end(video.current.buffered.length - 1 - i) / duration) * 100 + "%";
                    break;
                }
            }
        }
    }

    function setVolume(vol){
        video.current.volume = vol / 100;
        setVol(vol)
        window.localStorage.setItem("videoVol", vol)
    }

    function mute(){
        if(video.current.muted){
            video.current.muted = false;
            setvmuted(false)
            window.localStorage.setItem("vmuted", false)
        }else{
            video.current.muted = true;
            setvmuted(true)
            window.localStorage.setItem("vmuted", true)
        }
    }

    /*function playStream(){
        if (flvjs.isSupported()) {
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'http://localhost:8000/live/STREAM_NAME.flv'
        });
        flvPlayer.attachMediaElement(video.current);
        flvPlayer.load();
        flvPlayer.play();
    }
    }*/
    
    return(
        <div>
            <div className="c-video rounded-lg">
                <video ref={video} onTimeUpdate={updateJuice} onProgress={updateBufferedJuice} id="liveStream" autostart autoPlay type="video/mp4" className="bg-black rounded-lg w-full animate__animated animate__fadeIn player_video">
                    Your browser does not support the video tag.
                </video>
                 <div className="player_controls rounded-lg">
                    <div className="juice-bar rounded-lg">
                        <div ref={juice} className={"juice rounded-lg bg-"+themeColor+"-500"} style={{width:"100%   "}}></div>
                        <div ref={bufJuice} className={"bufJuice rounded-lg bg-"+themeColor+"-500"} style={{width:"0px"}}></div>
                    </div>
                    <div className="player-buttons flex">
                        <button ref={play_btn} onClick={togglePlayPause} id="play_pause" className="text-white">
                            {vStat ? <PauseIcon className="w-6 h-6"/> :<PlayIcon className="w-6 h-6"/>}
                        </button>
                        <input onChange={(e) => setVolume(e.target.value)} type="range" min="1" max="100" value={videoVol} className="video-vol-control" />
                        <button className="text-white" ref={mute_btn} onClick={mute}>x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Player;