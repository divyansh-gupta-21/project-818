import { BellIcon, UserIcon, ArrowLeftIcon, PlayIcon, ChevronRightIcon, CreditCardIcon, MoonIcon, QuestionMarkCircleIcon, LocationMarkerIcon, LogoutIcon, MailIcon, ShieldExclamationIcon, ClipboardListIcon, ShieldCheckIcon,  NewspaperIcon, ChipIcon } from '@heroicons/react/outline'
import { useState } from 'react';

import Navbar from '../../NavBar';

import Dashboard_home from './dashboard';
import StreamManager from '../StreamManager/index';

function Dashboard(){
    const [activeTab, setActiveTab] = useState("general")
    const [theme_color, set_theme_color] = useState(localStorage.getItem("theme_color"))
    
    function SideBar(){
        return(
        <div className="min-h-screen bg-white dark:bg-black border-r border-gray-200 sm:w-full dark:border-gray-900" style={{"width": "300px"}}>
            <div style={{width:"100%", "height": "64px"}} className="bg-white dark:bg-black"></div>
            <div className="w-full h-auto px-4 py-3 bg-white dark:bg-black">
                <h2 className="text-xl font-semibold flaot-left mb-2">Creator Dashboard</h2>
                <ul className="m-0">
                    <li onClick={() => setActiveTab("home")} className={activeTab == "home" ? "cursor-pointer hover:bg-gray-100 bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-lg dark:text-white py-2 px-2 text-lg flex" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-white py-2 px-2 text-lg flex"}>
                        <span className="h-10 w-10 p-2 bg-gray-200 dark:bg-gray-600 rounded-full"><ChipIcon /></span>
                        <span className="mt-1 mx-2">Home</span>
                    </li>
                    <li onClick={() => setActiveTab("streamManager")} className={activeTab == "streamManager" ? "cursor-pointer hover:bg-gray-100 dark:bg-gray-900 bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-white py-2 px-2 text-lg flex" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-white py-2 px-2 text-lg flex"}>
                        <span className="h-10 w-10 p-2 bg-gray-200 dark:bg-gray-600 rounded-full"><ShieldCheckIcon /></span>
                        <span className="mt-1 mx-2">Stream Manager</span>
                    </li>
                    <hr className="my-2 border dark:border-gray-900"/>
                    <li onClick={() => setActiveTab("community")} className={activeTab == "community" ? "cursor-pointer hover:bg-gray-100 bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-lg dark:text-white py-2 px-2 text-lg flex" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-white py-2 px-2 text-lg flex"}>
                        <span className="h-10 w-10 p-2 bg-gray-200 dark:bg-gray-600 rounded-full"><LocationMarkerIcon /></span>
                        <span className="mt-1 mx-2">Community</span>
                    </li>
                    <li onClick={() => setActiveTab("settings")} className={activeTab == "settings" ? "cursor-pointer hover:bg-gray-100 bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-lg dark:text-white py-2 px-2 text-lg flex" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-white py-2 px-2 text-lg flex"}>
                        <span className="h-10 w-10 p-2 bg-gray-200 dark:bg-gray-600 rounded-full"><LocationMarkerIcon /></span>
                        <span className="mt-1 mx-2">Settings</span>
                    </li>
                    <hr className="my-2 border dark:border-gray-900"/>
                    <li onClick={() => setActiveTab("moderation")} className={activeTab == "moderation" ? "cursor-pointer hover:bg-gray-100 bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-lg dark:text-white py-2 px-2 text-lg flex" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-white py-2 px-2 text-lg flex"}>
                        <span className="h-10 w-10 p-2 bg-gray-200 dark:bg-gray-600 rounded-full"><CreditCardIcon /></span>
                        <span className="mt-1 mx-2">Moderation</span>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
    return(
        <div>
            <Navbar search="none"/>
            <SideBar />
            <div className="bg-white dark:bg-black absolute settings-tabs items-center" style={{top:"64px", left:"300px"}}>
                {activeTab == "home" ? <Dashboard_home /> : ''}
                {activeTab == "streamManager" ? <StreamManager /> : ''}
                {/*{activeTab == "location" ? <Location /> : ''}
                {activeTab == "live_shows" ? <Live_shows /> : ''}
                {activeTab == "blocking" ? <Blocking /> : ''}
    {activeTab == "payments" ? <Payments /> : ''*/}
            </div>
        </div>
    )
}

export default Dashboard;