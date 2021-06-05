import { useState } from 'react';
import {CSSTransition} from 'react-transition-group';
import { BellIcon, UserIcon, ArrowLeftIcon, ChevronRightIcon, MoonIcon, QuestionMarkCircleIcon, ColorSwatchIcon, LogoutIcon, MailIcon, ShieldExclamationIcon, ClipboardListIcon, NewspaperIcon, CogIcon, FilmIcon, StarIcon, CashIcon, UserRemoveIcon, AdjustmentsIcon } from '@heroicons/react/outline'

function ProfileMenu(props){
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const [dm, setdm] = useState(localStorage.getItem("theme") == "dark" ? true : false)
    const [theme_color, set_theme_color] = useState(localStorage.getItem("theme_color"))

    function calcHeight(el){
        const height = el.offsetHeight + 34;
        setMenuHeight(height)
    }

    function ProfileMenuItem(props){
        return (
            <a href={props.linkTo} className="menu-item cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg dark:text-white" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.leftIcon && <span className="icon-button bg-gray-200 dark:bg-gray-500 mr-2 h-10 w-10">{props.leftIcon}</span>}
                {props.children}
                {props.rightIcon && <span className="icon-right text-black h-5 w-5 text-gray-400 dark:text-gray-500 float-right mr-2">{props.rightIcon}</span>}
            </a>
        )
    }

    function handleThemeChange(e){
        const theme = e
        localStorage.setItem("theme_color", theme);
        set_theme_color(theme)
    }

    return(
        <div style={{height: menuHeight, display: props.show}} className="dropdown dark:bg-gray-900 bg-white rounded-xl shadow-xl border border-gray-100 dark:border-gray-900">
            <CSSTransition  in={activeMenu == 'main'} unmountOnExit timeout={200} classNames="menu-primary" onEnter={calcHeight}>
                <div className="menu">
                    <ProfileMenuItem linkTo={"/user/divyansh"}>
                       <div className="flex w-full">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="h-10 w-10 bg-gray-200 rounded-full my-2" />
                            <div className="flex-wrap">
                                <span className="text-lg mx-2 float-left">
                                    Divyansh Gupta
                                </span>
                                <span className="text-sm text-gray-300 float-left mx-2">See your profile</span>
                            </div>
                       </div>
                    </ProfileMenuItem>
                    <hr className="my-3"/>
                    <ProfileMenuItem goToMenu="settings" leftIcon={<AdjustmentsIcon />} rightIcon={<ChevronRightIcon />}>
                        Settings & privacy
                    </ProfileMenuItem>
                    <ProfileMenuItem goToMenu="help" leftIcon={<QuestionMarkCircleIcon />} rightIcon={<ChevronRightIcon />}>
                        Help & support
                    </ProfileMenuItem>
                    <ProfileMenuItem goToMenu="display" leftIcon={<MoonIcon />} rightIcon={<ChevronRightIcon />}>
                        Display
                    </ProfileMenuItem>
                    <hr className="my-2"/>
                    <ProfileMenuItem linkTo={'/creator/channel'} leftIcon={<UserRemoveIcon />}>
                        Channel
                    </ProfileMenuItem>
                    <ProfileMenuItem linkTo={'/creator/dashboard'} leftIcon={<FilmIcon />}>
                        Creator Dashboard
                    </ProfileMenuItem>
                    <hr className="my-2"/>
                    <ProfileMenuItem linkTo={'/subscriptions'} leftIcon={<StarIcon />}>
                        Subscriptions
                    </ProfileMenuItem>
                    <ProfileMenuItem linkTo={'/wallet'} leftIcon={<CashIcon />}>
                        Wallet
                    </ProfileMenuItem>
                    <hr className="my-2"/>
                    <ProfileMenuItem leftIcon={<LogoutIcon />}>
                        Log Out
                    </ProfileMenuItem>
                </div>
            </CSSTransition>
            <CSSTransition in={activeMenu == 'settings'} unmountOnExit timeout={200} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">
                    <ProfileMenuItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                       <span className="font-bold text-lg">Settings & privacy</span>
                    </ProfileMenuItem>
                    <ProfileMenuItem linkTo={"/settings"} leftIcon={<CogIcon />}>
                        Settings
                    </ProfileMenuItem>
                    <ProfileMenuItem leftIcon={<ClipboardListIcon />}>
                        Activity log
                    </ProfileMenuItem>
                    <ProfileMenuItem leftIcon={<NewspaperIcon />}>
                        Feed Prefrences
                    </ProfileMenuItem>
                    <ProfileMenuItem>
                        Settings
                    </ProfileMenuItem>
                    <ProfileMenuItem>
                        Settings
                    </ProfileMenuItem>
                    <ProfileMenuItem>
                        Settings
                    </ProfileMenuItem>
                    <ProfileMenuItem>
                        Settings
                    </ProfileMenuItem>
                    <ProfileMenuItem>
                        Settings
                    </ProfileMenuItem>
                    <ProfileMenuItem>
                        Settings
                    </ProfileMenuItem>
                </div>
            </CSSTransition>
             <CSSTransition in={activeMenu == 'help'} unmountOnExit timeout={200} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">
                    <ProfileMenuItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                       <span className="font-bold text-lg">Help & support</span>
                    </ProfileMenuItem>
                    <ProfileMenuItem leftIcon={<QuestionMarkCircleIcon />}>
                        Help Centre
                    </ProfileMenuItem>
                    <ProfileMenuItem leftIcon={<MailIcon />}>
                        Support inbox
                    </ProfileMenuItem>
                    <ProfileMenuItem leftIcon={<ShieldExclamationIcon />}>
                        Report a problem
                    </ProfileMenuItem>
                </div>
            </CSSTransition>
             <CSSTransition in={activeMenu == 'display'} unmountOnExit timeout={200} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">
                    <ProfileMenuItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
                       <span className="font-bold text-lg">Display</span>
                    </ProfileMenuItem>
                    <a href="#" className="menu-item h-auto rounded-lg dark:text-white">
                        <span className="icon-button bg-gray-200 dark:bg-gray-500 mr-2 h-10 w-10"><MoonIcon /></span>
                        <span className="font-bold">
                            Dark Mode
                        </span>
                    </a>
                    <a href="#" className="menu-item h-auto rounded-lg dark:text-white w-full" style={{height: "100px"}}>
                        <span className="font-bold ml-12 float-left mt-8 w-full text-left">
                            <div className="flex px-2 py-1 rounded my-2 hover:bg-gray-100 dark:hover:bg-gray-800 w-100">
                                <label for="dmoff" className="mx-2 float-left w-1/2 font-light">Off</label>
                                <input type="radio" id="dmoff" on className="float-right w-1/2 my-2" name="dark_mode" value="0" />
                            </div>
                            <div className="flex px-2 py-1 rounded my-2 hover:bg-gray-100 dark:hover:bg-gray-800 w-100">
                                <label for="dmon" className="mx-3 float-left w-1/2 font-light">On</label>
                                <input type="radio" id="dmon" on className="float-right w-1/2 my-2" name="dark_mode" value="1"/>
                            </div><br/>
                        </span>
                    </a>
                    <a href="#" className="menu-item h-auto rounded-lg dark:text-white">
                        <span className="icon-button bg-gray-200 dark:bg-gray-500 mr-2 h-10 w-10"><ColorSwatchIcon /></span>
                        <span className="font-bold">
                            Theme
                        </span>
                    </a>
                    <a href="#" className="menu-item h-auto rounded-lg dark:text-white">
                        <span className="font-bold float-left mt-2 -mx-5 flex mb-2">
                            <div className="color bg-gradient-to-br from-fuchsia-500 to-purple-600 focus:from-purple-600 focus:to-fuchsia-500 focus:outline-none rounded-full h-10 w-10 mx-1 text-xs pt-10" onClick={() => handleThemeChange("bg-gradient-to-br from-fuchsia-500 to-purple-600 focus:from-purple-600 focus:to-fuchsia-500 focus:outline-none")}></div>
                            <div className="color bg-gradient-to-br from-light-blue-400 to-indigo-500 focus:to-light-blue-400 focus:from-indigo-500 rounded-full h-10 w-10 mx-1 text-xs pt-10 focus:outline-none" onClick={() => handleThemeChange("bg-gradient-to-br from-light-blue-400 to-indigo-500 focus:to-light-blue-400 focus:from-indigo-500 focus:outline-none")}></div>
                            <div className="color bg-gradient-to-br from-cyan-400 to-light-blue-500 focus:from-light-blue-500 focus:to-cyan-400 rounded-full h-10 w-10 mx-1 text-xs pt-10 focus:outline-none" onClick={() => handleThemeChange("bg-gradient-to-br from-cyan-400 to-light-blue-500 focus:from-light-blue-500 focus:to-cyan-400 focus:outline-none")}></div>
                            <div className="color bg-gradient-to-br from-green-400 to-cyan-500 focus:from-cyan-500 focus:to-green-400 rounded-full h-10 w-10 mx-1 text-xs pt-10 focus:outline-none" onClick={() => handleThemeChange("bg-gradient-to-br from-green-400 to-cyan-500 focus:from-cyan-500 focus:to-green-400 focus:outline-none")}></div>
                            <div className="color bg-gradient-to-br from-yellow-400 to-orange-500 focus:from-orange-500 focus:to-yellow-400 rounded-full h-10 w-10 mx-1 text-xs pt-10 focus:outline-none" onClick={() => handleThemeChange("bg-gradient-to-br from-yellow-400 to-orange-500 focus:from-orange-500 focus:to-yellow-400 focus:outline-none")}></div>
                            <div className="color bg-gradient-to-br from-pink-500 to-rose-500 focus:from-rose-500 focus:to-pink-500 rounded-full h-10 w-10 mx-1 text-xs pt-10 focus:outline-none" onClick={() => handleThemeChange("bg-gradient-to-br from-pink-500 to-rose-500 focus:from-rose-500 focus:to-pink-500 focus:outline-none")}></div>
                        </span>
                    </a>
                </div>
            </CSSTransition>
        </div>
    )
}
export default ProfileMenu;