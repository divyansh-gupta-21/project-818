import { EyeIcon, ThumbUpIcon, ThumbDownIcon, HeartIcon, StarIcon, UserIcon, ChevronDownIcon, FastForwardIcon, ShareIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Navbar from '../NavBar';
import Chat from './Chat';
import Player from './player';
import Recommendations from './Recommendations'

const stats = {
    title: "Valorant live India",
    viewers: 13657,
    ratings: {
        likes: 1000,
        dislikes: 30,
        shares: 10
    },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed porta neque. Nam elementum tellus fermentum elit pellentesque, et iaculis mi sodales. Duis imperdiet purus quis mauris consectetur, pharetra venenatis ex efficitur. Vivamus non risus dictum, semper est id, vulputate massa. Aenean id mi ut eros rutrum rhoncus a id ligula. Donec suscipit tincidunt dui ac gravida. In hac habitasse platea dictumst. Morbi bibendum mi sed risus iaculis finibus ac at lorem. Suspendisse maximus, est sit amet consequat aliquam, diam velit pharetra est, at ultrices nunc nulla lacinia nulla. Praesent ut velit augue. Nulla finibus suscipit quam eleifend mollis. Aenean ac bibendum lectus, a condimentum lorem.

Etiam euismod imperdiet dolor eget efficitur. Suspendisse nisi dui, tincidunt ut viverra sit amet, volutpat et nisl. In hac habitasse platea dictumst. Proin congue sagittis odio, non lobortis massa porta id. Praesent ultrices sapien eget mattis semper. Pellentesque et ultrices arcu. Maecenas id interdum tortor. Phasellus semper placerat arcu, dapibus dignissim erat pretium non. Curabitur eleifend ultrices metus ac consequat. Curabitur semper arcu vitae justo lobortis, vel varius velit pharetra. Suspendisse vel lacinia mi. Vestibulum sed diam eget tellus hendrerit vulputate at vel dolor. Donec sit amet accumsan lectus. Nunc neque nisl, finibus in pulvinar pharetra, aliquam sit amet nunc.

Vivamus purus ligula, mollis quis metus congue, vestibulum semper nisi. Sed malesuada, felis ac dapibus pretium, magna leo facilisis purus, at finibus libero lacus quis metus. Nullam neque eros, faucibus ac tempus et, fermentum sit amet metus. Ut quis neque vitae tortor rhoncus congue. Cras in nulla non nisi faucibus viverra sodales porta sapien. Praesent scelerisque, nunc eu tempus convallis, massa arcu rutrum est, vitae pulvinar sem eros eget metus. Integer ac elit posuere, viverra dui euismod, lobortis velit. Vivamus semper venenatis nisl, quis finibus lectus gravida in. Phasellus sagittis imperdiet diam, in aliquet erat lobortis id.`,
    channel:{
        logo: "https://yt3.ggpht.com/ytc/AAUvwngpY9Bhe1frEJLe0D5MH5oqD0B22lgQV_NDUg7EvTs=s88-c-k-c0x00ffffff-no-r",
        name: "TbOne",
        followers: 1200000
    },
    tags: ["Valorant", "Live", "India"]
}

function StreamPreview({match}){
    const [themeColor, setTheme] = useState(window.localStorage.getItem("theme_color"))

    return(
        <div className="min-h-screen">
            <Navbar />
            <div className="flex w-full bg-white dark:bg-black px-20 h-auto" style={{"paddingTop": "104px"}}>
                <div className="w-full bg-white dark:bg-black mx-2 relative">
                    <Player stream={match.params.stream_id}/>
                    <div className="video-info">
                        <h1 className="text-2xl my-3">{stats.title}</h1>
                        <div className="flex w-full -mt-2">
                            <span className={"text-md font-semibold text-gray-400 flex w-full text-"+themeColor+"-600"}><UserIcon className="w-4 h-4 mt-1" />{numberWithCommas(stats.viewers)} <span className="text-gray-500 font-light"> &nbsp; watching | Started streaming <span className="time_started">2 hours ago</span></span></span>
                            <span className="flex float-right">
                                <span className="text-md font-semibold text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 cursor-pointer flex mx-2 bg-gray-100 py-1 px-2 rounded">
                                    <ThumbUpIcon className="w-4 h-4 mt-1 mx-1" />
                                    {numFormatter(stats.ratings.likes)}
                                </span>
                                <span className="text-md font-semibold text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 cursor-pointer flex mx-2 bg-gray-100 py-1 px-2 rounded">
                                    <ThumbDownIcon className="w-4 h-4 mt-1 mx-1" />
                                    {numFormatter(stats.ratings.dislikes)}
                                </span>
                                <span className="text-md font-semibold text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 cursor-pointer flex mx-2 bg-gray-100 py-1 px-2 rounded">
                                    <ShareIcon className="w-4 h-4 mt-1 mx-1" />
                                    SHARE
                                </span>
                            </span>
                        </div>
                    </div>
                    <hr className="my-4 border border-gray-200 rounded dark:border-gray-900"/>
                    <div className="video-details w-full">
                        <div className="channel-info flex w-full">
                            <img src={stats.channel.logo} className="w-14 rounded-full"/>
                            <div className="mx-4 w-full">
                                <span className="text-lg">{stats.channel.name}</span>
                                <span className="ml-2 px-2 py-0.5 bg-red-600 text-white font-semibold rounded text-sm animate_animated animate__pulse" style={{'zIndex': "5"}}>LIVE</span>
                                <br />
                                <span className="text-sm text-gray-400">{numFormatter(stats.channel.followers)} followers</span>
                            </div>
                            <div className="mt-2 mr-2">
                                <button className={"rounded bg-"+themeColor+"-500 hover:bg-"+themeColor+"-600 px-6 py-1 text-white flex"}><HeartIcon className="w-5 h-5 mt-0.5 mx-1"/> Follow</button>
                            </div>
                            <div className="mt-2">
                                <button className={"rounded bg-gray-200 hover:bg-gray-300 px-6 py-1 text-black flex dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"}><StarIcon className="w-5 h-5 mt-0.5 mx-1"/> Subscribe</button>
                            </div>
                        </div>
                        <br />
                        <span className="text-gray-600">
                            {stats.description}
                        </span>
                    </div>
                </div>
                <div className="w-1/3 mx-2">
                    <Chat />
                    <Recommendations />
                </div>
            </div>
        </div>
    )
}

function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return Math.round((num/1000).toFixed(1)) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return numberWithCommas(num); // if value < 1000, nothing to do
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default StreamPreview;