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
        try{
            video.current.muted = vmuted;
            video.current.volume = videoVol / 100;
        }catch{
            return
        }
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
                        <div ref={juice} className={"juice rounded-lg "+themeColor} style={{width:"100%   "}}></div>
                        <div ref={bufJuice} className={"bufJuice rounded-lg "+themeColor} style={{width:"0px"}}></div>
                    </div>
                    <div class="bg-gray-800 text-white dark:bg-gray-900 dark:text-white lg:rounded-b-xl py-4 px-1 sm:px-3 lg:px-1 xl:px-3 grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-5 xl:grid-cols-7 items-center w-full">
                        <button type="button" class="mx-auto">
                            <svg width="24" height="24" fill="none">
                            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </button>
                        <button type="button" class="hidden sm:block lg:hidden xl:block mx-auto">
                            <svg width="17" height="18">
                            <path d="M0 0h2v18H0V0zM4 9l13-9v18L4 9z" fill="currentColor" />
                            </svg>
                        </button>
                        <button type="button" class="mx-auto">
                            <svg width="34" height="39" fill="none">
                            <path d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z" fill="currentColor" />
                            <path d="M1 22c0 8.837 7.163 16 16 16s16-7.163 16-16S25.837 6 17 6" stroke="currentColor" stroke-width="1.5" />
                            <path d="M17 0L9 6l8 6V0z" fill="currentColor" />
                            </svg>
                        </button>
                        <button type="button" class="mx-auto" ref={play_btn} onClick={togglePlayPause} id="play_pause">
                            <svg width="50" height="50" fill="none">
                            <circle class="text-gray-300 dark:text-gray-500" cx="25" cy="25" r="24" stroke="currentColor" stroke-width="1.5" />
                            <path d="M18 16h4v18h-4V16zM28 16h4v18h-4z" fill="currentColor" />
                            </svg>
                        </button>
                        <button type="button" class="mx-auto">
                            <svg width="34" height="39" fill="none">
                            <path d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z" fill="currentColor" />
                            <path d="M33 22c0 8.837-7.163 16-16 16S1 30.837 1 22 8.163 6 17 6" stroke="currentColor" stroke-width="1.5" />
                            <path d="M17 0l8 6-8 6V0z" fill="currentColor" />
                            </svg>
                        </button>
                        <button type="button" class="hidden sm:block lg:hidden xl:block mx-auto">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <path d="M17 0H15V18H17V0Z" fill="currentColor" />
                            <path d="M13 9L0 0V18L13 9Z" fill="currentColor" />
                            </svg>
                        </button>
                        <button type="button" class="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-500 dark:border-gray-600 dark:text-gray-400">
                            1.0x
                        </button>
                    </div>
                   {/* <div className="player-buttons flex display-none">
                        <button ref={play_btn} onClick={togglePlayPause} id="play_pause" className="text-white">
                            {vStat ? <PauseIcon className="w-6 h-6"/> :<PlayIcon className="w-6 h-6"/>}
                        </button>
                        <input onChange={(e) => setVolume(e.target.value)} type="range" min="1" max="100" value={videoVol} className="video-vol-control" />
                        <button className="text-white" ref={mute_btn} onClick={mute}>x</button>
    </div> */}
                </div>
            </div>
        </div>
    )
}


export default Player;