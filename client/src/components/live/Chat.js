import { CubeIcon, GiftIcon } from '@heroicons/react/outline';
import {useState} from 'react';

function Chat(){
    const [themeColor, setTheme] = useState(window.localStorage.getItem("theme_color"))
    const [chatVisible, setChat] = useState("hidden")

    function toggleChat(){
        setChat("hidden")
    }

    return(
        <div className="bg-white dark:bg-black dark:border-gray-800 border border-gray-200 rounded-lg" style={{"height": "830px"}}>
            <div className="border-b border-gray-200 py-1 px-2 dark:border-gray-800" style={{"height": "40px"}}>
                <span className="text-lg" onClick={toggleChat}>Live chat</span>
            </div>
            <div style={{"height": "700px", "display": chatVisible}} className="border-b-2 border-gray-200 dark:border-gray-800 overflow-auto">
                <ul className="m-0 h-full w-full px-3 pb-3">
                    <li className="w-full h-auto text-sm my-3">
                        <span className="text-green-600">divyanshg21 :</span>
                        &nbsp;
                        <span className="">
                            This is a very short message...Please respond :)
                        </span>
                    </li>
                    <li className="w-full h-auto text-sm my-3">
                        <span className="text-purple-600">divyanshg21 :</span>
                        &nbsp;
                        <span className="">
                            This is a very short message...Please respond :)...now this is becoming bigger and bigger and bigger
                        </span>
                    </li>
                </ul>
            </div>
            <div className="w-full bg-white dark:bg-black  rounded-b-lg px-4 py-1" style={{"height": "88px", "display": chatVisible}}>
                <input className="bg-gray-200 rounded px-2 py-2 mb-1 mt-2 w-full mb-1 border border-gray-300 focus:outline-none focus:border-gray-400 dark:bg-gray-900 dark:border-gray-800 dark:focus:border-gray-700" placeholder="Send a message"></input>
                <div className="flex w-full">
                    <span className={"channel_points flex w-full text-"+themeColor+"-500"} title="Chat points"><CubeIcon className="w-4 mr-1" /> 0</span>
                    <span className={"rounded-full cursor-pointer hover:text-"+themeColor+"-500"} title="Send a gift"><GiftIcon title="Send a gift" className="w-4 mx-1 mt-1"/></span>
                </div>
            </div>
        </div>
    )
}

export default Chat;