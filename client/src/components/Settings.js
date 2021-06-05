import react, {useState} from 'react';
import Navbar from './NavBar';
import { BellIcon, UserIcon, ArrowLeftIcon, PlayIcon, ChevronRightIcon, CreditCardIcon, MoonIcon, QuestionMarkCircleIcon, LocationMarkerIcon, LogoutIcon, MailIcon, ShieldExclamationIcon, ClipboardListIcon, ShieldCheckIcon,  NewspaperIcon, ChipIcon } from '@heroicons/react/outline'

import Profile from './settings/Profile';
import Security_Login from './settings/Security_Login';
import Octane from './settings/Octane';
import Live_shows from './settings/Live_shows';
import Blocking from './settings/Blocking';
import Payments from './settings/Payments';

function Settings(){
    const [activeTab, setActiveTab] = useState("Profile")
    const [themeColor, setTheme] = useState(window.localStorage.getItem("theme_color"))

    function SideBar(){
        return(
        <div className="min-h-screen bg-white dark:bg-black border-r border-gray-200 sm:w-full dark:border-gray-900" style={{"width": "300px"}}>
            <div style={{width:"100%", "height": "64px"}} className="bg-white dark:bg-black"></div>
            <div className="w-full h-auto px-4 py-3 bg-white dark:bg-black">
                <h2 className="text-2xl font-semibold flaot-left mb-2">Settings</h2>
                <ul className="m-0">
                    <li onClick={() => setActiveTab("Profile")} className={activeTab == "Profile" ? "cursor-pointer hover:bg-gray-100 bg-gray-100 "+themeColor+" rounded-lg text-white py-2 px-2 text-lg flex my-1" : "cursor-pointer hover:bg-gray-100 my-1 rounded-lg dark:text-white dark:hover:bg-gray-900 py-2 px-2 text-lg flex"}>
                        <span className={activeTab == "Profile" ? "text-white h-10 w-10 p-2 bg-gray-200 dark:bg-transparent rounded-full" :"h-10 w-10 p-2 bg-gray-200 dark:bg-transparent dark:text-"+themeColor+"-500 rounded-full"}><ChipIcon /></span>
                        <span className="mt-1 mx-2">Profile</span>
                    </li>
                    <li onClick={() => setActiveTab("security_login")} className={activeTab == "security_login" ? "cursor-pointer hover:bg-gray-100 "+themeColor+" bg-gray-100 rounded-lg text-white my-1 py-2 px-2 text-lg flex" : "cursor-pointer my-1 hover:bg-gray-100 rounded-lg dark:text-white dark:hover:bg-gray-900 py-2 px-2 text-lg flex"}>
                        <span className={activeTab == "security_login" ? "text-white h-10 w-10 p-2 bg-gray-200 dark:bg-transparent rounded-full" :"h-10 w-10 p-2 bg-gray-200 dark:bg-transparent dark:text-"+themeColor+"-500 rounded-full"}><ShieldCheckIcon /></span>
                        <span className="mt-1 mx-2">Security and login</span>
                    </li>
                    <hr className="my-2 border dark:border-gray-900"/>
                    <li onClick={() => setActiveTab("Octane")} className={activeTab == "Octane" ? "cursor-pointer hover:bg-gray-100 bg-gray-100 "+themeColor+" rounded-lg text-white py-2 px-2 text-lg flex my-1" : "cursor-pointer hover:bg-gray-100 my-1 rounded-lg dark:text-white dark:hover:bg-gray-900 py-2 px-2 text-lg flex"}>
                        <span className={activeTab == "Octane" ? "text-white h-10 w-10 p-2 bg-gray-200 dark:bg-transparent rounded-full" :"h-10 w-10 p-2 bg-gray-200 dark:bg-transparent dark:text-"+themeColor+"-500 rounded-full"}><LocationMarkerIcon /></span>
                        <span className="mt-1 mx-2">Strixx Octane</span>
                    </li>
                    <li onClick={() => setActiveTab("live_shows")} className={activeTab == "live_shows" ? "cursor-pointer hover:bg-gray-100 bg-gray-100 "+themeColor+" rounded-lg text-white py-2 px-2 text-lg flex my-1" : "cursor-pointer hover:bg-gray-100 my-1 rounded-lg dark:text-white dark:hover:bg-gray-900 py-2 px-2 text-lg flex"}>
                        <span className={activeTab == "live_shows" ? "text-white h-10 w-10 p-2 bg-gray-200 dark:bg-transparent rounded-full" :"h-10 w-10 p-2 bg-gray-200 dark:bg-transparent dark:text-"+themeColor+"-500 rounded-full"}><PlayIcon /></span>
                        <span className="mt-1 mx-2">Live Shows</span>
                    </li>
                    <li onClick={() => setActiveTab("blocking")} className={activeTab == "blocking" ? "cursor-pointer hover:bg-gray-100 bg-gray-100 "+themeColor+" rounded-lg text-white py-2 px-2 text-lg flex my-1" : "cursor-pointer hover:bg-gray-100 my-1 rounded-lg dark:text-white dark:hover:bg-gray-900 py-2 px-2 text-lg flex"}>
                        <span className={activeTab == "blocking" ? "text-white h-10 w-10 p-2 bg-gray-200 dark:bg-transparent rounded-full" :"h-10 w-10 p-2 bg-gray-200 dark:bg-transparent dark:text-"+themeColor+"-500 rounded-full"}><LocationMarkerIcon /></span>
                        <span className="mt-1 mx-2">Blocking</span>
                    </li>
                    <hr className="my-2 border dark:border-gray-900"/>
                    <li onClick={() => setActiveTab("payments")} className={activeTab == "payments" ? "cursor-pointer hover:bg-gray-100 bg-gray-100 "+themeColor+" rounded-lg text-white py-2 px-2 text-lg flex my-1" : "cursor-pointer hover:bg-gray-100 my-1 rounded-lg dark:text-white dark:hover:bg-gray-900 py-2 px-2 text-lg flex"}>
                        <span className={activeTab == "payments" ? "text-white h-10 w-10 p-2 bg-gray-200 dark:bg-transparent rounded-full" :"h-10 w-10 p-2 bg-gray-200 dark:bg-transparent dark:text-"+themeColor+"-500 rounded-full"}><CreditCardIcon /></span>
                        <span className="mt-1 mx-2">Payments</span>
                    </li>
                </ul>
            </div>
        </div>
        )
    }

    return(
        <div>
            <Navbar />
            <SideBar />
            <div className="bg-white dark:bg-black absolute settings-tabs items-center" style={{top:"64px", left:"300px"}}>
                {activeTab == "Profile" ? <Profile /> : ''}
                {activeTab == "security_login" ? <Security_Login /> : ''}
                {activeTab == "Octane" ? <Octane /> : ''}
                {activeTab == "live_shows" ? <Live_shows /> : ''}
                {activeTab == "blocking" ? <Blocking /> : ''}
                {activeTab == "payments" ? <Payments /> : ''}
            </div>
        </div>
    )
}

export default Settings;